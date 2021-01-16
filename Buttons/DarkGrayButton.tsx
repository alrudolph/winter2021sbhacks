import React from 'react';

import Circle from '../Buttons/Circle';
import { White, DarkGray } from '../GlobalComponents/Palette';

export default function DarkGreyButton({ onTouch, text }: {onTouch: Function, text: string}) {
  return (
    <Circle
        primaryColor={DarkGray.primary}
        secondaryColor={DarkGray.secondary}
        textColor={White}
        onTouch={onTouch}
        text={text}
    />
  );
}