import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Keypad from './Displays/Keypad';
import NumberDisplay from './Displays/NumberDisplay';

import styled from 'styled-components/native';

import { Black } from './Constants/Palette'

import tokens, {TokenType} from "./Constants/tokens";

const Body = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Black};
`

type stored = {
  queue: Array<TokenType>,
  history: string,
  val: string
}

export default function App() {
  const defaultState: stored = { queue: [], history: "", val: ""};
  const [{ queue, history, val }, setExpression] = useState(defaultState);

  const append = (n: TokenType) => {
    setExpression({ queue: [...queue, n], history: history + n.display, val: val })
  }

  const clear = () => {
    setExpression({ queue: [], history: "", val: val })
  }

  const equals = () => {
    setExpression({ queue: queue, history: history, val: eval(history)});
  }

  return (
    <Body>
      <NumberDisplay history={history} val={val}/>
      <Keypad 
        append={(input: TokenType) => { append(input); }}
        clear={() => { clear(); }}
        equals={() => { equals(); }}
        />
    </Body>
  );
}
