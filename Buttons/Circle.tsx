import React from 'react';
import { TouchableHighlight, tyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native';
import { White } from '../GlobalComponents/Palette';

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
  color: {primary: string, secondary: string}
  textColor: string,
  text: string,
  onTouch: Function
};


export default function Circle({ color, textColor, text, onTouch }: CircleInput) {
  return (
      <Circ 
        size={75}
        onPress={() => { onTouch(); }} 
        color={color.primary} 
        underlayColor={color.secondary}
        activeOpacity={1}>
          <Display color={textColor}>{text}</Display>
      </Circ>
  );
}

export function CircleButton({ color, onTouch, text}: {color: {primary: string, secondary: string}, onTouch: Function, text: string}){
	return (
		<Circle
			color={color}
			textColor={White}
			onTouch={onTouch}
			text={text}
		/>
	);
}

