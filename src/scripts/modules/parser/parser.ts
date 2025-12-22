import {isValidExpression} from "./helpers/isValidExpression.ts";

/**
 * Receives a mathematical expression
 * and resolves it.
 * @param expression A mathematical expression.
 * @returns Returns the result of a given mathematical expression.
 */
export function parser(expression: string): string {
	const isValid = isValidExpression(expression);

	if (!isValid) {
		return expression;
	}

	return eval(expression);
}
