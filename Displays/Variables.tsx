import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'

import { White, DarkGray, LightGray, Orange } from '../Constants/Palette';
import Circle from '../Buttons/Circle';

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
`

export function VarView({varName, append}: {varName: string, append: Function}){
	const [varVal, setVarVal] = useState("1247348");
	return (
		<Display>
			<VarRow>
				<VarDisplay>{varVal}</VarDisplay>
				<ButtonPartLmao>
					<Circle color={LightGray} text={varName} onTouch={() => {append(varName);}}/>
				</ButtonPartLmao>
			</VarRow>
			<Divider />
		</Display>
);}

export default function VarPad({append}: {append: Function}){
	return (<Display>
    	   <VarView varName="A" append={(input: string) => { append(input); }} />
    	   <VarView varName="B" append={(input: string) => { append(input); }} />
    	   <VarView varName="C" append={(input: string) => { append(input); }} />
    	   <VarView varName="D" append={(input: string) => { append(input); }} />
    	   <VarView varName="E" append={(input: string) => { append(input); }} />
    	   <VarView varName="F" append={(input: string) => { append(input); }} />
    	</Display>
);}
