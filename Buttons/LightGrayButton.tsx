import React from 'react';

import Circle from './Circle';
import { White, LightGray } from '../Constants/Palette';

export default function LightGrayButton({ onTouch, text }: { onTouch: Function, text: string }) {
  return (
    <Circle
	      color={LightGray}
        textColor={White}
        onTouch={onTouch}
        text={text}
    />
  );
}
