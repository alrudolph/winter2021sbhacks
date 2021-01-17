import { Types } from "./types";

const rpn = (tokens: Array<Types>) => {
    let outputQueue = [];
    let operatorsStack = [];

    tokens.forEach(token => {
        if (token.type === "variable" || token.type === "DigitBuilder") {
            outputQueue.push(token);
        }
        else if (token.display === "(") {
            operatorsStack.push('(');
        }
        else if (token.display === ")") {
            while (operatorsStack.length && operatorsStack[operatorsStack.length - 1] !== "(") {
                outputQueue.push(operatorsStack.pop())
            }
            operatorsStack.pop();
        }
        else {
            while (operatorsStack.length > 0 && operatorsStack[operatorsStack.length - 1].precedence < token.precedence) {
                outputQueue.push(operatorsStack.pop())
                console.log("LOOPING")
            }
            operatorsStack.push(token);
        }
    });

    while (operatorsStack.length > 0) {
        const op = operatorsStack.pop()

        if (op !== ")" && op !== "(") {
            outputQueue.push(op);
        }
    }

    return outputQueue;
}

export const addParenthesis = (tokens: Array<Types>) => {
    let count = 0;

    tokens.forEach((token) => {
        if (token.type === "parenthesis") {
            count += (token.display === ")" ? 1 : 0);
            count -= (token.display === "(" ? 1 : 0);
        }
    })

    while (count > 0) {
        tokens.unshift({ type: "parenthesis", display: "(", precedence: 0 });
        --count;
    }

    while (count < 0) {
        tokens.push({ type: "parenthesis", display: ")", precedence: 0 })
        ++count;
    }
    
    return tokens;
}

const calculator = (tokens: Array<Types>) => {

    const numStack = [];

    const orderedTokens = rpn(tokens)
    
    console.log(orderedTokens)

    orderedTokens.forEach((token) => {
        if (token.type === "operator") {
            let input: Array<number> = [];
            for (let i = 0; i < token.nargs; ++i) {
                input.unshift(numStack.pop());
            }
            console.log(input);
            numStack.push(token.do(...input));
        }
        else {
            numStack.push(token.value);
        }
    })
    console.log(numStack);
    return numStack.pop();
}

export default calculator;