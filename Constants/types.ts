export interface Types {
    type: "operator" | "number" | "digit" | "DigitBuilder" | "parenthesis" | "variable";
    display: string;
}
  
export type TokenType = Types & {
    nargs: number,
    precedence: number,
    do: Function
};

export type DigitType = Types & {
    value: number | "."
};