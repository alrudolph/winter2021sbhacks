import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native';
import { White } from '../Constants/Palette';

const Display = styled.Text`
    width: 100%;
    height: 50%;
    font-size: 64px;
    color: ${White};
    
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    flex-direction: row;
    justifyContent: flex-end;
    alignItems: flex-end;
`;

export default function Current({ value }: {value: string}) {
  return (
    <Display style={{justifyContent: 'flex-end', alignSelf: 'flex-end'}}>
        {value}
    </Display>
  );
}
