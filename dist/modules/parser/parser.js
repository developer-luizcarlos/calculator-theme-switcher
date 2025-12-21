import { evaluate } from "mathjs";
import { isValidExpression } from "./helpers/isValidExpression.js";
const expression = "12.54/2+7-38/4+152-6/3+910/5-1";
const res = parser(expression);
console.log({ res });
/**
 * Receives a mathematical expression
 * and resolves it.
 * @param expression A mathematical expression.
 * @returns Returns the result of a given mathematical expression.
 */
export function parser(expression) {
    const isValid = isValidExpression(expression);
    if (!isValid) {
        return expression;
    }
    return evaluate(expression);
}
//# sourceMappingURL=parser.js.map