// Imports
import {} from "./types/theme.types.js";
export const setTheme = (theme) => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
};
export const loadTheme = () => {
    const theme = localStorage.getItem("theme") ?? "theme-01";
    document.body.className = theme;
};
