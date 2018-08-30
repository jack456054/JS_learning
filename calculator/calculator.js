var problemID;

function displayProblem() {
    if (problemID) {
        document.getElementById(problemID).setAttribute("style", "display: none");
    }
    problemID = document.getElementById('problemType').value;
    var form = document.getElementById(problemID);
    var numFieldX = document.getElementById(problemID + 'numFieldX');
    var numFieldY = document.getElementById(problemID + 'numFieldY');
    var resultField = document.getElementById('resultField');
    numFieldX.value = "";
    numFieldY.value = "";
    resultField.innerText = "";
    form.setAttribute("style", "display: default");
    form.addEventListener('submit', function (event) {
        if (!numFieldX.value || !numFieldY.value) {
            alert("Please enter values in the field!");
        } else {
            var x = parseFloat(numFieldX.value);
            var y = parseFloat(numFieldY.value);
            var percent;
            switch(problemID) {

                case "xIsWhatPercentOfY":
                    resultField.innerText = "Answer: " + x / y * 100 + "%";
                    break;

                case "whatIsYPercentOfX":
                    resultField.innerText = "Answer: " + x * (y / 100);
                    break;

                case "xisYPercentOfWhat":
                    resultField.innerText = "Answer: " + x / y * 100;
                    break;

                case "whatPercentOfXIsY":
                    resultField.innerText = "Answer: " + y / x * 100 + "%";
                    break;

                case "xPercentOfWhatIsY":
                    resultField.innerText = "Answer: " + y / x * 100;
                    break;

                case "yPercentOfXIsWhat":
                    resultField.innerText = "Answer: " + x * (y / 100);
                    break;
            }
        }
        event.preventDefault();
    });
}
