import React from 'react';
import { Dimensions, TouchableHighlight, tyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native';
import { White } from '../Constants/Palette';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const cbw = Math.round(windowWidth * .20);
const cbh = Math.round(windowHeight * .10);
const cbdim = Math.min(cbw, cbh);

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
