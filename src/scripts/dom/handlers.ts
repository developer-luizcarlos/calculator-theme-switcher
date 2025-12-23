import * as helpers from "../helpers/helpers.ts";
import * as themeStorage from "../storage/theme.storage.ts";
import type {Theme} from "../types/theme.types.ts";
import * as body from "./body.ts";
import * as keyboard from "./keyboard.ts";
import * as keys from "./keys.ts";
import * as screen from "./screen.ts";
import * as toggle from "./toggle.ts";

export function deleteKeyHandler(): void {
	screen.deleteLastDigit();
}

export function labelHandler(label: HTMLLabelElement) {
	const className = label.className;

	const themeRegex = /light|dark|purple/;

	const currentTheme = themeStorage.getTheme();
	const theme = className.match(themeRegex)?.[0] as Theme;

	if (currentTheme === theme) {
		return;
	}

	themeStorage.saveTheme(theme);

	body.setThemeClassName(theme);
}

export function operatorKeyHandler(operatorKey: HTMLButtonElement): void {
	const keyValue = keys.getKeyValue(operatorKey);

	screen.insertOperatorDigit(keyValue);
}

export function regularKeyHandler(regularKey: HTMLButtonElement): void {
	const keyValue = keys.getKeyValue(regularKey);

	screen.insertNumericDigit(keyValue);
}

export function resetKeyHandler(): void {
	screen.reset();
}

export function resultKeyHandler() {
	screen.displayResult();
}

export function keyboardHandler(e: KeyboardEvent): void {
	const key = e.key;

	const checkSpecialKeyWasPressed = keyboard.checkSpecialKeyWasPressed(e);

	const isNumericKey = keyboard.isNumericKey(key);
	const isOperatorKey = keyboard.isOperatorKey(key);
	const isDeleteKey = keyboard.isDeleteKey(key);
	const isResultKey = keyboard.isResultKey(key);
	const isResetKey = keyboard.isResetKey(key);

	/**
	 * Stops, by example, inserting
	 * a numeric digit on the calculator screen
	 * while pressing the alt key and a
	 * numeric key on the user keyboard when
	 * the user is swapping between pages by
	 * the usage of browser's shortcuts.
	 */
	if (checkSpecialKeyWasPressed) {
		return;
	}

	const isInvalidKey =
		!isNumericKey &&
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
	} else if (isOperatorKey) {
		screen.insertOperatorDigit(key);
	} else if (isDeleteKey) {
		screen.deleteLastDigit();
	} else if (isResultKey) {
		/* 
      stop the addition of a key
      which may be focused when
      the enter button is pressed,
      a behavior that is the same as
      clicking on the button.
    */
		e.preventDefault();

		screen.displayResult();
	} else if (isResetKey) {
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

export function toggleHandler(e: MouseEvent) {
	const clickedArea = toggle.getClickedArea(e);

	const currentTheme = themeStorage.getTheme();
	const theme = helpers.getThemeBasedOnClickedArea(clickedArea);

	if (currentTheme === theme) {
		return;
	}

	themeStorage.saveTheme(theme);

	body.setThemeClassName(theme);
}
