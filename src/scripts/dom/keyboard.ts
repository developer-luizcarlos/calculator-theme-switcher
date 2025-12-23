export function isDeleteKey(key: string): boolean {
	return (
		key.toLowerCase() === "backspace" || key.toLowerCase() === "delete"
	);
}

export function isNumericKey(key: string): boolean {
	return /^[0-9]$/.test(key);
}

export function isOperatorKey(key: string): boolean {
	return /[\+\-\*\/\.]/.test(key);
}

export function isResetKey(key: string): boolean {
	return key.toLowerCase() === "escape";
}

export function isResultKey(key: string): boolean {
	return key === "=" || key.toLowerCase() === "enter";
}

/**
 * Returns true if alt or ctrl keys
 * were pressed while hiting another key.
 * @param e a KeyboardEvent object.
 */
export function checkSpecialKeyWasPressed(e: KeyboardEvent): boolean {
	const isSpecialKey = e.ctrlKey || e.altKey;

	return isSpecialKey;
}
