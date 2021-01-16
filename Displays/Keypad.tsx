import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'

import DarkGrayButton from "../Buttons/DarkGrayButton";
import LightGrayButton from "../Buttons/LightGrayButton";
import OrangeButton from "../Buttons/OrangeButton";

const Container = styled.View`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 20% 20% 20% 20% 20%;
`;

const Button = styled.View`
    grid-column-start: ${(props: { x: number, y: number}) => props.x};
    grid-column-end: ${(props: { x: number, y: number}) => { props.x + 1 }};
    grid-row-start: ${(props: { x: number, y: number}) => props.y};
    grid-row-end: ${(props: { x: number, y: number}) => { props.y + 1 }}
`

export default function Keypad() {
  return (
    <Container>
        <DarkGrayButton text="+" onTouch={() => {alert("Hello")}} />
        <OrangeButton text="+" onTouch={() => {alert("Hello")}} />
        <LightGrayButton text="+" onTouch={() => {alert("Hello")}} />
    </Container>
  );
}
