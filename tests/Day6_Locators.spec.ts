/*

1)getByRole()
it will indentify elements by using  ariarole and its accsessible name

Syntax:
page.getByRole(role,options)

page.getByRole('button',{})



Role => what type of element it is (button, textbox)
accessible name => by using this you can identify particular element 
1)Text
  <button>login</button>
2)aria label
  <button aria-label='logout>xyx</button>
3)form label
<label for="username">Username:</label>
<input type="text" id="username" role="textbox"> 
  



Html  => Role 
button   Button
<a>      link 
input/textarea => textbox 
checkbox => checkbox 
h1 to h6 => heading 
image  => img
select  => listbox 


2)getByText()
3)getByLabel()
4)getByPlaceHolder()
5)getByAltText()
6)getByTitle()
7)getByTestId()

//locatormethods
8)Css
9)Xpath

*/
import { test, expect } from '@playwright/test'


  test('getByRole', async ({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
        await page.getByRole('button',{name:'Primary Action',exact:true}).click();  //autowaiting mechanism

        //regular expressions
        //  await page.getByRole('button',{name:'/Primary/'}).click() //
        //  await page.getByRole('button',{name:'/primary/i'}).click() 
        //  //  await page.getByRole('button',{name:'/^primary/'}).click() 
        //await page.getByRole('button',{name:'/Action$/'}).click()

        //checkboxes 

        await page.getByRole('textbox',{name:'Username:'}).fill('Dev');

        await page.getByRole('link',{
            
            name:'Home',
            exact:true
        
        }).first().click()



     
    })




