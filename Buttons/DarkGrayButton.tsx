import React from 'react';

import Circle from '../Buttons/Circle';
import { White, DarkGray } from '../Constants/Palette';

export default function DarkGreyButton({ onTouch, text }: { onTouch: Function, text: string }) {
  return (
    <Circle
	    color={DarkGray}
        textColor={White}
        onTouch={onTouch}
        text={text}
    />
  );
}
