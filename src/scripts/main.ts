// Imports
import {loadTheme, setTheme} from "./theme.ts";
import type {Theme} from "./types/theme.types.ts";
import isLastCharNumber from "./utils/isLastCharNumber.ts";

// DOM Elements
const btnDelete = document.querySelector(
	".btn--delete",
) as HTMLButtonElement;
const btnNumeric = document.querySelectorAll(
	".btn--numeric",
) as NodeListOf<HTMLButtonElement>;
const btnSignal = document.querySelectorAll(
	".btn--signal",
) as NodeListOf<HTMLButtonElement>;
const btnReset = document.querySelector(
	".btn--reset",
) as HTMLButtonElement;
const calculatorScreen = document.querySelector(
	".calculator__screen",
) as HTMLInputElement;
const toggleInputs = document.querySelectorAll(
	".toggle__input",
) as NodeListOf<HTMLInputElement>;

// Functions Declarations
function addValueToCalculatorScreen(
	value: string,
	type: "numeric" | "signal",
): void {
	if (type === "signal" && !isLastCharNumber(calculatorScreen.value)) {
		return;
	}

	calculatorScreen.value = calculatorScreen.value + value;
}

function deleteValueFromCalculatorScreen(): void {
	const calcValue = calculatorScreen.value;
	const newCalcValue = calcValue.slice(0, calcValue.length - 1);
	calculatorScreen.value = newCalcValue || "0";
}

function resetCalculatorScreen(): void {
	calculatorScreen.value = "0";
}

// Functions Applied
document.addEventListener("DOMContentLoaded", () => {
	loadTheme();
});

btnDelete.addEventListener("click", deleteValueFromCalculatorScreen);

btnNumeric.forEach(btn => {
	btn.addEventListener("click", () => {
		const value = btn.getAttribute("data-value")!;
		addValueToCalculatorScreen(value, "numeric");
	});
});

btnSignal.forEach(btn => {
	btn.addEventListener("click", () => {
		const value = btn.getAttribute("data-value")!;
		addValueToCalculatorScreen(value, "signal");
	});
});

btnReset.addEventListener("click", resetCalculatorScreen);

toggleInputs.forEach(radio => {
	radio.addEventListener("input", e => {
		const input = e.target as HTMLInputElement;
		const value = input.value as Theme;

		setTheme(value);
	});
});
