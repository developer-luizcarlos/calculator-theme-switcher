import * as keys from "./keys.js";
import * as screen from "./screen.js";
import { EXPRESSION_LAST_CHAR_IS_OPERATOR_REGEX } from "../modules/regex/patterns.js";
import { parser } from "../modules/parser/parser.js";
export function deleteKeyHandler() {
    const screenValue = screen.getScreenValue();
    if (screenValue === "0") {
        return;
    }
    if (screenValue.length === 1) {
        screen.setScreenValue("0");
    }
    else {
        const slicedScreenValue = screenValue.slice(0, -1);
        screen.setScreenValue(slicedScreenValue);
    }
}
export function operatorKeyHandler(operatorKey) {
    const keyValue = keys.getKeyValue(operatorKey);
    const screenValue = screen.getScreenValue();
    const screenValueLength = screenValue.length;
    const isLastCharAnOperator = EXPRESSION_LAST_CHAR_IS_OPERATOR_REGEX.test(screenValue);
    if (isLastCharAnOperator) {
        return;
    }
    if (screenValueLength < screen.SCREEN_VALUE_LENGTH_LIMIT) {
        if (screenValue === "0") {
            if (keyValue === "+" || keyValue === "-") {
                screen.setScreenValue(keyValue);
            }
            else {
                screen.setScreenValue(screenValue + keyValue);
            }
        }
        else {
            screen.setScreenValue(screenValue + keyValue);
        }
    }
}
export function regularKeyHandler(regularKey) {
    const keyValue = keys.getKeyValue(regularKey);
    const screenValue = screen.getScreenValue();
    const screenValueLength = screenValue.length;
    if (screenValueLength < screen.SCREEN_VALUE_LENGTH_LIMIT) {
        if (screenValue === "0") {
            screen.setScreenValue(keyValue);
        }
        else {
            screen.setScreenValue(screenValue + keyValue);
        }
    }
}
export function resetKeyHandler() {
    const screenValue = screen.getScreenValue();
    if (screenValue === "0") {
        return;
    }
    screen.setScreenValue("0");
}
export function resultKeyHandler() {
    const expression = screen.getScreenValue();
    const evaluatedExpression = parser(expression);
    if (evaluatedExpression === expression) {
        return;
    }
    screen.setScreenValue(evaluatedExpression);
}
//# sourceMappingURL=handlers.js.map