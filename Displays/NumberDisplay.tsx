import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native';

import Current from './Current';
import History from './History';

const Display = styled.View`
    height: 25%;
    background-color: blue;
`

export default function NumberDisplay({ history, val } : {history: string, val:number}) {
  return (
    <Display>
        <History history={history}/>
        <Current value={val}/>
    </Display>
  );
}
