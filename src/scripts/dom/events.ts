import * as elements from "./elements.ts";
import * as handlers from "./handlers.ts";

export function initEvents() {
	elements.$deleteKey!.addEventListener("click", () => {
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

	elements.$resetKey!.addEventListener("click", () => {
		handlers.resetKeyHandler();
	});

	elements.$resultKey!.addEventListener("click", () => {
		handlers.resultKeyHandler();
	});
}
