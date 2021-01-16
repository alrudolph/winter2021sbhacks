export interface Types {
    type: "operator" | "number" | "digit" | "DigitBuilder" | "parenthesis";
    display: string;
}
  
export type TokenType = Types & {
    associativity: "R" | "L",
    precedence: number,
    do: Function
};

export type DigitType = Types & {
    value: number | "."
};