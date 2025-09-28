// Imports
import {} from "./types/theme.types.js";
export const setTheme = (theme) => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
};
export const loadTheme = () => {
    var _a;
    const theme = (_a = localStorage.getItem("theme")) !== null && _a !== void 0 ? _a : "theme-01";
    document.body.className = theme;
};
