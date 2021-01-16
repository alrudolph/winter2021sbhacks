export interface TokenType {
    display: string,
    associativity: "R" | "L",
    precedence: number,
    do: Function
};

const output =  {
    "+": {
        display: "+",
        associativity: "L", 
        precedence: 0,
        do: (a: number, b: number) => { return a + b; }
    },
    "-": {
        display: "-",
        associativity: "L", 
        precedence: 0,
        do: (a: number, b: number) => { return a - b; }
    },
    "*": {
        display: "*",
        associativity: "L", 
        precedence: 0,
        do: (a: number, b: number) => { return a * b; }
    },
    "/": {
        display: "/",
        associativity: "L", 
        precedence: 0,
        do: (a: number, b: number) => { 
            if (b === 0) {
                throw 'Division by zero';
            }
            return a / b;
        }
    },
    "": {
        display: "",
        associativity: "L", 
        precedence: 0,
        do: () => { return ; }
    },
}

export default output;