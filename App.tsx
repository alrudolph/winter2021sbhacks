import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Circle from './GlobalComponents/Circle';

import { Orange, White } from './GlobalComponents/Palette'

export default function App() {
  return (
    <View>
      <Circle primaryColor={Orange.primary} secondaryColor={Orange.secondary} textColor={White} callback={() => alert("hello")} text="+"/>
    </View>
  );
}
