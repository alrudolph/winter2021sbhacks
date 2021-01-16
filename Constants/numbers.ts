import { types } from "@babel/core";
import { DigitType, Types } from "./types";

const digits: Record<number | ".", DigitType> = {
    0: {
        type: "digit",
        display: "0",
        value: 0,
    },
    1: {
        type: "digit",
        display: "1",
        value: 1
    },
    2: {
        type: "digit",
        display: "2",
        value: 2
    },
    3: {
        type: "digit",
        display: "3",
        value: 3
    },
    4: {
        type: "digit",
        display: "4",
        value: 4
    },
    5: {
        type: "digit",
        display: "5",
        value: 5
    },
    6: {
        type: "digit",
        display: "6",
        value: 6
    },
    7: {
        type: "digit",
        display: "7",
        value: 7
    },
    8: {
        type: "digit",
        display: "8",
        value: 8
    },
    9: {
        type: "digit",
        display: "9",
        value: 9
    },
    ".": {
        type: "digit",
        display: '.',
        value: "."
    }
};

export class DigitBuilder implements Types {
    private value = "";
    private hasDecimal;

    readonly type = "DigitBuilder";
    readonly display;

    constructor(n: { display: string, value: string, type: "DigitBuilder" }) {
        this.display = "" + n.value;
        this.value = "" + n.value;

        this.hasDecimal = String(n.value).includes(".");
    }

    append(val: DigitType) {
        let newValue = this.display;

        if (val.value === ".") {
            if (!this.hasDecimal) {
                newValue += val.value;
            }
        }
        else {
            newValue += val.value;
        }
        return new DigitBuilder({ display: this.display, value: newValue, type:"DigitBuilder"})
    }
}

export default digits;

export const trunc = (val: number)=> {
    return val ? Math.round(val * 1000) / 1000 + "" : "";
}

/*
,
    "e": {
        value: Math.E,
        display: "e"
    },
    "pi": {
        value: Math.PI,
        display: "pi"
    }, 
    "a": {
        value: 0.8,
        display: "A"
    }, 
    "b": {
        value: 0.8,
        display: "B"
    }, 
    "c": {
        value: 0.8,
        display: "C"
    }, 
    "d": {
        value: 0.8,
        display: "D"
    }
*/