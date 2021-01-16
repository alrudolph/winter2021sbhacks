import React from 'react';
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
  justify-content: "center";

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Highlight = styled.TouchableHighlight`
  background-color: ${(props: {color: string}) => props.color};
  border-radius: 50%;
  height: ${(props: {size: number}) => props.size}px;
  width: ${(props: {size: number}) => props.size}px;
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
      <Highlight
      	  activeOpacity={0.3}
          underlayColor={secondaryColor}
          onPress = {() => {onTouch()}}  
          style = {{alignItems: "center"}}
          size={50}
      >
        <Circ color={primaryColor} size={50} >
            <Display color={textColor}>{text}</Display>
        </Circ>
      </Highlight>
  );
}

/*

  height: ${(props: {size: number}) => props.size}px;
  width: ${(props: {size: number}) => props.size}px;

 */
