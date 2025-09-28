// Imports
import { loadTheme, setTheme } from "./theme.js";
// DOM Elements
const toggleInputs = document.querySelectorAll(".toggle__input");
// Functions Applied
document.addEventListener("DOMContentLoaded", () => {
    loadTheme();
});
toggleInputs.forEach(radio => {
    radio.addEventListener("input", e => {
        const input = e.target;
        const value = input.value;
        setTheme(value);
    });
});
