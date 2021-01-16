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
  height: ${(props: {size: number}) => props.size}px;
  width: ${(props: {size: number}) => props.size}px;
  justify-content: "center";

  display: flex;
  justify-content: center;
  align-items: center;
`;

interface CircleInput {
  primaryColor: string,
  secondaryColor: string,
  textColor: string,
  text: string,
  onTouch: Function
};

export default function Circle({ primaryColor, secondaryColor, textColor, text, onTouch }: CircleInput) {
  return (
      <Circ 
        size={75}
        onPress={() => { onTouch(); }} 
        color={primaryColor} 
        underlayColor={secondaryColor}
        activeOpacity={1}>
          <Display color={textColor}>{text}</Display>
      </Circ>
  );
}
