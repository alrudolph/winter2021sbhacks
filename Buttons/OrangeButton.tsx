import React from 'react';

import Circle from './Circle';
import { White, Orange } from '../GlobalComponents/Palette';

export default function OrangeButton({ onTouch, text }: { onTouch: Function, text: string }) {
  return (
    <Circle
	color={Orange}
        textColor={White}
        onTouch={onTouch}
        text={text}
    />
  );
}
