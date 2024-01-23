// import

import type {Browser} from 'playwright';

// export

export async function automate(browser: Browser) {
  const page = await browser.newPage();
  await page.goto('https://www.browsercat.com/');

  const $footerLinks = await page.locator('footer a').all();
  const footerLinks = await Promise.all($footerLinks.map(async (el) => {
    return {
      text: (await el.textContent())?.trim(),
      link: await el.getAttribute('href'),
    };
  }));

  return footerLinks;
}
