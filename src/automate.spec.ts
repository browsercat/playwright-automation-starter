// import

import { test, expect } from "playwright/test";
import { automate } from "./automate";


// test

test('collects BrowserCat footer links', async ({browser}) => {
  const result = await automate(browser);
  
  result.forEach((link) => {
    expect(link.text?.length).toBeGreaterThan(0);
    expect(link.link?.length).toBeGreaterThan(0);
    expect(() => {
      new URL(link.link as string, 'http://test.com');
    }).not.toThrowError();
  });
});
