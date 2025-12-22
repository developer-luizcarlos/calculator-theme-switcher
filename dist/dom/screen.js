import { $screen } from "./elements.js";
export const SCREEN_VALUE_LENGTH_LIMIT = 10;
export function getScreenValue() {
    return $screen.textContent;
}
export function setScreenValue(value) {
    $screen.textContent = value;
}
//# sourceMappingURL=screen.js.map