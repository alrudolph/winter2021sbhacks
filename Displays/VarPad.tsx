import React, { useState, useContext } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'


import { White, DarkGray, LightGray, Orange } from '../Constants/Palette';
import Circle from '../Buttons/Circle';
import LongBoi from '../Buttons/LongBoi';

import { VariablesContext } from "../Constants/Variables"

import { trunc } from '../Constants/numbers';
import { cbdim } from '../Buttons/Circle';

const VarRow = styled.View`
	flex-grow: 1;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: flex-end;
`;

const VarDisplay = styled.View`
	width: 60%;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;

	borderBottomColor: ${White};
	borderBottomWidth: 3px;
	border-style: solid;
`;

const ButtonPartLmao = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 25%;
`;

const DisplayText = styled.Text`
	font-size: 50px;
	color: ${White};
`;

const Display = styled.View`
	display: flex;
    flex: 1;
	height: 70%;
`;

export function VarView({varName, store, retreive, mode, display, setMode}: {varName: string, store: Function, retreive: Function, mode:string, display: string, setMode:Function}){
	const [varVal, setVarVal] = useState(display);

	return (
		<Display>
			<VarRow>
				<VarDisplay>
					<DisplayText>{varVal}</DisplayText>
				</VarDisplay>
				<ButtonPartLmao>
					<Circle color={LightGray} text={varName} onTouch={() => {
						if (mode === "store") {
							setVarVal(store());
						}
						else if (mode === "retreive" && varVal) {
							retreive();
						}
						setMode("retreive");
					}}/>
				</ButtonPartLmao>
			</VarRow>
		</Display>
);}

export default function VarPad({append, back, currVal, currDisplay}: {append: Function, back: Function, currVal: number, currDisplay: string}){
	const [mode, setMode] = useState("retreive");
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
							retreive={() => append({ type: "variable", which: value, value: obj.value, display: value })}
							mode={mode}
							key={idx}
							setMode={setMode}
							store={() => {
								change(value, {type: "number", value: currVal, display: currDisplay})
								return currDisplay;
							}}
						/>
					)
				})
			}
			<VarRow style={{flex: 1}}>
				<View style={{width: "30%"}} />
				<ButtonPartLmao style={{justifyContent: "flex-end"}}>
					<LongBoi color={Orange} text="Save" onTouch={() => { mode === "store" ? setMode("retreive") : setMode("store") }}
						style={{alignSelf: "flex-end"}}/>
				</ButtonPartLmao>
				<ButtonPartLmao>
					<Circle color={Orange} text="←" onTouch={() => {back();}}/>
				</ButtonPartLmao>
	  		</VarRow>	
		</Display>
	)
;}
