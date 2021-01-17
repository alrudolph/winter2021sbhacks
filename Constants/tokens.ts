import { TokenType } from "./types";

const output: { [key: string]: TokenType } =  {
    "+": {
        display: "+",
        nargs: 2, 
        precedence: 20,
        type: "operator",
        do: (a: number, b: number) => { return a + b; }
    },
    "-": {
        display: "-",
        nargs: 2, 
        precedence: 20,
        type: "operator",
        do: (a: number, b: number) => { return a - b; }
    },
    "*": {
        display: "×",
        nargs: 2, 
        precedence: 10,
        type: "operator",
        do: (a: number, b: number) => { return a * b; }
    },
    "/": {
        display: "÷",
        nargs: 2, 
        precedence: 10,
        type: "operator",
        do: (a: number, b: number) => { 
            if (b === 0) {
                throw 'Cannot divide by zero.';
            }
            return a / b;
        }
    },
    "(": {
        display: "(",
        nargs: 0,
        type: "parenthesis",
        precedence: 0,
        do: () => { return ; }
    },
    ")": {
        display: ")",
        nargs: 0, 
        type: "parenthesis",
        precedence: 0,
        do: () => { return ; }
    },
    "": {
        display: "",
        nargs: 0, 
        type: "operator",
        precedence: 0,
        do: () => { return ; }
    },
    "^": {
    	display: "^",
	nargs: 2,
	type: "operator",
	precedence: 5,
	do: (a: number, b: number) => { return Math.pow(a, b); }
   },
}

export default output;
