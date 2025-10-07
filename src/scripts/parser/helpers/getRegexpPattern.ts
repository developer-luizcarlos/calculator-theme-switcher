import type {Operator} from "../../types/operator.types.ts";

export default function getRegexpPattern(operator: Operator): RegExp {
	switch (operator) {
		case "+":
			return /(?<left>[-+]?\d+(\.\d+)?)(?<operator>[+])(?<right>\d+(\.\d+)?)/;
		case "-":
			return /(?<left>[-+]?\d+(\.\d+)?)(?<operator>[-])(?<right>\d+(\.\d+)?)/;
		case "*":
			return /(?<left>[-+]?\d+(\.\d+)?)(?<operator>[*])(?<right>\d+(\.\d+)?)/;
		case "/":
			return /(?<left>[-+]?\d+(\.\d+)?)(?<operator>[/])(?<right>\d+(\.\d+)?)/;
	}
}
