import type {Operation} from "../../../types/operation.types.ts";

export function generateSubExpressionRegex(operation: Operation): RegExp {
	switch (operation) {
		case "+":
			return /(?<firstOperand>(?:[\+\-])?[0-9]+(?:\.[0-9]+)?)(?<operator>[\+])(?:[0-9]+(?<secondOperand>\.[0-9]+)?)/g;

		case "-":
			return /(?<firstOperand>(?:[\+\-])?[0-9]+(?:\.[0-9]+)?)(?<operator>[\-])(?:[0-9]+(?<secondOperand>\.[0-9]+)?)/g;

		case "*":
			return /(?<firstOperand>(?:[\+\-])?[0-9]+(?:\.[0-9]+)?)(?<operator>[\*\])(?:[0-9]+(?<secondOperand>\.[0-9]+)?)/g;

		case "/":
			return /(?<firstOperand>(?:[\+\-])?[0-9]+(?:\.[0-9]+)?)(?<operator>[\/])(?:[0-9]+(?<secondOperand>\.[0-9]+)?)/g;
	}
}
