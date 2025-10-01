import getSubExpression from "./getSubExpression.ts";
import hasExpressionOperators from "./hasExpressionOperators.ts";
import resolve from "./resolve.ts";

const parser = (expression: string) => {
	const hasOperators = hasExpressionOperators(expression);

	if (!hasOperators) {
		return expression;
	}

	const subExpression = getSubExpression(expression);
	const result = resolve(subExpression).toString();

	expression = expression.replace(subExpression, result);

	return parser(expression);
};

export default parser;
