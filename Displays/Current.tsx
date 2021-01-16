import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native';

const Display = styled.Text`
    width: 100%;
    height: 60%;
    color: inherit;
    font-size: 450%;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;

export default function Current({ value }: {value: string}) {
  return (
    <Display>
        {value}
    </Display>
  );
}
