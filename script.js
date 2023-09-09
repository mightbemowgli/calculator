let firstOperand = '';
let secondOperand = '';
let currentOperation = '';
let shouldReset = false;

const lastOpScreen = document.getElementById('lastOpScreen');
const currentOpScreen = document.getElementById('currentOpScreen');
const numberButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.op');
const clearButton = document.getElementById('clearBtn');
const deleteButton = document.getElementById('delBtn');
const decimalButton = document.getElementById('decimal');
const equalsButton = document.getElementById('equalsBtn');

numberButtons.forEach(button => button.addEventListener('click', () => appendNumber(button.textContent)));
operatorButtons.forEach(button => button.addEventListener('click', () => appendNumber(button.textContent)));
clearButton.addEventListener('click', () => clearScreen());

const resetScreen = () => {
    currentOpScreen.textContent = '';
    shouldReset = false;
}

const clearScreen = () => {
    lastOpScreen.textContent = '';
    currentOpScreen.textContent = '0';
}

const appendNumber = num => {
    if (currentOpScreen.textContent === '0' || shouldReset)
        resetScreen();
        currentOpScreen.textContent += num;
}

const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}

const operate = (operator, a, b) => {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '÷':
            if (b === 0) return null;
            else return divide(a, b);
        default:
            return null;
    }
}
