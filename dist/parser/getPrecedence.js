const getPrecedence = (expression) => {
    const hasMultOrDivOperator = expression.includes("*") || expression.includes("/");
    const hasAddOrSubOperator = expression.includes("+") || expression.includes("-");
    for (let char of expression) {
        if (hasMultOrDivOperator) {
            if (char === "*") {
                return "*";
            }
            else if (char === "/") {
                return "/";
            }
        }
        else if (hasAddOrSubOperator) {
            if (char === "+") {
                return "+";
            }
            else if (char === "-") {
                return "-";
            }
        }
    }
    return;
};
export default getPrecedence;
