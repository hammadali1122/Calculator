let screen = document.getElementById('screen');
let lastResult = document.getElementById('lastResult');

function appendToScreen(value) {
  if (screen.textContent.includes('=') && !isNaN(value)) {
    // Clear the screen if the previous result is shown and a digit is pressed
    screen.textContent = '';
  }
  screen.textContent += value;
}

function clearScreen() {
  screen.textContent = '';
  lastResult.textContent = '';
}

function backspace() {
  let currentExpression = screen.textContent;
  screen.textContent = currentExpression.substring(0, currentExpression.length - 1);
}

function calculateResult() {
  try {
    const result = eval(screen.textContent);
    lastResult.textContent = `Last Result: ${result}`;
    screen.textContent = `= ${result}`; // Prefix result with '='
  } catch (error) {
    screen.textContent = 'Error';
    lastResult.textContent = '';
  }
}

