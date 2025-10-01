import type {Operation} from "../types/operation.types";

const getSubExpressionRegexp = (precedence: Operation): RegExp => {
	switch (precedence) {
		case "*":
			return /(?<left>[0-9]\.?[0-9]*)\*(?<right>[0-9]\.?[0-9]*)/;
		case "/":
			return /(?<left>[0-9]\.?[0-9]*)\/(?<right>[0-9]\.?[0-9]*)/;
		case "+":
			return /(?<left>[0-9]\.?[0-9]*)\+(?<right>[0-9]\.?[0-9]*)/;
		case "-":
			return /(?<left>[0-9]\.?[0-9]*)\-(?<right>[0-9]\.?[0-9]*)/;
	}
};

export default getSubExpressionRegexp;
