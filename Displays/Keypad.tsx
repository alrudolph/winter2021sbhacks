import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'

import DarkGrayButton from "../Buttons/DarkGrayButton";
import LightGrayButton from "../Buttons/LightGrayButton";
import OrangeButton from "../Buttons/OrangeButton";

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
            <LightGrayButton text="AC" onTouch={() => {alert("HELLO")}} />
            <LightGrayButton text="V" onTouch={() => {alert("HELLO")}} />
            <LightGrayButton text="." onTouch={() => {alert("HELLO")}} />
            <OrangeButton text="*/*" onTouch={() => {alert("HELLO")}} />
        </Row>
        <Row>
            <DarkGrayButton text="7" onTouch={() => {alert("HELLO")}} />
            <DarkGrayButton text="8" onTouch={() => {alert("HELLO")}} />
            <DarkGrayButton text="9" onTouch={() => {alert("HELLO")}} />
            <OrangeButton text="X" onTouch={() => {alert("HELLO")}} />
        </Row>
        <Row>
            <DarkGrayButton text="4" onTouch={() => {alert("HELLO")}} />
            <DarkGrayButton text="5" onTouch={() => {alert("HELLO")}} />
            <DarkGrayButton text="6" onTouch={() => {alert("HELLO")}} />
            <OrangeButton text="-" onTouch={() => {alert("HELLO")}} />
        </Row>
        <Row>
            <DarkGrayButton text="1" onTouch={() => {alert("HELLO")}} />
            <DarkGrayButton text="2" onTouch={() => {alert("HELLO")}} />
            <DarkGrayButton text="3" onTouch={() => {alert("HELLO")}} />
            <OrangeButton text="+" onTouch={() => {alert("HELLO")}} />
        </Row>
        <Row>
            <DarkGrayButton text="0" onTouch={() => {alert("HELLO")}} />
            <DarkGrayButton text="(" onTouch={() => {alert("HELLO")}} />
            <DarkGrayButton text=")" onTouch={() => {alert("HELLO")}} />
            <OrangeButton text="=" onTouch={() => {alert("HELLO")}} />
        </Row>
    </Display>
  );
}
