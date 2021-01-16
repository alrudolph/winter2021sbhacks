import React from 'react';
import { TouchableHighlight, tyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native';
import { White } from '../Constants/Palette';

const Display = styled.Text`
  color: ${(props: {color: string}) => props.color};
  font-size: 32px;
`

const Circ = styled.TouchableHighlight`
  background-color: ${({color}: {color: string}) => color};
  border-radius: 50px;

  height: 75px;
  width: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

type CircleInput = {
  color: {primary: string, secondary: string}
  text: string,
  onTouch: Function
};

export default function Circle({ color, text, onTouch }: CircleInput) {
  return (
      <Circ 
        onPress={() => { onTouch(); }} 
        color={color.primary} 
        underlayColor={color.secondary}
        activeOpacity={1}>
          <Display color={White}>{text}</Display>
      </Circ>
  );
}
