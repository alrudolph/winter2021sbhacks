import React from 'react';

import Circle from './Circle';
import { White, LightGray } from '../GlobalComponents/Palette';
import { CircSize } from './Circle';

export default function LightGrayButton({ onTouch, text }: {onTouch: Function, text: string}) {
  return (
    <Circle
        primaryColor={LightGray.primary}
        secondaryColor={LightGray.secondary}
        textColor={White}
        onTouch={onTouch}
        text={text}
	size={CircSize}
    />
  );
}
