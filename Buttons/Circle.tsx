import React from 'react';
import { Dimensions, TouchableHighlight, tyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native';
import { White } from '../Constants/Palette';

let windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export let modifier = 1;
if(windowWidth > windowHeight){
	windowWidth *= 0.45;
	modifier = 0;
}
const cbw = Math.round(windowWidth * .20);
const cbh = Math.round(windowHeight * .10);
export const cbdim = Math.min(cbw, cbh);
export const dist = Math.round((0.95* windowWidth - 4 * cbdim) * 0.20);

const Display = styled.Text`
  color: ${(props: {color: string}) => props.color};
  font-size: 32px;
`

const Circ = styled.TouchableHighlight`
  background-color: ${({color}: {color: string}) => color};
  border-radius: 50%;

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

export default function Circle({ color, text, onTouch }: CircleInput) {
  return (
      <Circ 
        onPress={() => { onTouch(); }} 
        color={color.primary} 
        underlayColor={color.secondary}
        activeOpacity={1}
	style={{
		width: cbdim,
		height: cbdim,
	}}>
          <Display color={White}>{text}</Display>
      </Circ>
  );
}
