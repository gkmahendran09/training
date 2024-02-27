function buttonclick(val) {
    document.getElementById("screen").value += val;
}

function cleardisplay() {
    document.getElementById("screen").value = "";
}

function equalclick() {
    var expression = document.getElementById("screen").value;
    var result = calculate(expression);
    document.getElementById("screen").value = result;
}

function calculate(expression) {
    var tokens = expression.split(/([\+\-\*\/])/);
    var result = parseFloat(tokens[0]);

    for (var i = 1; i < tokens.length; i += 2) {
        var operator = tokens[i];
        var operand = parseFloat(tokens[i + 1]);

        switch (operator) {
            case '+':
                result += operand;
                break;
            case '-':
                result -= operand;
                break;
            case '*':
                result *= operand;
                break;
            case '/':
                if (operand === 0) {
                    return "Error";
                }
                result /= operand;
                break;
            default:
                break;
        }
    }

    return result;
}
