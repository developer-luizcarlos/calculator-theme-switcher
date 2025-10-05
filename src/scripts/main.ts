// Imports
import {loadTheme, setTheme} from "./theme.ts";
import type {Theme} from "./types/theme.types.ts";
import isLastCharNumber from "./utils/isLastCharNumber.ts";

// DOM Elements
const btnNumeric = document.querySelectorAll(
	".btn--numeric",
) as NodeListOf<HTMLButtonElement>;
const btnSignal = document.querySelectorAll(
	".btn--signal",
) as NodeListOf<HTMLButtonElement>;
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

// Functions Applied
document.addEventListener("DOMContentLoaded", () => {
	loadTheme();
});

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

toggleInputs.forEach(radio => {
	radio.addEventListener("input", e => {
		const input = e.target as HTMLInputElement;
		const value = input.value as Theme;

		setTheme(value);
	});
});
