import type {Theme} from "../types/theme.types.ts";

export function getRelativePercentage(
	part: number,
	total: number,
): number {
	if (total <= 0) {
		throw new Error("Total cannot be zero");
	}

	return Math.trunc((part / total) * 100);
}

export function getThemeBasedOnClickedArea(
	clickedArea: "start" | "middle" | "end",
): Theme {
	switch (clickedArea) {
		case "start":
			return "dark";
		case "middle":
			return "light";
		case "end":
			return "purple";
	}
}
