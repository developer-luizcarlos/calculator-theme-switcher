import type {Operation} from "../types/operation.types.ts";
import getOperatorIndex from "./getOperatorIndex.ts";

const resolve = (expression: string): number => {
	const operatorIndex = getOperatorIndex(expression);

	const left = parseFloat(expression.slice(0, operatorIndex));
	const right = parseFloat(
		expression.slice(operatorIndex + 1, expression.length),
	);
	const operator = expression.at(operatorIndex) as Operation;

	switch (operator) {
		case "*":
			return left * right;
		case "/":
			return left / right;
		case "+":
			return left + right;
		case "-":
			return left - right;
	}
};

export default resolve;
