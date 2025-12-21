import type {Operation} from "../../../types/operation.types.ts";
import {EXPRESSION_START_WITH_OPERATOR_REGEX} from "../../regex/patterns.ts";

/**
 * Returns the operation that must be
 * resolved before the others in a
 * mathematical expression based on the
 * precedence rules.
 * @param expression A mathematical expression.
 */
export function getExpressionCurrentPrecedence(
	expression: string,
): Operation {
	const checkStartsWithOperator =
		EXPRESSION_START_WITH_OPERATOR_REGEX.test(expression);

	if (checkStartsWithOperator) {
		expression = expression.slice(1);
	}

	const hasMultiplication = expression.indexOf("*") !== -1;
	const hasDivision = expression.indexOf("/") !== -1;

	if (hasMultiplication || hasDivision) {
		return getOperationToAppearFirst(expression, "*", "/");
	}

	return getOperationToAppearFirst(expression, "+", "-");
}

/**
 * Given two operators, returns
 * the first operator to appear
 * in the expression.
 * @param expression A mathematical expression.
 * @param firstOPeration Operator symbol.
 * @param secondOperation Operator symbol.
 * @returns Returns the first of the operators to appear.
 */
function getOperationToAppearFirst(
	expression: string,
	firstOPeration: Operation,
	secondOperation: Operation,
): Operation {
	if (firstOPeration === secondOperation) {
		return firstOPeration;
	}

	const firstOperationIndex = expression.indexOf(firstOPeration);
	const secondOperationIndex = expression.indexOf(secondOperation);

	const onlyFirstOperationExist =
		firstOperationIndex !== -1 && secondOperationIndex === -1;
	const onlySecondOperationExist =
		secondOperationIndex !== -1 && firstOperationIndex === -1;

	if (onlyFirstOperationExist) {
		return firstOPeration;
	} else if (onlySecondOperationExist) {
		return secondOperation;
	} else {
		return firstOperationIndex < secondOperationIndex ? firstOPeration : (
				secondOperation
			);
	}
}
