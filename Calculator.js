let output = document.getElementById("output");
let evaluationString = "";
let result;

function appendToDisplay(x) {
    if (evaluationString === "0") {
        evaluationString = x;
    } else {
        evaluationString += x;
    }
    output.textContent = evaluationString;
}

function equal() {
    try {
        let expression = evaluationString.replace(/×/g, '*').replace(/÷/g, '/');
        result = eval(expression);
        output.textContent = result;
        evaluationString = `${result}`;
    } catch (error) {
        output.textContent = "Error";
        evaluationString = "";
    }
}

function c() {
    evaluationString = "0";
    output.textContent = evaluationString;
}
c();
