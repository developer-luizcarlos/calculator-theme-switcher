import {type Operator} from "./../../types/operator.types.ts";
import getPrecedence from "./getPrecedence.ts";
import getRegexpPattern from "./getRegexpPattern.ts";

export default function resolve(expression: string): string {
	const precedence = getPrecedence(expression);
	const regexp = getRegexpPattern(precedence);

	const groups = expression.match(regexp)?.groups;

	if (!groups) {
		return expression;
	}

	const left = parseFloat(groups.left);
	const right = parseFloat(groups.right);
	const operator = groups.operator as Operator;

	let result: number;

	switch (operator) {
		case "+":
			result = left + right;
			break;
		case "-":
			result = left - right;
			break;
		case "/":
			result = left / right;
			break;
		case "*":
			result = left * right;
			break;
	}

	if (isNaN(result) || result === Infinity || result === -Infinity) {
		result = NaN;
	}

	return expression.replace(regexp, result.toString());
}
