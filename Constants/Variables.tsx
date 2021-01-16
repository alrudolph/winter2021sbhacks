import React, { useState, createContext } from "react";
import { DigitType } from "./types";

export const VariablesContext = createContext(null);

export const Variables = (props) => {

    const [vars, setVars] = useState({
        'a': {
            type: 'number',
            value: 0,
            display: ''
        },
        'b': {
            type: 'number',
            value: 0,
            display: ''
        },
        'c': {
            type: 'number',
            value: 1,
            display: '1'
        },
        'd': {
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
