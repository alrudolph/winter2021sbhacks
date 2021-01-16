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
    background-color: ${props => ( props.yes ? "red" : "none")};
    
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export default function Keypad() {
  return (
    <Display>
        <Row yes={true}>
            <CircleButton color={LightGray} text="AC" onTouch={() => {alert("HELLO")}} />
            <CircleButton color={LightGray} text="V" onTouch={() => {alert("HELLO")}} />
            <CircleButton color={LightGray} text="." onTouch={() => {alert("HELLO")}} />
            <CircleButton color={Orange} text="÷" onTouch={() => {alert("HELLO")}} />
        </Row>
        <Row>
            <CircleButton color={DarkGray} text="7" onTouch={() => {alert("HELLO")}} />
            <CircleButton color={DarkGray} text="8" onTouch={() => {alert("HELLO")}} />
            <CircleButton color={DarkGray} text="9" onTouch={() => {alert("HELLO")}} />
            <CircleButton color={Orange} text="×" onTouch={() => {alert("HELLO")}} />
        </Row>
        <Row>
            <CircleButton color={DarkGray} text="4" onTouch={() => {alert("HELLO")}} />
            <CircleButton color={DarkGray} text="5" onTouch={() => {alert("HELLO")}} />
            <CircleButton color={DarkGray} text="6" onTouch={() => {alert("HELLO")}} />
            <CircleButton color={Orange} text="–" onTouch={() => {alert("HELLO")}} />
        </Row>
        <Row>
            <CircleButton color={DarkGray} text="1" onTouch={() => {alert("HELLO")}} />
            <CircleButton color={DarkGray} text="2" onTouch={() => {alert("HELLO")}} />
            <CircleButton color={DarkGray} text="3" onTouch={() => {alert("HELLO")}} />
            <CircleButton color={Orange} text="+" onTouch={() => {alert("HELLO")}} />
        </Row>
        <Row>
            <CircleButton color={DarkGray} text="0" onTouch={() => {alert("HELLO")}} />
            <CircleButton color={DarkGray} text="(" onTouch={() => {alert("HELLO")}} />
            <CircleButton color={DarkGray} text=")" onTouch={() => {alert("HELLO")}} />
            <CircleButton color={Orange} text="=" onTouch={() => {alert("HELLO")}} />
        </Row>
    </Display>
  );
}
