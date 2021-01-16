import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native';

const Display = styled.Text`
    width: 100%;
    height: 60%;
    background-color: red;
`;

export default function Current({ value }: {value: number}) {
  return (
    <Display>
        {value}
    </Display>
  );
}
