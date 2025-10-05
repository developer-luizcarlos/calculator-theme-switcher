export default function hasExpressionOperators(expression) {
    const regexp = expression.search(/[-+/*]/);
    return regexp !== -1;
}
