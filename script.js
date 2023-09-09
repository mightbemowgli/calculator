let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
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
operatorButtons.forEach(button => button.addEventListener('click', () => setOperation(button.textContent)));
clearButton.addEventListener('click', () => clearScreen());
deleteButton.addEventListener('click', () => deleteNumber());
equalsButton.addEventListener('click', () => evaluate());
decimalButton.addEventListener('click', () => appendDecimal());

const resetScreen = () => {
    currentOpScreen.textContent = '';
    shouldReset = false;
}

const clearScreen = () => {
    lastOpScreen.textContent = '';
    currentOpScreen.textContent = '0';
    firstOperand = '';
    secondOperand = '';
    currentOperation = null;
}

const deleteNumber = () => {
    currentOpScreen.textContent = 
    currentOpScreen.textContent.toString().slice(0,-1);
}

const appendNumber = num => {
    if (currentOpScreen.textContent === '0' || shouldReset)
        resetScreen();
        currentOpScreen.textContent += num;
}

const appendDecimal = () => {
    if (currentOpScreen.textContent.includes('.')) return;
    currentOpScreen.textContent += '.';
}

const setOperation = operator => {
    if (currentOperation !== null) evaluate(); 
    firstOperand = currentOpScreen.textContent;
    currentOperation = operator;
    lastOpScreen.textContent = `${firstOperand} ${currentOperation}`
    shouldReset = true;
}

const evaluate = () => {
    if (currentOperation === null || shouldReset) return;
    if (currentOperation === '÷' && currentOpScreen.textContent === '0') {
        alert('Nice try, Einstein.');
        return;
    }
    secondOperand = currentOpScreen.textContent;
    currentOpScreen.textContent = roundResult(operate(currentOperation, firstOperand, secondOperand))
    lastOpScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
    currentOperation = null;
}

const roundResult = num => {
    return Math.round(num * 1000) / 1000;
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
