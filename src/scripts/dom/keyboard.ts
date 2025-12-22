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
