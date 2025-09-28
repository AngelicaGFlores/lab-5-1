Reflection Questions
How did you dynamically create and append new elements to the DOM?
- first I took a look at the attributes i was given to create a new element. 
- I mainly used the name of the product and the price of the product in innerhtml elements
- i passed on the product price to the price function when adding a new item and also passing negative number when deleting 
- I created a new dom element the moment the user pressed the addbutton, then the function itself would check to see if the was any input for the product name or if the product price was missing then the new element could not be created.

What steps did you take to ensure accurate updates to the total price?
- This was challenging to keep track at first because I initally passed the value when the new element for the product in the product list cart was created.
- However something very important was that we had to create a datset to the price im not sure why but this helped make sure the price was always updating even when being removed. 
- the price dataset info was set to the price input value

How did you handle invalid input for product name or price?
- The invalid input is checked once the user clicks
- I created a new dom element the moment the user pressed the addbutton, then the function itself would check to see if the was any input for the product name or if the product price was missing then the new element could not be created.
- if the handle was invalid it could either send the user an alert or display a text, i chose an alert.
- i could have used a form with regex strict inputs but I was not aware how to do that at the time.

What challenges did you face when implementing the remove functionality?
- The main challenged ffor the remove functionality was why the price was not updating at first but once i got the price to update the remove section was easy to track the new numbers in negative value.