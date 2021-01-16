import React from 'react';

import Circle from './Circle';
import { White, Orange } from '../GlobalComponents/Palette';
import { CircSize } from './Circle';

export default function OrangeButton({ onTouch, text }: {onTouch: Function, text: string}) {
  return (
    <Circle
        primaryColor={Orange.primary}
        secondaryColor={Orange.secondary}
        textColor={White}
        onTouch={onTouch}
        text={text}
	size={CircSize}
    />
  );
}
