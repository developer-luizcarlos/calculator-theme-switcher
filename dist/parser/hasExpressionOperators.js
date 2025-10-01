const hasExpressionOperators = (expression) => {
    const hasOperators = expression.includes("*") ||
        expression.includes("/") ||
        expression.includes("+") ||
        expression.includes("-");
    return hasOperators;
};
export default hasExpressionOperators;
