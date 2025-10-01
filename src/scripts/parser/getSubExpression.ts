import getPrecedence from "./getPrecedence.ts";
import getSubExpressionRegexp from "./getSubExpressionRegexp.ts";

const getSubExpression = (expression: string): string => {
	const precedence = getPrecedence(expression);

	if (!precedence) {
		return expression;
	}

	const pattern = getSubExpressionRegexp(precedence);
	const {left, right} = expression.match(pattern)!.groups!;
	const subExpression = `${left}${precedence}${right}`;
	return subExpression;
};

export default getSubExpression;
