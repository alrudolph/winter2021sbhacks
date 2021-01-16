import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'

import { White, DarkGray, LightGray, Orange } from '../GlobalComponents/Palette';
import { CircleButton } from '../Buttons/Circle';

const Display = styled.View`
    height: 75%;
    display: flex;
    justify-content: space-evenly;
`

const Row = styled.View`
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

export default function Keypad({ append }: {append: Function}) {
  return (
    <Display>
        <Row yes={true}>
            <CircleButton color={LightGray} text="AC" onTouch={() => {append("")}} />
            <CircleButton color={LightGray} text="V" onTouch={() => {append("")}} />
            <CircleButton color={LightGray} text="." onTouch={() => {append(".")}} />
            <CircleButton color={Orange} text="÷" onTouch={() => {append("÷")}} />
        </Row>
        <Row>
            <CircleButton color={DarkGray} text="7" onTouch={() => {append("7")}} />
            <CircleButton color={DarkGray} text="8" onTouch={() => {append("8")}} />
            <CircleButton color={DarkGray} text="9" onTouch={() => {append("9")}} />
            <CircleButton color={Orange} text="×" onTouch={() => {append("×")}} />
        </Row>
        <Row>
            <CircleButton color={DarkGray} text="4" onTouch={() => {append("4")}} />
            <CircleButton color={DarkGray} text="5" onTouch={() => {append("5")}} />
            <CircleButton color={DarkGray} text="6" onTouch={() => {append("6")}} />
            <CircleButton color={Orange} text="–" onTouch={() => {append("–")}} />
        </Row>
        <Row>
            <CircleButton color={DarkGray} text="1" onTouch={() => {append("1")}} />
            <CircleButton color={DarkGray} text="2" onTouch={() => {append("2")}} />
            <CircleButton color={DarkGray} text="3" onTouch={() => {append("3")}} />
            <CircleButton color={Orange} text="+" onTouch={() => {append('+');}} />
        </Row>
        <Row>
            <CircleButton color={DarkGray} text="0" onTouch={() => {append("0")}} />
            <CircleButton color={DarkGray} text="(" onTouch={() => {append("(")}} />
            <CircleButton color={DarkGray} text=")" onTouch={() => {append(")")}} />
            <CircleButton color={Orange} text="=" onTouch={() => {append("")}} />
        </Row>
    </Display>
  );
}
