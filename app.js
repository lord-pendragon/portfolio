(function() {
    var colorIndex = 0;
    var colors = ['red', 'green', 'blue'];

    function rollDie(sides) {
        try {
            var result = Math.floor(Math.random() * sides) + 1;
            displayResult(result);
        } catch (error) {
            displayError(error);
        }
    }

    function rollCustomDie() {
        try {
            var sides = document.getElementById('customDie').value;
            if (sides) {
                var result = Math.floor(Math.random() * sides) + 1;
                displayResult(result);
            } else {
                throw new Error('Please enter a valid number of sides.');
            }
        } catch (error) {
            displayError(error);
        }
    }

    function displayResult(result) {
        var resultDiv = document.getElementById('result');
        resultDiv.textContent = result;
        resultDiv.style.color = colors[colorIndex];
        resultDiv.style.fontSize = '200px';  // Setting the font size
        colorIndex = (colorIndex + 1) % colors.length;
    }

    function displayError(error) {
        var resultDiv = document.getElementById('result');
        resultDiv.textContent = error.message;
        resultDiv.style.color = 'red';
        resultDiv.style.fontSize = '20px';
    }

    window.rollDie = rollDie;
    window.rollCustomDie = rollCustomDie;
})();
