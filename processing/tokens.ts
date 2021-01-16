interface associativityAndPrecedence {
    token: string,
    associativity: "R" | "L",
    precedence: number,
    do: Function
};

const output: Array<associativityAndPrecedence> = [
    {
        token: "+",
        associativity: "L", 
        precedence: 0,
        do: (a: number, b: number) => { return a + b; }
    },
    {
        token: "-",
        associativity: "L", 
        precedence: 0,
        do: (a: number, b: number) => { return a - b; }
    },
    {
        token: "*",
        associativity: "L", 
        precedence: 0,
        do: (a: number, b: number) => { return a * b; }
    },
    {
        token: "/",
        associativity: "L", 
        precedence: 0,
        do: (a: number, b: number) => { 
            if (b === 0) {
                throw 'Division by zero';
            }
            return a / b;
        }
    },
    {
        token: "",
        associativity: "L", 
        precedence: 0,
        do: () => { return ; }
    },
]

export default output;