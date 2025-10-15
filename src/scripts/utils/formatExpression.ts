export default function formatExpression(
  expression: string,
  decimalPoints: number = 2
): string {
  const expAsNumber = parseFloat(expression);
  const isInteger = Number.isInteger(expAsNumber);
  const isValidDecimalPoint = decimalPoints >= 0 && decimalPoints <= 20;

  decimalPoints = isValidDecimalPoint ? decimalPoints : 2;

  return isInteger
    ? expAsNumber.toString()
    : expAsNumber.toFixed(decimalPoints).toString();
}
