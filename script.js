// Variables to store values and operator
let displayValue = ''; // Shows the current number or result
let operator = ''; // Stores the operator (+, -, *, /)
let firstValue = ''; // Stores the first number entered

// Function to add numbers to the display
function appendNumber(number) {
    displayValue += number; // Add the clicked number to the display value
    document.getElementById('display').value = displayValue; // Update the display
}

// Function to set the operator
function setOperator(op) {
    if (displayValue === '') return; // Do nothing if no number is entered
    // Append the operator to the display
    displayValue += ' ' + op + ' '; 
    document.getElementById('display').value = displayValue; // Update the display
    operator = op; // Save the chosen operator
}

// Function to calculate and show the result
function calculateResult() {
    let result;
    // Extract numbers and operator from displayValue
    const parts = displayValue.split(' ');
    if (parts.length < 3) return; // If not enough parts for calculation

    firstValue = parts[0];
    operator = parts[1];
    const secondValue = parts[2];
    
    // Perform calculation based on the operator
    if (operator === '+') {
        result = parseFloat(firstValue) + parseFloat(secondValue); // Addition
    } else if (operator === '-') {
        result = parseFloat(firstValue) - parseFloat(secondValue); // Subtraction
    } else if (operator === '*') {
        result = parseFloat(firstValue) * parseFloat(secondValue); // Multiplication
    } else if (operator === '/') {
        result = parseFloat(firstValue) / parseFloat(secondValue); // Division
    }
    
    // Show the result in the display
    document.getElementById('display').value = result;
    // Update displayValue for further calculations
    displayValue = result;
}

// Function to clear the display
function clearDisplay() {
    displayValue = ''; // Reset the displayed value
    operator = ''; // Reset the operator
    firstValue = ''; // Reset the first number
    document.getElementById('display').value = ''; // Clear the display screen
}
