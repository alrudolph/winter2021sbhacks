import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native';

import Current from './Current';
import History from './History';
import PrevList from './PrevList';

const Display = styled.View`
  padding: 0 5%;

  height: 30%;
`

export default function NumberDisplay({ history, val, prev } : {history: string, val:string, prev: string }) {
  return (
    <Display>
        <PrevList prev={prev}/>
        <History history={history}/>
        <Current value={val}/>
    </Display>
  );
}
