import type {Theme} from "../types/theme.types.ts";

export function getTheme(): Theme {
	return localStorage.getItem("theme") as Theme;
}
export function saveTheme(theme: Theme): void {
	localStorage.setItem("theme", theme);
}
