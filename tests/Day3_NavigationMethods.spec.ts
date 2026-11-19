/*
navigation methods
==================
1)page.goto()
2)page.goback()
3)page.goFoward()
4)page.reload()


*/

import {test,expect,Response} from '@playwright/test'

//1)page.goto(url)
// page.goto(url,options)
// page.goto(url,{})


test.use({
    headless:false
})

test('Test1', async ({page,browser,context,request})=>{     //browser(Chrome)=>browsercontext => page 

let response:Response|null = await page.goto('https://www.flipkart.com/', {
waitUntil:'load'
});

console.log(response?.text())
console.log(response?.status())








//Navigation methods

//flipkart 
//amazon

await page.goto('https://www.amazon.in/',{waitUntil:'load'})
await page.goBack({waitUntil:'load'})
await page.goForward({waitUntil:'load'});
await page.reload({waitUntil:'load'})

//page information methods => you are getting or extract infromation from browser
// page.title()

let pageTitle:string = await page.title();
console.log('Page title is ',pageTitle)

//expect(pageTitle).toContain('Online Shopping site in India')

//page.url  => https://www.amazon.in/

let pageUrl:string = page.url();

console.log('current page url ',pageUrl)


// page.content()
console.log( await page.content())


let viewPortSize = page.viewportSize()
console.log('viewPortSize',viewPortSize)

// page.isClosed()

console.log(page.isClosed())   // false

await page.close();

console.log(page.isClosed())  //true


//browser information

console.log(browser.version())

console.log(browser.contexts().length)


//support methods

// identify an element (locators)+ perform action on the identified elements(action methods)


})

//
