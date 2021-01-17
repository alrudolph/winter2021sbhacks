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
   "ln": {
   		display: "ln",
		nargs: 1,
		type: "operator",
		function: true,
		precedence: 3,
		do: (a: number) => {
			if (a <= 0) {
				throw 'Cannot ln nonpositive numbers.';
			}
			return Math.log(a);
		}
	},
	"sin": {
		display: "sin",
		nargs: 1,
		type: "operator",
		function: true,
		precedence: 3,
		do: (a: number) => {return Math.sin(a);}
	},
	"cos": {
		display: "cos",
		nargs: 1,
		type: "operator",
		function: true,
		precedence: 3,
		do: (a: number) => {return Math.cos(a);}
	},
	"tan": {
		display: "tan",
		nargs: 1,
		type: "operator",
		function: true,
		precedence: 3,
		do: (a: number) => {return Math.tan(a);}
	},
	"pi": {
		display: "π",
		type: "variable",
		value: Math.PI
	},
	"e": {
		display: "e",
		type: "variable",
		value: Math.E
	},
}

export default output;
