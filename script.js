const display = document.querySelector('#display');
const allBttns = Array.from(document.querySelectorAll('button'));

const displayValue = document.createElement('h1');
displayValue.innerText = '0';
display.appendChild(displayValue);

const allOperators = ['+', '-', '*', '/', '='];
let arr = [];
let firstValue = '';
let secondValue = '';

for (let bttn of allBttns) {
    bttn.addEventListener('click', (e) => {

        if (e.target.className == 'numbers' && arr.length == 0) {
            firstValue += e.target.innerText;

        } else if (e.target.className == 'numbers' && arr.length == 2) {
            secondValue += e.target.innerText;
        }
        else if (e.target.className == 'operators' && firstValue && arr.length == 0) {
            console.log('push 1 and op');
            arr.push(firstValue);
            arr.push(e.target.innerText);
        }
        else if (e.target.className == 'operators' && arr.length == 2) {
            console.log('push 2 and op');
            arr.push(secondValue);
            arr.push(e.target.innerText);
        }
        // Check if operator button is clicked & firstValue is ''
        // Empty string is falsy
        else if (e.target.className == 'operators' && !firstValue) {
            console.log(`incorrect -${firstValue}-`);

            arr.push('0');
            arr.push(e.target.innerText);
        }
        // Clear out the array & reset display
        else if (e.target.id == 'ac') {

            let counter = arr.length;
            for (let i = 0; i < counter; i++) {
                arr.pop();
            }
            displayValue.innerText = 0;
            firstValue = '';
            secondValue = '';
        }

    })
}

const add = function (x, y) {
    return x + y;
}

const subtract = function (x, y) {
    return x - y;
}

const multiply = function (x, y) {
    return x * y;
}

const divide = function (x, y) {
    return x / y;
}

const operate = function (operator, x, y) {
    operator(x, y);
}

