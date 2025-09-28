// Imports
import {type Theme} from "./types/theme.types.ts";

export const setTheme = (theme: Theme): void => {
	localStorage.setItem("theme", theme);
	document.body.className = theme;
};

export const loadTheme = (): void => {
	const theme = localStorage.getItem("theme") ?? "theme-01";
	document.body.className = theme;
};
