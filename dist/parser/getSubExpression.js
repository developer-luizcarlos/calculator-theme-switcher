import getPrecedence from "./getPrecedence.js";
import getSubExpressionRegexp from "./getSubExpressionRegexp.js";
const getSubExpression = (expression) => {
    const precedence = getPrecedence(expression);
    if (!precedence) {
        return expression;
    }
    const pattern = getSubExpressionRegexp(precedence);
    const { left, right } = expression.match(pattern).groups;
    const subExpression = `${left}${precedence}${right}`;
    return subExpression;
};
export default getSubExpression;
