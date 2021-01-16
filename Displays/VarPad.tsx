import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'


import { White, DarkGray, LightGray, Orange } from '../Constants/Palette';
import Circle from '../Buttons/Circle';

import { VariablesContext } from "../Constants/Variables"

import { trunc } from '../Constants/numbers';

const VarRow = styled.View`
	flex-grow: 1;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	height: auto;
`;

const VarDisplay = styled.Text`
	width: 75%;
	font-size: 50px;
	color: ${White};

	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
`;

const ButtonPartLmao = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: flex-end;
	width: 25%;
`;

const Divider = styled.View`
	borderBottomColor: ${White};
	borderBottomWidth: 1;
	width: 75%;
`;

const Display = styled.View`
    display: flex;
    flex: 1;
    height: 60%;
`

export function VarView({varName, store, retreive, mode, display}: {varName: string, store: Function, retreive: Function, mode:string, display: string}){
	const [varVal, setVarVal] = useState(display);

	return (
		<Display>
			<VarRow>
				<VarDisplay>{varVal}</VarDisplay>
				<ButtonPartLmao>
					<Circle color={LightGray} text={varName} onTouch={() => {
						if (mode === "store") {
							setVarVal(store());
						}
						else if (mode === "retreive") {
							retreive();
						}
					}}/>
				</ButtonPartLmao>
			</VarRow>
			<Divider />
		</Display>
);}

export default function VarPad({append, back, currVal, currDisplay}: {append: Function, back: Function, currVal: number, currDisplay: string}){
	const [mode, setMode] = useState("store");
	const [vars, change] = useContext(VariablesContext)

	return (
		<Display>
			{
				Object.keys(vars).map((value, idx) => {
					const obj = vars[value];

					return (
						<VarView
							varName={value}
							display={obj.display}
							retreive={() => append({ type: "variable", which: value, value: currVal, display: value })}
							mode={mode}
							key={idx}
							store={() => {
								change(value, {type: "number", value: currVal, display: currDisplay})
								return currDisplay;
							}}
						/>
					)
				})
			}
	   		<Circle color={Orange} text="←" onTouch={() => { back(); }} />
		</Display>
	)
;}
