import React from 'react';
import { Text, View } from 'react-native';

import styled from 'styled-components/native';
import { White } from '../Constants/Palette';

const TextArea = styled.View`
    width: 100%;
    height: 50%;
    
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;

const Display = styled.Text`
  font-size: 64px;
  color: ${White};
`

export default function Current({ value }: {value: string}) {
  return (
    <TextArea>
      <Display>{value}</Display>  
    </TextArea>
  );
}
