import {VALID_EXPRESSION_REGEX} from "../../regex/patterns.ts";

/**
 * Check if a mathematical expression is valid.
 *
 * Valid expression examples:
 *
 * 12+5-1.420
 *
 * 0.5*100
 *
 * 4/2*8
 *
 * 0.125/12-33*4.2
 * @param expression A mathematical expression.
 * @returns Returns true if the mathematical expression is a valid one.
 */
export function isValidExpression(expression: string): boolean {
	return VALID_EXPRESSION_REGEX.test(expression);
}
