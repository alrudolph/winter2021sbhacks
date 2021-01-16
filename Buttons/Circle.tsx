import React from 'react';
import { TouchableHighlight, tyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native';

const Display = styled.Text`
  color: ${(props: {color: string}) => props.color};
`

const Circ = styled.TouchableOpacity`
  background-color: ${({primary}: {primary: string}) => primary};
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
        color={primaryColor} 
        size={75}
        primary={primaryColor}
        secondary={secondaryColor}
        onPress={() => { onTouch(); }} >
          <Display color={textColor}>{text}</Display>
      </Circ>
  );
}
