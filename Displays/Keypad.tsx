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
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export default function Keypad() {
  return (
    <Display>
        <Row>
            <DarkGrayButton text="+" onTouch={() => {alert("HELLO")}} />
            <DarkGrayButton text="+" onTouch={() => {alert("HELLO")}} />
            <DarkGrayButton text="+" onTouch={() => {alert("HELLO")}} />
            <DarkGrayButton text="+" onTouch={() => {alert("HELLO")}} />
        </Row>
        <Row>
            <DarkGrayButton text="+" onTouch={() => {alert("HELLO")}} />
            <DarkGrayButton text="+" onTouch={() => {alert("HELLO")}} />
            <DarkGrayButton text="+" onTouch={() => {alert("HELLO")}} />
            <DarkGrayButton text="+" onTouch={() => {alert("HELLO")}} />
        </Row>
        <Row>
            <DarkGrayButton text="+" onTouch={() => {alert("HELLO")}} />
            <DarkGrayButton text="+" onTouch={() => {alert("HELLO")}} />
            <DarkGrayButton text="+" onTouch={() => {alert("HELLO")}} />
            <DarkGrayButton text="+" onTouch={() => {alert("HELLO")}} />
        </Row>
        <Row>
            <DarkGrayButton text="+" onTouch={() => {alert("HELLO")}} />
            <DarkGrayButton text="+" onTouch={() => {alert("HELLO")}} />
            <DarkGrayButton text="+" onTouch={() => {alert("HELLO")}} />
            <DarkGrayButton text="+" onTouch={() => {alert("HELLO")}} />
        </Row>
        <Row>
            <DarkGrayButton text="+" onTouch={() => {alert("HELLO")}} />
            <DarkGrayButton text="+" onTouch={() => {alert("HELLO")}} />
            <DarkGrayButton text="+" onTouch={() => {alert("HELLO")}} />
            <DarkGrayButton text="+" onTouch={() => {alert("HELLO")}} />
        </Row>
    </Display>
  );
}
