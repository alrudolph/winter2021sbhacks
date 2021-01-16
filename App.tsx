import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Keypad from './Displays/Keypad';
import NumberDisplay from './Displays/NumberDisplay';
import Circle from './Buttons/Circle';

import styled from 'styled-components/native';

import { Black, LightGray } from './GlobalComponents/Palette'
import VarPad from './Displays/Variables';
import { VarView } from './Displays/Variables';

const Body = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Black};
`

export default function App() {

  const [{ history, val, mode}, setExpression] = useState({ history: "1+2+3", val: "5", mode: "numpad" });

  const append = (n: string) => {
    setExpression({ history: history + n, val: val})
  }

  const clear = () => {
    setExpression({ history: "", val: val })
  }

  const equals = () => {
    setExpression({ history: history, val: eval(history)});
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
