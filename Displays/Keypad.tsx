import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'

import { White, DarkGray, LightGray, Orange } from '../GlobalComponents/Palette';
import Circle from '../Buttons/Circle';

const Display = styled.View`
    height: 65%;
    display: flex;
    justify-content: space-evenly;
`

const Row = styled.View`
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export default function Keypad({ append, clear, equals, showVar }: {append: Function, clear: Function, equals: Function, showVar: Function}) {
  return (
    <Display>
        <Row yes={true}>
            <Circle color={LightGray} text="AC" onTouch={() => {clear()}}  />
            <Circle color={LightGray} text="V" onTouch={() => {showVar()}} />
            <Circle color={LightGray} text="." onTouch={() => {append(".")}} />
            <Circle color={Orange} text="÷" onTouch={() => {append("÷")}} />
        </Row>
        <Row>
            <Circle color={DarkGray} text="7" onTouch={() => {append("7")}} />
            <Circle color={DarkGray} text="8" onTouch={() => {append("8")}} />
            <Circle color={DarkGray} text="9" onTouch={() => {append("9")}} />
            <Circle color={Orange} text="×" onTouch={() => {append("×")}} />
        </Row>
        <Row>
            <Circle color={DarkGray} text="4" onTouch={() => {append("4")}} />
            <Circle color={DarkGray} text="5" onTouch={() => {append("5")}} />
            <Circle color={DarkGray} text="6" onTouch={() => {append("6")}} />
            <Circle color={Orange} text="–" onTouch={() => {append("–")}} />
        </Row>
        <Row>
            <Circle color={DarkGray} text="1" onTouch={() => {append("1")}} />
            <Circle color={DarkGray} text="2" onTouch={() => {append("2")}} />
            <Circle color={DarkGray} text="3" onTouch={() => {append("3")}} />
            <Circle color={Orange} text="+" onTouch={() => {append('+');}} />
        </Row>
        <Row>
            <Circle color={DarkGray} text="0" onTouch={() => {append("0")}} />
            <Circle color={DarkGray} text="(" onTouch={() => {append("(")}} />
            <Circle color={DarkGray} text=")" onTouch={() => {append(")")}} />
            <Circle color={Orange} text="=" onTouch={() => {equals()}} />
        </Row>
    </Display>
  );
}
