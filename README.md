# ToDoListApp

Steps:

1. HTML & CSS Starter Code

   - div container
   - h1
   - input
   - button- disabled by default

2. The "add" must be enabled when usert types in input

   - if the user clears the input, the button should be disabled again
   - create 2 variables containing the input and button elemn
   - add an event listener for input element (try using 'input' event-- if doesn't work properly try using 'keyup' event)
   - disabled property will be set to true when input value length > 0 otherwise false

3. The user should be able to add a new todo to the list
   - eventListner - addButton
     -create li element containing value from input
   - append li element to list (ul)
     -add styles for li
