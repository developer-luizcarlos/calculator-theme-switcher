import {$screen} from "./elements.ts";

export const SCREEN_VALUE_LENGTH_LIMIT = 10;

export function getScreenValue(): string {
	return $screen!.textContent!;
}

export function setScreenValue(value: string): void {
	$screen!.textContent = value;
}
