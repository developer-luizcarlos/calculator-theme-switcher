/**
 * Valid expression examples:
 *
 * 12+5-1.420
 *
 * 0.5*100
 *
 * 4/2*8
 *
 * 0.125/12-33*4.2
 */
export const VALID_EXPRESSION_REGEX =
	/^[\+\-]?(?<firstOperand>[0-9]+(?:\.[0-9]+)?)(?:(?<operator>[\+\-\*\/])(?<secondOperand>[0-9]+(?:\.[0-9]+)?))+$/;

/**
 * Valid examples:
 *
 * -12+5
 *
 * +0.5/10.5
 *
 */
export const EXPRESSION_START_WITH_OPERATOR_REGEX = /^[\+\-]/;
