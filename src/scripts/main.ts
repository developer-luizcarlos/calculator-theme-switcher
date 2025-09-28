// Imports
import {loadTheme, setTheme} from "./theme.ts";
import type {Theme} from "./types/theme.types.ts";

// DOM Elements
const toggleInputs = document.querySelectorAll(
	".toggle__input",
) as NodeListOf<HTMLInputElement>;

// Functions Applied
document.addEventListener("DOMContentLoaded", () => {
	loadTheme();
});

toggleInputs.forEach(radio => {
	radio.addEventListener("input", e => {
		const input = e.target as HTMLInputElement;
		const value = input.value as Theme;

		setTheme(value);
	});
});
