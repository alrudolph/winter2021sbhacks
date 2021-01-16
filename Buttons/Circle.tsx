import React from 'react';
import { TouchableHighlight, tyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native';

const Display = styled.Text`
  color: ${(props: {color: string}) => props.color};
  font-size: 200%;
`

const Circ = styled.TouchableHighlight`
  background-color: ${({color}: {color: string}) => color};
  border-radius: 50%;

  height: 75px;
  width: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface CircleInput {
  color: {primary: string, secondary: string}
  textColor: string,
  text: string,
  onTouch: Function
};

export default function Circle({ color, textColor, text, onTouch }: CircleInput) {
  return (
      <Circ 
        onPress={() => { onTouch(); }} 
        color={color.primary} 
        underlayColor={color.secondary}
        activeOpacity={1}>
          <Display color={textColor}>{text}</Display>
      </Circ>
  );
}
