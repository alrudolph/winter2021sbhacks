import React, { useState, createContext } from "react";
import { DigitType } from "./types";

export const VariablesContext = createContext(null);

export const Variables = (props) => {

    const [vars, setVars] = useState({
        'A': {
            type: 'number',
            value: 0,
            display: ''
        },
        'B': {
            type: 'number',
            value: 0,
            display: ''
        },
        'C': {
            type: 'number',
            value: 0,
            display: ''
        },
        'D': {
            type: 'number',
            value: 0,
            display: ''
        }
    });

    const change = (which: string, newObj: {type: 'number', value: number, display: string}) => {
        setVars({...vars, [which]: newObj})
    }

    return <VariablesContext.Provider value={[vars, change]}>
        {props.children}
    </VariablesContext.Provider>
}
