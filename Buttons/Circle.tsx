import React from 'react';
import { TouchableHighlight, tyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native';

const Display = styled.Text`
  color: ${(props: {color: string}) => props.color};
`

export const CircSize = 50;
const Circ = styled.View`
  background-color: ${(props: {color: string}) => props.color};
  border-radius: 50%;
  height: ${(props: {size: number}) => props.size}px;
  width: ${(props: {size: number}) => props.size}px;
  justify-content: "center";
`;

interface CircleInput {
  primaryColor: string,
  secondaryColor: string,
  textColor: string,
  text: string,
  onTouch: Function
  size: number
};


export default function Circle({ primaryColor, secondaryColor, textColor, text, onTouch, size }: CircleInput) {
  return (
    <Circ color={primaryColor} size={size} >
      <TouchableHighlight
          underlayColor={secondaryColor}
          onPress = {() => {onTouch()}}  
	  style = {{alignItems: "center"}}
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
