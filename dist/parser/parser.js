import hasExpressionOperators from "./helpers/hasExpressionOperators.js";
import isValidMathExpression from "./helpers/isValidMathExpression.js";
import resolve from "./helpers/resolve.js";
export default function parser(expression) {
    const isValidExpression = isValidMathExpression(expression);
    const hasOperators = hasExpressionOperators(expression);
    if (!isValidExpression || !hasOperators) {
        return expression;
    }
    expression = resolve(expression);
    return parser(expression);
}
