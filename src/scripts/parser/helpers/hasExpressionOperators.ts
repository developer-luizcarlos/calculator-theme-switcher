export default function hasExpressionOperators(
	expression: string,
): boolean {
	const regexp = expression.search(/[-+/*]/);
	return regexp !== -1;
}
