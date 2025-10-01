const hasExpressionOperators = (expression: string): boolean => {
	const hasOperators =
		expression.includes("*") ||
		expression.includes("/") ||
		expression.includes("+") ||
		expression.includes("-");

	return hasOperators;
};

export default hasExpressionOperators;
