import getSubExpression from "./getSubExpression.js";
import hasExpressionOperators from "./hasExpressionOperators.js";
import resolve from "./resolve.js";
const parser = (expression) => {
    const hasOperators = hasExpressionOperators(expression);
    if (!hasOperators) {
        return expression;
    }
    const subExpression = getSubExpression(expression);
    const result = resolve(subExpression).toString();
    expression = expression.replace(subExpression, result);
    return parser(expression);
};
export default parser;
