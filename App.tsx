import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Keypad from './Displays/Keypad';
import NumberDisplay from './Displays/NumberDisplay';

import styled from 'styled-components/native';

import { Black } from './GlobalComponents/Palette'

const Body = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Black};
`

export default function App() {

  const [{ history, val }, setExpression] = useState({ history: "1+2+3", val: "5" });

  const append = (n: string) => {
    setExpression({ history: history + n, val: val})
  }

  const clear = () => {
    setExpression({ history: "", val: val })
  }

  const equals = () => {
    setExpression({ history: history, val: eval(history)});
  }

  return (
    <Body>
      <NumberDisplay history={history} val={val}/>
      <Keypad 
        append={(input: string) => { append(input); }}
        clear={() => { clear(); }}
        equals={() => { equals(); }}
        />
    </Body>
  );
}
