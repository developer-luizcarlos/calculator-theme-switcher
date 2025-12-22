import * as elements from "./elements.js";
import * as handlers from "./handlers.js";
export function initEvents() {
    document.addEventListener("keydown", e => {
        handlers.keyboardHandler(e);
    });
    elements.$deleteKey.addEventListener("click", () => {
        handlers.deleteKeyHandler();
    });
    elements.$operatorKeys.forEach(key => {
        key.addEventListener("click", () => {
            handlers.operatorKeyHandler(key);
        });
    });
    elements.$regularKeys.forEach(key => {
        key.addEventListener("click", () => {
            handlers.regularKeyHandler(key);
        });
    });
    elements.$resetKey.addEventListener("click", () => {
        handlers.resetKeyHandler();
    });
    elements.$resultKey.addEventListener("click", () => {
        handlers.resultKeyHandler();
    });
}
//# sourceMappingURL=events.js.map