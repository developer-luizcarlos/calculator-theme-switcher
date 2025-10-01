const getOperatorIndex = (expression) => {
    for (let i in expression.split("")) {
        const isOperator = expression[i] === "*" ||
            expression[i] === "/" ||
            expression[i] === "+" ||
            expression[i] === "-";
        if (isOperator) {
            return Number(i);
        }
    }
    return -1;
};
export default getOperatorIndex;
