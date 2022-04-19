const display = document.querySelector('#display');
const allBttns = Array.from(document.querySelectorAll('button'));
const allOperators = Array.from(document.querySelectorAll('.operators'));
const displayValue = document.querySelector('.displayValue');
const ac = document.querySelector('#ac');

let arr = [];
let firstValue = '';
let secondValue = '';
let counter = 0;
let counter2 = 0;

for (let bttn of allBttns) {
    bttn.addEventListener('click', (e) => {
        // Display number inputs
        if (e.target.className == 'numbers') {
            // Check if this is the second value
            if (arr.length > 0) {
                // Push the operator onto the array
                for (let operator of allOperators) {
                    if (operator.className == 'operators hover') {
                        arr.push(operator.innerText);
                        activate(operator);
                    }
                }
                // Add the second value
                secondValue += e.target.innerText;
                while (counter2 < 1) {
                    displayValue.innerText = '';
                    counter2++;
                }
                // Remove the starting zero if a number is added
                displayValue.innerText += e.target.innerText;
            } else {
                firstValue += e.target.innerText;
                // Remove the starting zero if a number is added
                while (counter < 1) {
                    displayValue.innerText = displayValue.innerText.slice(1);
                    counter++;
                }
                displayValue.innerText += e.target.innerText;
            }
        }
        // Show that the operator is active/deactivate it
        if (e.target.className == 'operators' || e.target.className == 'operators hover') {
            activate(e.target);
            // Push the first value only once
            if (arr.length == 0) {
                arr.push(firstValue);
            }
        }
        if (e.target.id == 'deleteInput') {
            firstValue.slice(0, firstValue.length - 1);
            displayValue.innerText = displayValue.innerText.slice(0, displayValue.innerText.length - 1);
            if (displayValue.innerText.length == 0) displayValue.innerText = '0'; counter = 0; return;
        }
    });
}

const operate = function (operator, x, y) {
    if (operator == '+') {
        return x + y;
    } else if (operator == '-') {
        return x - y;
    } else if (operator == '*') {
        return x * y;
    } else if (operator == '/') {
        return x / y;
    }
}

const activate = function (operator) {
    if (operator.className == 'operators hover') {
        operator.classList.remove('hover');
    } else {
        operator.classList.add('hover');
    }
}