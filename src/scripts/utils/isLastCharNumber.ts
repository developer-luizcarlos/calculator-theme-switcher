export default function isLastCharNumber(expression: string): boolean {
	if (expression.trim() === "") {
		return false;
	}

	const lastChar = expression[expression.length - 1];
	const lastCharToNumber = parseFloat(lastChar);
	const isNumber = !isNaN(lastCharToNumber);

	return isNumber;
}
