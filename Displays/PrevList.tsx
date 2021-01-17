import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { White, Black, LightGray } from '../Constants/Palette'


export const Item = ({ input, output}) => (
  <View style={prevStyles.item}>
    <Text style={prevStyles.input}>{input}</Text>
    <View style={{flex: 1}}></View>
    <Text style={prevStyles.output}>{output}</Text>
  </View>
);

export const prevStyles = StyleSheet.create({
  item: {
   // backgroundColor: Black,
    backgroundColor: "#40b1ed",
    paddingTop: 5,
    paddingLeft: "5%",
    paddingRight: "5%",
    marginVertical: 5,
    marginHorizontal: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  input: {
    fontSize: 24,
    color: White
  },
  output: {
    fontSize: 24,
    color: White,
    justifySelf: "flex-end",
   }
});
