import React from 'react';
import { TouchableHighlight, tyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native';

const Display = styled.Text`
  color: ${(props: {color: string}) => props.color};
`

const Circ = styled.View`
  background-color: ${(props: {color: string}) => props.color};
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
    <Circ color={primaryColor}>
      <TouchableHighlight
          underlayColor={secondaryColor}
          onPress = {() => {onTouch()}}  
      >
        <Display color={textColor}>{text}</Display>
      </TouchableHighlight>
    </Circ>
  );
}
