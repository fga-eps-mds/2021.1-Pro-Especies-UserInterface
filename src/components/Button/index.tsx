import React from 'react';
import { Button, ButtonText } from './styles';

interface Props {
  text: string;
  type?: "primary" | "secondary";
  buttonFunction: VoidFunction;
}

export function DefaultButton({ text, type = "primary", buttonFunction }: Props) {
  return (
    <Button onPress={buttonFunction} type={type}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
}
