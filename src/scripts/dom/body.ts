import type {Theme} from "../types/theme.types.ts";
import {$body} from "./elements.ts";

export function setThemeClassName(theme: Theme): void {
	$body.className = `${theme}-theme`;
}
