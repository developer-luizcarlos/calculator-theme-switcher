/*
 * [x] checar se uma expressão é válida (isValidExpression);
 * [x] pegar a operação que possui a precedência (getExpressionCurrentPrecedence);
 * [x] criar uma função para pegar a primeira subexpressão que contenha
 * o operador obtido em getOPerationPrecedence;
 * [x] criar uma função para gerar um regex da subexpressão, recebendo
 * como argumento a operação que possui a precedência, sendo usado
 * para depois realizar a troca na expressão da subexpressão por ela
 * mesma resolvida;
 * [] criar uma função para resolver uma subexpressão, sendo esta composta
 * de um operando à esquerda, um operador ao centro e um operando à direita;
 */

import {getExpressionCurrentPrecedence} from "./helpers/getExpressionCurrentPrecedence.ts";
import {getSubExpression} from "./helpers/getSubExpression.ts";
// import {generateSubExpressionRegex} from "./helpers/getSubExpressionRegex.ts";
import {isValidExpression} from "./helpers/isValidExpression.ts";

const expression = "-0.125/12-33*4.56";

const res = parser(expression);

console.log({res});

/**
 * Receives a mathematical expression
 * and resolves it.
 * @param expression A mathematical expression.
 * @returns Returns the result of a given mathematical expression.
 */
export function parser(expression: string): string {
	const isValid = isValidExpression(expression);

	if (!isValid) {
		return expression;
	}

	const currentPrecedence = getExpressionCurrentPrecedence(expression);

	// const subExpressionRegex = generateSubExpressionRegex(currentPrecedence);
	const subExpression = getSubExpression(expression, currentPrecedence);

	return subExpression;
}
