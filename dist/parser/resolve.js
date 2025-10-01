import getOperatorIndex from "./getOperatorIndex.js";
const resolve = (expression) => {
    const operatorIndex = getOperatorIndex(expression);
    const left = parseFloat(expression.slice(0, operatorIndex));
    const right = parseFloat(expression.slice(operatorIndex + 1, expression.length));
    const operator = expression.at(operatorIndex);
    switch (operator) {
        case "*":
            return left * right;
        case "/":
            return left / right;
        case "+":
            return left + right;
        case "-":
            return left - right;
    }
};
export default resolve;
