export function isDeleteKey(key) {
    return (key.toLowerCase() === "backspace" || key.toLowerCase() === "delete");
}
export function isNumericKey(key) {
    return /^[0-9]$/.test(key);
}
export function isOperatorKey(key) {
    return /[\+\-\*\/\.]/.test(key);
}
export function isResetKey(key) {
    return key.toLowerCase() === "escape";
}
export function isResultKey(key) {
    return key === "=" || key.toLowerCase() === "enter";
}
//# sourceMappingURL=keyboard.js.map