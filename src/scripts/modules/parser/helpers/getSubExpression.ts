import type {Operation} from "../../../types/operation.types.ts";
import {generateSubExpressionRegex} from "./getSubExpressionRegex.ts";

/**
 * Get a sub-expression from a
 * mathematical expression.
 * It is made of a left operator,
 * an operator and a right operator.
 * It gets the first sub-expression
 * containing the given operator.
 *
 * Examples:
 * ```
 * getSubExpression(12+5-4,"+") // 12+5
 * getSubExpression(0.7*100+5, "*") // 0.7*100
 * getSubExpression(10-5-2, "-") // 10-5
 * ```
 * @param expression A mathematical expression.
 * @param operation A operator symbol.
 * @returns A sub-expression from the given mathematical expression.
 */
export function getSubExpression(
	expression: string,
	operation: Operation,
): string {
	const subExpressionRegex = generateSubExpressionRegex(operation);

	const regexMatch = expression.match(subExpressionRegex);

	const groups = regexMatch!.groups!;

	const {firstOperand, operator, secondOperand} = groups;

	const subExpression = `${firstOperand}${operator}${secondOperand}`;

	return subExpression;
}
