import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Keypad from './Displays/Keypad'

import styled from 'styled-components/native';

const Body = styled.View`
  padding: 200px;
`

export default function App() {
  return (
    <Body>
      <Keypad />
    </Body>
  );
}
