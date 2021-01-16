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


  return (
    <Body>
      <NumberDisplay history={history} val={val}/>
      <Keypad append={(input: string) => {append(input);}}/>
    </Body>
  );
}
