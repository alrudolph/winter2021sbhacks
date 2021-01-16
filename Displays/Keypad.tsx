import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DarkGrayButton from "../Buttons/DarkGrayButton";
import LightGrayButton from "../Buttons/LightGrayButton";
import OrangeButton from "../Buttons/OrangeButton";

export default function Keypad() {
  return (
    <View>
        <DarkGrayButton text="+" onTouch={() => {alert("Hello")}} />
        <OrangeButton text="+" onTouch={() => {alert("Hello")}} />
        <LightGrayButton text="+" onTouch={() => {alert("Hello")}} />
    </View>
  );
}
