const display = document.getElementById('display');
const fontSizeInput = document.getElementById('font-size');
const backgroundColorInput = document.getElementById('background-color');
const buttons = document.querySelectorAll('.buttons button');

// Append a number to the display
function appendNumber(number) {
    display.value += number;
}

// Append an operator to the display
function appendOperator(operator) {
    display.value += operator;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Calculate the result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Change font size
fontSizeInput.addEventListener('input', () => {
    display.style.fontSize = `${fontSizeInput.value}px`;
    
    });

// Change background color
backgroundColorInput.addEventListener('input', () => {
    document.body.style.backgroundColor = backgroundColorInput.value;
});

// Add event listeners to calculator buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.blur(); // Remove focus after clicking
    });
});
