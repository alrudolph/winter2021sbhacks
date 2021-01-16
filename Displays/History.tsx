import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native';

const Display = styled.Text`
    width: 100%;
    height: 40%;
`;

export default function History({history}: {history: string}) {
  return (
    <Display>
      {history}
    </Display>
  );
}
