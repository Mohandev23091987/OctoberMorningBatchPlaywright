import {test,expect} from '@playwright/test'

test.use({
    browserName:'firefox',
    headless:false
})

test('running in different binaries and browsers', async ({page})=>{   // Browser => browser context => page
await page.goto('https://www.amazon.com/');
})


test('test2', async ({page})=>{ // Browser => browser context => page
await page.goto('https://www.amazon.com/');
await page.waitForTimeout(10000)
})


test('test3', async ({page})=>{   // Browser => browser context => page
await page.goto('https://www.amazon.com/');
})

//browser navigation methods 
//browser information

//locators => 

//login 
