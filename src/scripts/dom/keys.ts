export function getKeyValue(key: HTMLButtonElement): string {
	return key.getAttribute("data-value")!;
}
