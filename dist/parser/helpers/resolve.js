import {} from "./../../types/operator.types.js";
import getPrecedence from "./getPrecedence.js";
import getRegexpPattern from "./getRegexpPattern.js";
export default function resolve(expression) {
    const precedence = getPrecedence(expression);
    const regexp = getRegexpPattern(precedence);
    const groups = expression.match(regexp)?.groups;
    const index = expression.match(regexp)?.index;
    if (!groups) {
        return expression;
    }
    const expressionStartsWithOperator = index === 0 && /^[-+/*]/.test(expression);
    /*
        If the first character of an expression is an
        operator, then the operator signal will be ignored
        when assign the value of the variable left, being
        its value starting from the first number.
    */
    const left = expressionStartsWithOperator
        ? parseFloat(groups.left.slice(1))
        : parseFloat(groups.left);
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
    const previousSubExpression = `${left}${operator}${right}`;
    return expression.replace(previousSubExpression, result.toString());
}
