import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'

import { White, DarkGray, LightGray, Orange } from '../Constants/Palette';
import Circle from '../Buttons/Circle';
import LongBoi from '../Buttons/LongBoi';

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
	align-items: center;
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
`;



export function VarView({varName, append, mode, current}: {varName: string, append: Function, mode:string, current:number}){
	const [varVal, setVarVal] = useState(0);

	return (
	  <Display>
	    <VarRow>
	      <VarDisplay>{varVal}</VarDisplay>
	        <ButtonPartLmao>
	          <Circle color={LightGray} text={varName} onTouch={() => {
	            if (mode === "store") {
	              setVarVal(current);
	            }
	  	    else if (mode === "retrieve") {
	  	      append(varVal);
		    }
	  	  }}/>
	   	</ButtonPartLmao>
	      </VarRow>
 	    <Divider />
	  </Display>
);}

export default function VarPad({append, back, current}: {append: Function, back: Function, current: number}){
	const [mode, setMode] = useState("store");

	return (
		<Display>
    			<VarView varName="A" append={(input: string) => { append(input); }} current={current} mode={mode}/>
    			<VarView varName="B" append={(input: string) => { append(input); }} current={current} mode={mode}/>
    			<VarView varName="C" append={(input: string) => { append(input); }} current={current} mode={mode}/>
    			<VarView varName="D" append={(input: string) => { append(input); }} current={current} mode={mode}/>
    			<VarView varName="E" append={(input: string) => { append(input); }} current={current} mode={mode}/>

	   		<VarRow style={{flex: 1}}>
				<View style={{width: "50%"}} />
				<ButtonPartLmao style={{justifyContent: "flex-end"}}>
					<LongBoi color={Orange} text="save" onTouch={() => {back();}}
						style={{alignSelf: "flex-end"}}/>
				</ButtonPartLmao>
				<ButtonPartLmao>
					<Circle color={Orange} text="←" onTouch={() => {back();}}/>
				</ButtonPartLmao>
	  		</VarRow>	
		</Display>
	)
;}
