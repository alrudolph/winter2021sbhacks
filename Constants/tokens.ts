import { TokenType } from "./types";

const output: { [key: string]: TokenType } =  {
    "+": {
        display: "+",
        associativity: "L", 
        precedence: 0,
        type: "operator",
        do: (a: number, b: number) => { return a + b; }
    },
    "-": {
        display: "-",
        associativity: "L", 
        precedence: 0,
        type: "operator",
        do: (a: number, b: number) => { return a - b; }
    },
    "*": {
        display: "*",
        associativity: "L", 
        precedence: 0,
        type: "operator",
        do: (a: number, b: number) => { return a * b; }
    },
    "/": {
        display: "/",
        associativity: "L", 
        precedence: 0,
        type: "operator",
        do: (a: number, b: number) => { 
            if (b === 0) {
                throw 'Division by zero';
            }
            return a / b;
        }
    },
    "(": {
        display: "(",
        associativity: "L", 
        type: "parenthesis",
        precedence: 0,
        do: () => { return ; }
    },
    ")": {
        display: ")",
        associativity: "L", 
        type: "parenthesis",
        precedence: 0,
        do: () => { return ; }
    },
    "": {
        display: "",
        associativity: "L", 
        type: "operator",
        precedence: 0,
        do: () => { return ; }
    },
}

export default output;