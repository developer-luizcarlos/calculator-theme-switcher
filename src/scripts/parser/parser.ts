import hasExpressionOperators from "./helpers/hasExpressionOperators.ts";
import isValidMathExpression from "./helpers/isValidMathExpression.ts";
import resolve from "./helpers/resolve.ts";

export default function parser(expression: string): string {
	const isValidExpression = isValidMathExpression(expression);
	const hasOperators = hasExpressionOperators(expression);

	if (!isValidExpression || !hasOperators) {
		return expression;
	}

	expression = resolve(expression);
	return parser(expression);
}
