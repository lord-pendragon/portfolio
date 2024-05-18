let colorIndex = 0;
const colors = ['red', 'green', 'blue'];

function rollDie(sides) {
    const result = Math.floor(Math.random() * sides) + 1;
    displayResult(result);
}

function rollCustomDie() {
    const sides = document.getElementById('customDie').value;
    if (sides) {
        const result = Math.floor(Math.random() * sides) + 1;
        displayResult(result);
    }
}

function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = result;
    resultDiv.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}
