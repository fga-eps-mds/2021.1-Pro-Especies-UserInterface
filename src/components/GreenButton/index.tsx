import React from "react";
import { Button, ButtonText } from "./styles";

interface Props {
  text: string;
  buttonFunction: VoidFunction;
}

export function GreenButton({ text, buttonFunction }: Props) {
  return (
    <Button onPress={buttonFunction}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
}
