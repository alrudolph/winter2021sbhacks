import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native';

import Current from './Current';
import History from './History';

export default function NumberDisplay({ history, val } : {history: string, val:number}) {

  return (
    <View>
        <History history={history}/>
        <Current value={val}/>
    </View>
  );
}
