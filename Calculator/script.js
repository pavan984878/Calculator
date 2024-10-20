let displayValue = '0';

function pressKey(key) {
    if (displayValue === '0') {
        displayValue = key;
    } else {
        displayValue += key;
    }
    updateDisplay();
}

function del() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
        displayValue = '0';
    }
    updateDisplay();
}

function reset() {
    displayValue = '0';
    updateDisplay();
}
function calculate() {
    try {
        displayValue = eval(displayValue.replace('x', '*')).toString();
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}