import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native';

import Current from './Current';
import History from './History';

import { White } from '../GlobalComponents/Palette'

const Display = styled.View`
    height: 25%;
    padding: 0 5%;
    color: ${White};
`

export default function NumberDisplay({ history, val } : {history: string, val:number}) {
  return (
    <Display>
        <History history={history}/>
        <Current value={val}/>
    </Display>
  );
}
