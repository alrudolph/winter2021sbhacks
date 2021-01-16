import React from 'react';
import { Button, tyleSheet, Text, View } from 'react-native';

import styled from 'styled-components';

const T1 = styled(Button)`
  background-color: blue;
`;

type CircleInput = {
  primaryColor: string,
  secondaryColor: string
};

export default function Circle({ primaryColor }: CircleInput) {
  return (
    <T1 title="Hello" onPress={() => {alert(primaryColor)}}/>
  );
}
