import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Keypad from './Displays/Keypad'

import styled from 'styled-components/native';

import { Black } from './GlobalComponents/Palette'

const Body = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Black};
`

export default function App() {
  return (
    <Body>
      <Keypad />
    </Body>
  );
}
