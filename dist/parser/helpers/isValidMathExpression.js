export default function isValidMathExpression(expression) {
    const regexp = /(?<left>[-+]?\d+(?:\.\d+)?)(?<operator>[-+/*])(?<right>\d+(?:\.\d+)?)/;
    return regexp.test(expression);
}
