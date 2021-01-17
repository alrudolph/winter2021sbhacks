import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native';

import Current from './Current';
import History from './History';

const Display = styled.View`
  height: 35%;
  padding: 0 5%;
`

export default function NumberDisplay({ history, val } : {history: string, val:string }) {
  return (
    <Display>
        <History history={history}/>
        <Current value={val}/>
    </Display>
  );
}
