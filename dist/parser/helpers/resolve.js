import {} from "./../../types/operator.types.js";
import getPrecedence from "./getPrecedence.js";
import getRegexpPattern from "./getRegexpPattern.js";
export default function resolve(expression) {
    const precedence = getPrecedence(expression);
    const regexp = getRegexpPattern(precedence);
    const groups = expression.match(regexp)?.groups;
    if (!groups) {
        return expression;
    }
    const left = parseFloat(groups.left);
    const right = parseFloat(groups.right);
    const operator = groups.operator;
    let result;
    switch (operator) {
        case "+":
            result = left + right;
            break;
        case "-":
            result = left - right;
            break;
        case "/":
            result = left / right;
            break;
        case "*":
            result = left * right;
            break;
    }
    if (isNaN(result) || result === Infinity || result === -Infinity) {
        result = NaN;
    }
    return expression.replace(regexp, result.toString());
}
