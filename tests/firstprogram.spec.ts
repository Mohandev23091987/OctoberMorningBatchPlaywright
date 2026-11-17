/*
Browser: its actual browser instance launched by your playwright 

//binary 
//real browser


*/

/*

  browser context : separate browser session created inside a browser

  each browser context will have separate:

  cookies 
  local storage 
  session storage
  cache and session related state
  

  */
/*
page: inviducal browser tab with in the browser context

A browser context can contain multiple tabs


*/


import { test, expect, chromium } from '@playwright/test'

// test('Launching chromium Binary', async () => {

//     console.log('this is first program')
//     let browser = await chromium.launch({
//         headless: false
//     });

//     let context1 = await browser.newContext();
//     let context2 = await browser.newContext();

//     let page1 = await context1.newPage();
//     let page2 = await context1.newPage();

//     await page1.goto('https://www.amazon.in/')
//     await page2.goto('https://www.flipkart.com/')

// })


test('Launching chrome by using fixture', async ({page}) => {
    await page.goto('https://www.amazon.in/')
})




