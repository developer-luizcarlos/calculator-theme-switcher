import {parser} from "../modules/parser/parser.ts";
import {EXPRESSION_LAST_CHAR_IS_OPERATOR_REGEX} from "../modules/regex/patterns.ts";
import {$screen} from "./elements.ts";

export const SCREEN_VALUE_LENGTH_LIMIT = 10;

export function deleteLastDigit() {
	const screenValue = getScreenValue();

	if (screenValue === "0") {
		return;
	}

	if (screenValue.length === 1) {
		setScreenValue("0");
	} else {
		const slicedScreenValue = screenValue.slice(0, -1);

		setScreenValue(slicedScreenValue);
	}
}

export function displayResult() {
	const expression = getScreenValue();

	let evaluatedExpression = parser(expression).toString();

	if (evaluatedExpression === expression) {
		return;
	}

	if (evaluatedExpression.length > SCREEN_VALUE_LENGTH_LIMIT) {
		evaluatedExpression = evaluatedExpression.slice(
			0,
			SCREEN_VALUE_LENGTH_LIMIT,
		);
	}

	setScreenValue(evaluatedExpression);
}

export function getScreenValue(): string {
	return $screen!.textContent!;
}

export function insertOperatorDigit(digit: string): void {
	const screenValue = getScreenValue();

	const screenValueLength = screenValue.length;

	const isLastCharAnOperator =
		EXPRESSION_LAST_CHAR_IS_OPERATOR_REGEX.test(screenValue);

	if (isLastCharAnOperator) {
		return;
	}

	if (screenValueLength < SCREEN_VALUE_LENGTH_LIMIT) {
		if (screenValue === "0") {
			if (digit === "+" || digit === "-") {
				setScreenValue(digit);
			} else {
				setScreenValue(screenValue + digit);
			}
		} else {
			setScreenValue(screenValue + digit);
		}
	}
}

export function insertNumericDigit(digit: string): void {
	const screenValue = getScreenValue();

	const screenValueLength = screenValue.length;

	if (screenValueLength < SCREEN_VALUE_LENGTH_LIMIT) {
		if (screenValue === "0") {
			setScreenValue(digit);
		} else {
			setScreenValue(screenValue + digit);
		}
	}
}

export function reset(): void {
	const screenValue = getScreenValue();

	if (screenValue === "0") {
		return;
	}

	setScreenValue("0");
}

export function setScreenValue(value: string): void {
	$screen!.textContent = value;
}
