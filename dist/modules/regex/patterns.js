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
export const VALID_EXPRESSION_REGEX = /^[\+\-]?(?<firstOperand>[0-9]+(?:\.[0-9]+)?)(?:(?<operator>[\+\-\*\/])(?<secondOperand>[0-9]+(?:\.[0-9]+)?))+$/;
export const EXPRESSION_LAST_CHAR_IS_OPERATOR_REGEX = /[\+\-\*\/\.]$/;
//# sourceMappingURL=patterns.js.map