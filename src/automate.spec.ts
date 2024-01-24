// import

import { test, expect } from "playwright/test";
import { automate } from "./automate";
import fs from 'fs/promises';

// test

test('performs grab-bag of tasks', async ({browser}) => {
  const {
    footerLinks, imageFile, pdfFile, videoFile,
  } = await automate(browser);
  
  // assert the scraped data is valid

  footerLinks.forEach((link) => {
    expect(link.text?.length).toBeGreaterThan(0);
    expect(link.link?.length).toBeGreaterThan(0);
    expect(() => {
      new URL(link.link as string, 'http://localhost');
    }).not.toThrowError();
  });

  // check that generated media match the previous snapshot

  expect(await fs.readFile(imageFile)).toMatchSnapshot();

  // check that the pdf and video simply exists

  expect(() => fs.access(pdfFile)).not.toThrowError();
  expect(() => fs.access(videoFile)).not.toThrowError();
});
