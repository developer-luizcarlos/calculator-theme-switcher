export default function isValidMathExpression(
	expression: string,
): boolean {
	const regexp =
		/(?<left>[-+]?\d+(?:\.\d+)?)(?<operator>[-+/*])(?<right>\d+(?:\.\d+)?)/;

	return regexp.test(expression);
}
