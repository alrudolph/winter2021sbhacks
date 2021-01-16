import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Keypad from './Displays/Keypad';
import NumberDisplay from './Displays/NumberDisplay';
import Circle from './Buttons/Circle';

import styled from 'styled-components/native';

import { Black, LightGray } from './Constants/Palette'
import VarPad from './Displays/Variables';
import { VarView } from './Displays/Variables';

import tokens, {TokenType} from "./Constants/tokens";

const Body = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Black};
`;

type stored = {
  queue: Array<TokenType>,
  history: string,
  val: string,
  mode: string
}

export default function App() {
  const defaultState: stored = { queue: [], history: "", val: "", mode: "numpad"};
  const [{ queue, history, val, mode }, setExpression] = useState(defaultState);

  const append = (n: TokenType) => {
    setExpression({ queue: [...queue, n], history: history + n.display, val: val })
  }

  const clear = () => {
    setExpression({ queue: [], history: "", val: val })
  }

  const equals = () => {
    setExpression({ queue: queue, history: history, val: eval(history)});
  }
  
  const showVar = () => {
    setExpression({mode: "var"});
  }

  let inputPad;
  if(mode === "numpad"){
  	inputPad = (<Keypad 
           append={(input: string) => { append(input); }}
           clear={() => { clear(); }}
           equals={() => { equals(); }}
	   showVar={() => { showVar(); }}
        />);
  } else if (mode === "var"){
  	inputPad = (<VarPad append={(input: string) => { append(input); }} />);
  }

  return (
    <Body>
      <NumberDisplay history={history} val={val}/>
      {inputPad}
    </Body>
  );
}
