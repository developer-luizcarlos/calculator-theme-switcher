// Imports
import { loadTheme, setTheme } from "./theme.js";
import isLastCharNumber from "./utils/isLastCharNumber.js";
// DOM Elements
const btnDelete = document.querySelector(".btn--delete");
const btnNumeric = document.querySelectorAll(".btn--numeric");
const btnSignal = document.querySelectorAll(".btn--signal");
const btnReset = document.querySelector(".btn--reset");
const calculatorScreen = document.querySelector(".calculator__screen");
const toggleInputs = document.querySelectorAll(".toggle__input");
// Functions Declarations
function addValueToCalculatorScreen(value, type) {
    const calcValue = calculatorScreen.value;
    if (type === "numeric") {
        if (calcValue === "0" && value === "0") {
            calculatorScreen.value = "0";
        }
        else if (calcValue === "0" && value !== "0") {
            calculatorScreen.value = value;
        }
        else {
            calculatorScreen.value += value;
        }
    }
    if (type === "signal" && isLastCharNumber(calcValue)) {
        if (calcValue === "0" && (value === "+" || value === "-")) {
            calculatorScreen.value = value;
        }
        else {
            calculatorScreen.value += value;
        }
    }
}
function deleteValueFromCalculatorScreen() {
    const calcValue = calculatorScreen.value;
    const newCalcValue = calcValue.slice(0, calcValue.length - 1);
    calculatorScreen.value = newCalcValue || "0";
}
function resetCalculatorScreen() {
    calculatorScreen.value = "0";
}
// Functions Applied
document.addEventListener("DOMContentLoaded", () => {
    loadTheme();
});
btnDelete.addEventListener("click", deleteValueFromCalculatorScreen);
btnNumeric.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.getAttribute("data-value");
        addValueToCalculatorScreen(value, "numeric");
    });
});
btnSignal.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.getAttribute("data-value");
        addValueToCalculatorScreen(value, "signal");
    });
});
btnReset.addEventListener("click", resetCalculatorScreen);
toggleInputs.forEach(radio => {
    radio.addEventListener("input", e => {
        const input = e.target;
        const value = input.value;
        setTheme(value);
    });
});
