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

import Current from './Displays/Current';
import History from './Displays/History';
import calculator from "./Constants/calculator";

const Body = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Black};
`
type stored = {
  queue: Array<Types>,
  history: string,
  val: string
}


const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


export default function App() {
  const [mode, setMode] = useState("num");

  const defaultState: stored = { queue: [], history: "", val: ""};
  const [{ queue, history, val }, setExpression] = useState(defaultState);

  const [prev, setPrev] = useState([]);

  useEffect(() => {
    const output = queue.reduce((acc, curr) => acc + curr.display, "");
    setExpression({ queue: queue, history: output, val: val});

    console.log(queue);
  }, [queue])

  const appendQueue = (n: Types) => {
    const newQ = [...queue, n];
    setExpression({ queue: newQ, history: history, val: val });
  }

  const append = (n: Types) => {
    if (n.type === "digit") {
      const lastElem = queue.length > 0 ? queue[queue.length - 1] : null;
      if (lastElem !== null && lastElem.type == "DigitBuilder") {
        const newQ = [...queue.slice(0, queue.length - 1), lastElem.append(n)];
        setExpression({ queue: newQ, history: history, val: val});
      }
      else {
        appendQueue(new DigitBuilder(n));
      }
    }
    else if (n.type === "operator") {
      appendQueue(n);
    }
    else if (n.type === "parenthesis") {
      appendQueue(n);
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
    let updatedPrev = [...prev];
    updatedPrev.push({title: history});
    setPrev(updatedPrev);

    setExpression({ queue: queue, history: history, val: trunc(evaluateQueue())});
  }
  
  const showVar = () => {
    setMode("var");
  }

  const back = () => {
    setMode("num");
  }

const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
 
const scrollViewRef = useRef();

  return (
    <Body>
      <View style={{height: "10%"}}>
      <ScrollView ref={scrollViewRef}
      onContentSizeChange={()=> scrollViewRef.current.scrollToEnd({animated: true})}
      style={{backgroundColor: 'red'}}>
      <FlatList
        data={prev}
        renderItem={renderItem}
      />
      </ScrollView>
      </View>
      <Variables>
      	<View style={{height: "25%"}}>
	<History history={history} />
	<Current value={val} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "25%"
  },
  item: {
    backgroundColor: Black,
    //backgroundColor: "#40b1ed",
    padding: 0,
    marginVertical: 8,
    marginHorizontal: 0,
  },
  title: {
    fontSize: 32,
    color: White
  },
});
