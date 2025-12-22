export function getRelativePercentage(part, total) {
    if (total <= 0) {
        throw new Error("Total cannot be zero");
    }
    return Math.trunc((part / total) * 100);
}
export function getThemeBasedOnClickedArea(clickedArea) {
    switch (clickedArea) {
        case "start":
            return "dark";
        case "middle":
            return "light";
        case "end":
            return "purple";
    }
}
//# sourceMappingURL=helpers.js.map