import * as themeStorage from "../storage/theme.storage.js";
import * as body from "./body.js";
import * as keyboard from "./keyboard.js";
import * as keys from "./keys.js";
import * as screen from "./screen.js";
export function deleteKeyHandler() {
    screen.deleteLastDigit();
}
export function operatorKeyHandler(operatorKey) {
    const keyValue = keys.getKeyValue(operatorKey);
    screen.insertOperatorDigit(keyValue);
}
export function regularKeyHandler(regularKey) {
    const keyValue = keys.getKeyValue(regularKey);
    screen.insertNumericDigit(keyValue);
}
export function resetKeyHandler() {
    screen.reset();
}
export function resultKeyHandler() {
    screen.displayResult();
}
export function keyboardHandler(e) {
    const key = e.key;
    const isNumericKey = keyboard.isNumericKey(key);
    const isOperatorKey = keyboard.isOperatorKey(key);
    const isDeleteKey = keyboard.isDeleteKey(key);
    const isResultKey = keyboard.isResultKey(key);
    const isResetKey = keyboard.isResetKey(key);
    const isInvalidKey = !isNumericKey &&
        !isOperatorKey &&
        !isDeleteKey &&
        !isResultKey &&
        !isResetKey;
    if (isInvalidKey) {
        return;
    }
    // triggers quick find on firefox.
    if (key === "/") {
        e.preventDefault();
    }
    if (isNumericKey) {
        screen.insertNumericDigit(key);
    }
    else if (isOperatorKey) {
        screen.insertOperatorDigit(key);
    }
    else if (isDeleteKey) {
        screen.deleteLastDigit();
    }
    else if (isResultKey) {
        screen.displayResult();
    }
    else if (isResetKey) {
        screen.reset();
    }
}
export function loadThemeHandler() {
    const theme = themeStorage.getTheme();
    if (!theme) {
        themeStorage.saveTheme("dark");
    }
    body.setThemeClassName(theme);
}
//# sourceMappingURL=handlers.js.map