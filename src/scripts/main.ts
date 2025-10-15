// Imports
import parser from "./parser/parser.ts";
import { loadTheme, setTheme } from "./theme.ts";
import type { Theme } from "./types/theme.types.ts";
import formatExpression from "./utils/formatExpression.ts";
import isLastCharNumber from "./utils/isLastCharNumber.ts";

// DOM Elements
const btnDelete = document.querySelector(".btn--delete") as HTMLButtonElement;
const btnNumeric = document.querySelectorAll(
  ".btn--numeric"
) as NodeListOf<HTMLButtonElement>;
const btnSignal = document.querySelectorAll(
  ".btn--signal"
) as NodeListOf<HTMLButtonElement>;
const btnReset = document.querySelector(".btn--reset") as HTMLButtonElement;
const btnResult = document.querySelector(".btn--result") as HTMLButtonElement;
const calculatorScreen = document.querySelector(
  ".calculator__screen"
) as HTMLInputElement;
const toggleInputs = document.querySelectorAll(
  ".toggle__input"
) as NodeListOf<HTMLInputElement>;

// Functions Declarations
function addValueToCalculatorScreen(
  value: string,
  type: "numeric" | "signal"
): void {
  const calcValue = calculatorScreen.value;

  if (type === "numeric") {
    if (calcValue === "0" && value === "0") {
      calculatorScreen.value = "0";
    } else if (calcValue === "0" && value !== "0") {
      calculatorScreen.value = value;
    } else {
      calculatorScreen.value += value;
    }
  }

  if (type === "signal" && isLastCharNumber(calcValue)) {
    if (calcValue === "0" && (value === "+" || value === "-")) {
      calculatorScreen.value = value;
    } else {
      calculatorScreen.value += value;
    }
  }
}

function calculateResult(): void {
  const expression = calculatorScreen.value;

  if (isLastCharNumber(expression)) {
    const result = parser(expression);

    calculatorScreen.value = isNaN(parseFloat(result))
      ? "0"
      : formatExpression(result, 3);
  }
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
  resetCalculatorScreen();
});

btnDelete.addEventListener("click", deleteValueFromCalculatorScreen);

btnNumeric.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.getAttribute("data-value")!;
    addValueToCalculatorScreen(value, "numeric");
  });
});

btnSignal.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.getAttribute("data-value")!;
    addValueToCalculatorScreen(value, "signal");
  });
});

btnReset.addEventListener("click", resetCalculatorScreen);

btnResult.addEventListener("click", calculateResult);

toggleInputs.forEach((radio) => {
  radio.addEventListener("input", (e) => {
    const input = e.target as HTMLInputElement;
    const value = input.value as Theme;

    setTheme(value);
  });
});
