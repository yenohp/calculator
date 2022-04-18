# calculator
The calculator will contain functions for all of the basic math operators you typically find on simple calculators.
These incldue:
1. add
2. subtract
3. multiply
4. divide

Create a function 'operate' that takes an operator and 2 numbers and then calls one of the functions above.
    operate(function(x,y))

Create a basic HTML calculator with buttons for each digit 0-9, each of the functions +,-,*,/,=

Create a display for the calculator
Add a clear button

Create functions that populate the display when you click the buttons. You should be storing the values in variables so the operate function can be called when the '=' key is pressed.

===================================
Users should be able to:
1. String together several operations and get the right answer. (i.e. 12 + 7 -5 * 3 = 42). 
2. You're probably thinking "what about PEMDAS". This is because the calculator should not evaluate more than a single pair of numbers at a time. So it would do 12 + 7 = 19 - 5 = 14 * 3 = 42.
3. Round the decimals
4. Pressing = before adding numbers should throw an error
5. Clear should wipe out any saved data.
6. Divide by zero funny response
7. Decimals limited to the tenth place (i.e. 82.2, 5.3, etc.)
8. Make it look nice
9. Add a backspace
10. Keyboard support?

====================================

CREDITS: 
https://www.canva.com/colors/color-palettes/luscious-lemonade/ -- color palette 


====================================
Idea:
Create an empty array (not on each click event)
    assign first value of array to be 0 if one of the operators is clicked first
    push value to array everytime an operator is clicked
    if the array has 3 elements, and an operator button is clicked, then the array is emptied and the first value is the result of the previous operation. (i.e. 2 + 3 + => 6 + ...)
    if(arr.length == 3 && e.target.className == 'operators'){
        destructure x,y,operator
        call operations function
        empty array, place returned value into array
    }

Just need to figure out how to evaluate and display (toString?)

destructure array x = arr[0], y=arr[2], operation = arr[1] -> create a separate string variable to hold stringified array (before evaluate) -> turn returned operation to new string (after evaluate)

TODO: Display current situation, then work on doing the actual operation functions