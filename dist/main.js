// Imports
import { loadTheme, setTheme } from "./theme.js";
import isLastCharNumber from "./utils/isLastCharNumber.js";
// DOM Elements
const btnNumeric = document.querySelectorAll(".btn--numeric");
const btnSignal = document.querySelectorAll(".btn--signal");
const calculatorScreen = document.querySelector(".calculator__screen");
const toggleInputs = document.querySelectorAll(".toggle__input");
// Functions Declarations
function addValueToCalculatorScreen(value, type) {
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
toggleInputs.forEach(radio => {
    radio.addEventListener("input", e => {
        const input = e.target;
        const value = input.value;
        setTheme(value);
    });
});
