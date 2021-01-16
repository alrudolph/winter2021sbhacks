import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native';
import { White } from '../GlobalComponents/Palette';

const Display = styled.Text`
    width: 100%;
    height: 40%;
    font-size: 40px;
    color: ${White}
`;

export default function History({history}: {history: string}) {
  return (
    <Display>
      {history}
    </Display>
  );
}
