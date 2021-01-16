import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Keypad from './Displays/Keypad';
import NumberDisplay from './Displays/NumberDisplay';

import styled from 'styled-components/native';

import { Black } from './Constants/Palette'

import { Types, TokenType, DigitType } from "./Constants/types"
import { DigitBuilder } from "./Constants/numbers"
import output from './Constants/tokens';

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

export default function App() {
  const defaultState: stored = { queue: [], history: "", val: ""};
  const [{ queue, history, val }, setExpression] = useState(defaultState);


  useEffect(() => {
    const output = queue.reduce((acc, curr) => acc + curr.display, "");
    setExpression({ queue: queue, history: output, val: val});
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

    console.log(queue);    
  }

  const clear = () => {
    setExpression({ queue: [], history: "", val: val })
  }

  const equals = () => {
    setExpression({ queue: queue, history: history, val: Math.round(eval(history) * 1000) / 1000});
  }

  return (
    <Body>
      <NumberDisplay history={history} val={val}/>
      <Keypad 
        append={(input: TokenType) => { append(input); }}
        clear={() => { clear(); }}
        equals={() => { equals(); }}
        />
    </Body>
  );
}
