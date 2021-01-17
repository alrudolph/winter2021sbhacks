import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

import Keypad from './Displays/Keypad';
import NumberDisplay from './Displays/NumberDisplay';
import Circle from './Buttons/Circle';

import styled from 'styled-components/native';

import { White, Black, LightGray } from './Constants/Palette'
import VarPad from './Displays/VarPad';
import { VarView } from './Displays/VarPad';

import { Types, TokenType, DigitType } from "./Constants/types"
import { DigitBuilder, trunc } from "./Constants/numbers"
import output from './Constants/tokens';
import { Variables } from './Constants/Variables';

import calculator, {addParenthesis} from "./Constants/calculator";

/*
	 import Current from './Displays/Current';
	 import History from './Displays/History';
 */

import { Item } from './Displays/PrevList';

const Body = styled.View`
width: 100%;
height: 100%;
background-color: ${Black};
padding: 2.5%;
display: flex;
`;

type stored = {
queue: Array<Types>,
			 history: string,
			 val: string
}

export default function App() {
  const [mode, setMode] = useState("num");
  const [prev, setPrev] = useState([]);

  const defaultState: stored = { queue: [], history: "", val: ""};
  const [{ queue, history, val }, setExpression] = useState(defaultState);


  useEffect(() => {
    const output = queue.reduce((acc, curr) => acc + curr.display, "");
    setExpression({ queue, history: output, val});
  }, [queue])

  const appendQueue = (n: Types) => {
    const newQ = [...queue, n];
    setExpression({ queue: newQ, history, val });
  }

  const append = (n: Types) => {
    const lastElem = queue.length > 0 ? queue[queue.length - 1] : null;
    if (n.type === "digit") {
      if (lastElem !== null && lastElem.type == "DigitBuilder") {
        const newQ = [...queue.slice(0, queue.length - 1), lastElem.append(n)];
        setExpression({ queue: newQ, history, val});
      }
      else {
        appendQueue(new DigitBuilder(n));
      }
    }
    else if (n.type === "operator" && lastElem && lastElem.type !== "operator") {
      appendQueue(n);
    }
    else if (n.type === "parenthesis") {
      if (n.display === ")") {
        setExpression({ queue: addParenthesis([...queue, n]), history, val });
      }
      else {
        appendQueue(n);
      }
    }
    else if (n.type === "variable") {
      appendQueue(n);
    }
  }

  const clear = () => {
    setExpression({ queue: [], history: "", val: "" })
  }

  const evaluateQueue = () => {
    return calculator(queue);
  }

  const equals = () => {
    setExpression({ queue: addParenthesis([...queue]), history, val: trunc(evaluateQueue())});

    let updatedPrev = [...prev];
    updatedPrev.push({input: history, output: trunc(evaluateQueue())});
    setPrev(updatedPrev);
  }
  
  const showVar = () => {
    setMode("var");
  }

  const back = () => {
    setMode("num");
  }

const renderItem = ({ item, output}) => (
    <Item input={item.input} output={item.output}/>
  );
 
const scrollViewRef = useRef();

  return (
    <Body>
      <View style={{height: "5%"}}>
      <ScrollView ref={scrollViewRef}
      onContentSizeChange={()=> scrollViewRef.current.scrollToEnd({animated: true})}>
      <FlatList
        data={prev}
        renderItem={renderItem}
      />
      </ScrollView>
      </View>
      <Variables>
      	<View style={{height: "30%"}}>
	<NumberDisplay history={history} val={val} />
	</View>
        {mode === "num" ? 
        (<Keypad 
            append={(input: Types) => { append(input); }}
            clear={() => { clear(); }}
            equals={() => { equals(); }}
              showVar={() => { showVar(); }}
          />
        ) : (
          <VarPad 
            append={(input: Types) => { append(input); }}
            back={() => { back(); }}
            currVal={evaluateQueue()}
            currDisplay={val}
          />
        )}
      </Variables>
    </Body>
  );
}

