import React, { useState } from 'react';
import { TouchableHighlight, tyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native';

const Display = styled.Text`
  color: ${(props: {color: string}) => props.color};
`

const Circ = styled.View`
  background-color: ${(props: {color: string}) => props.color};
`;

type CircleInput = {
  primaryColor: string,
  secondaryColor: string,
  textColor: string,
  text: string,
  callback: Function
};

export default function Circle({ primaryColor, secondaryColor, textColor, text, callback }: CircleInput) {
  return (
    <Circ color={primaryColor}>
      <TouchableHighlight
          underlayColor={secondaryColor}
          onPress = {() => {callback()}}  
      >
        <Display color={textColor}>{text}</Display>
      </TouchableHighlight>
    </Circ>
  );
}
