// import

import type {Browser} from 'playwright';
import fs from 'fs/promises';


// export

export async function automate(browser: Browser) {  
  // prepare the workspace

  const outputDir = `./.output/${browser.browserType().name()}`;
  await fs.mkdir(outputDir, {recursive: true});
  await fs.rm(outputDir, {recursive: true, force: true});

  // navigate via url bar

  const page = await browser.newPage();
  await page.goto('https://www.browsercat.com/');

  // navigate via links

  await page.click('text=Contact');
  await page.waitForLoadState();

  // automate form-filling

  await page.getByLabel('Name').fill('BrowserCat');
  await page.getByLabel('Email').fill('test@browsercat.com');
  await page.getByLabel('Message').fill('This is a simple test.');

  const $sendButton = page.locator('button');
  await $sendButton.filter({hasText: 'Send'}).click();
  await $sendButton.filter({hasText: 'Sent'}).waitFor();

  // create screenshot of specific element

  await page.locator('header a', {hasText: 'Blog'}).click();
  await page.setViewportSize({width: 600, height: 600});
  await page.waitForLoadState();

  const $blogHeader = page.locator('header:has(h1)');
  const blogHeaderImage = await $blogHeader.screenshot({
    path: `${outputDir}/blog-header.png`,
  });

  // create PDF of entire page

  await page.addStyleTag({content: `header > .fixed {position: absolute}`});
  const pdfFile = `${outputDir}/blog-page.pdf`;
  await page.pdf({
    path: pdfFile, 
    margin: {top: 0, right: 0, bottom: 0, left: 0},
    displayHeaderFooter: false,
    preferCSSPageSize: true,
    printBackground: false,
  });

  // record video of scrolling through a page

  const videoContext = await browser.newContext({
    recordVideo: {dir: outputDir},
  })
  const videoPage = await videoContext.newPage();
  const videoFile = `${outputDir}/blog-scroll.mp4`;
  const videoProm = videoPage.video()?.saveAs(videoFile);
  await videoPage.goto('https://www.browsercat.com/blog'); 

  await videoPage.evaluate(async () => {
    for (let i = 0; i < document.body.scrollHeight; i += 100) {
      window.scrollTo(0, i)
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  });

  await videoPage.close();
  await videoProm;

  // scrape some data

  const $footerLinks = await page.locator('footer a').all();
  const footerLinks = await Promise.all($footerLinks.map(async (el) => {
    return {
      text: (await el.textContent())?.trim(),
      link: await el.getAttribute('href'),
    };
  }));

  return {
    footerLinks,
    blogHeaderImage,
    pdfFile,
    videoFile,
  };
}
