import React, { useState } from 'react';
import { TouchableHighlight, tyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native';

const Display = styled.Text`
  color: ${(props: {color: string}) => props.color};
`

const Circ = styled.View`
  background-color: ${(props: {color: string}) => props.color};
  border-radius: 50%;
  height: ${(props: {size: number}) => props.size}px;
  width: ${(props: {size: number}) => props.size}px;
`;

type CircleInput = {
  primaryColor: string,
  secondaryColor: string,
  textColor: string,
  text: string,
  callback: Function,
  size: number
};

export default function Circle({ primaryColor, secondaryColor, textColor, text, callback, size }: CircleInput) {
  return (
    <Circ color={primaryColor} size={size}>
      <TouchableHighlight
          underlayColor={secondaryColor}
          onPress = {() => {callback()}}  
      >
        <Display color={textColor}>{text}</Display>
      </TouchableHighlight>
    </Circ>
  );
}

/*

  height: ${(props: {size: number}) => props.size}px;
  width: ${(props: {size: number}) => props.size}px;

 */
