// Imports
import {} from "./types/theme.types.js";
export function setTheme(theme) {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
}
export function loadTheme() {
    const theme = localStorage.getItem("theme") ?? "theme-01";
    document.body.className = theme;
}
