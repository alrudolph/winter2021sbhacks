import React from 'react';
import { TouchableHighlight, tyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native';

const T1 = styled.TouchableHighlight`
  background-color: ${props => props.touch ? props.primary : props.secondary}
`;

const Display = styled.Text`
  color: ${props => props.color};
`

type CircleInput = {
  primaryColor: string,
  secondaryColor: string,
  textColor: string,
  text: string
};

export default function Circle({ primaryColor, secondaryColor, textColor, text }: CircleInput) {
  return (
    <T1 onPress={() => {alert(primaryColor)}} primary={primaryColor} secondary={secondaryColor} touch={false}>
      <Display color={textColor}>{text}</Display>
    </T1>
  );
}
