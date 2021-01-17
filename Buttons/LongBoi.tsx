import React, { useState } from 'react';
import { TouchableHighlight, tyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native';
import { White } from '../Constants/Palette';

import { cbdim } from './Circle';
const Display = styled.Text`
  color: ${(props: {color: string}) => props.color};
  font-size: 32px;
`

const Circ = styled.TouchableHighlight`
  background-color: ${({color}: {color: string}) => color};
  border-radius: 30px;

  height: 75px;
  width: 100px;
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

export default function LongBoi({ color, text, onTouch }: CircleInput) {
  const [touched, setTouched] = useState(false);

  return (
      <Circ 
        onPress={() => { 
          setTouched(!touched);
          onTouch(); 
        }} 
        color={touched ? color.secondary : color.primary} 
        underlayColor={touched ? color.primary : color.secondary}
        activeOpacity={1}
	style={{
		height: cbdim,
		width: Math.round(2 * cbdim),
		borderRadius: Math.round(0.4 * cbdim),
	}}
	>
          <Display color={White}>{text}</Display>
      </Circ>
  );
}
