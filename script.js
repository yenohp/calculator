const display = document.querySelector('#display');
const allBttns = Array.from(document.querySelectorAll('button'));
const allOperators = ['+', '-', '*', '/', '='];
const displayValue = document.createElement('h1');
displayValue.innerText = '0';

display.appendChild(displayValue);

for (let bttn of allBttns) {
    bttn.addEventListener('click', (e) => {
        let firstNum = 0;
        let secondNum = 0;

        if (e.target.className == 'operators') {
            if (e.target.className == 'equals') {
                if (allOperators.includes(displayValue.innerText.charAt(displayValue.innerText.length))) {
                    console.log('should delete');
                    displayValue.innerText.charAt(displayValue.innerText.length) = e.target.innerText;
                }
            }
            displayValue.innerText += e.target.innerText;
        } else if (e.target.className == 'numbers') {

        } else if (e.target.idName = 'decimal') {

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

