let currentInput = '';
let operator = '';
let previousInput = '';

const display = document.getElementById('display');
const subDisplay = document.getElementById('sub-display');

display.textContent = '';

function addNumber(num) {
    if (display.textContent === '0') display.textContent = '';
    display.textContent += num;
    currentInput = display.textContent;
}

function addOperator(op) {
    if (currentInput === '') return;
    operator = op;
    previousInput = currentInput;
    subDisplay.textContent = `${previousInput} ${operator}`;
    display.textContent = '';
    currentInput = '';
}

function calculateResult() {
    if (previousInput === '' || currentInput === '') return;
    const result = eval(`${previousInput}${operator}${currentInput}`);
    display.textContent = result;
    subDisplay.textContent = `${previousInput} ${operator} ${currentInput} =`;
    previousInput = '';
    currentInput = result;
}

function deleteOne() {
    display.textContent = display.textContent.slice(0, -1);
    currentInput = display.textContent;
    if (display.textContent === '') display.textContent = '0';
}

function clearAll() {
    display.textContent = '0';
    subDisplay.textContent = '';
    currentInput = '';
    previousInput = '';
    operator = '';
}

//On off

function toggleOnOff() {
    const containerOnOf = document.getElementById('on-of-container');
    const buttons = document.querySelectorAll('button');
  
    buttons.forEach(button => {
        if (button.classList.contains('button') || button.classList.contains('button-on')) {
            button.classList.toggle('button-on');
        } else if (button.classList.contains('operator') || button.classList.contains('operator-on')) {
            button.classList.toggle('operator-on');
        } else if (button.classList.contains('action') || button.classList.contains('action-on')) {
            button.classList.toggle('action-on');
        } else if (button.classList.contains('equal') || button.classList.contains('equal-on')) {
            button.classList.toggle('equal-on');
        }
    });
}

