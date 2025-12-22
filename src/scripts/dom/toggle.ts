import * as helpers from "../helpers/helpers.ts";
import * as elements from "./elements.ts";

export function getClickedArea(e: MouseEvent): "start" | "middle" | "end" {
	const xMouseClick = e.pageX;

	const toggleBoundingClient = elements.$toggle!.getBoundingClientRect();
	const toggleLeft = Math.trunc(toggleBoundingClient.left);
	const toggleWidth = toggleBoundingClient.width;

	const toggleClickedArea = xMouseClick - toggleLeft;

	const relativePercentage = helpers.getRelativePercentage(
		toggleClickedArea,
		toggleWidth,
	);

	const startAreaRange =
		relativePercentage >= 0 && relativePercentage < 40;
	const middleAreaRange =
		relativePercentage >= 40 && relativePercentage < 65;

	if (startAreaRange) {
		return "start";
	} else if (middleAreaRange) {
		return "middle";
	} else {
		return "end";
	}
}
