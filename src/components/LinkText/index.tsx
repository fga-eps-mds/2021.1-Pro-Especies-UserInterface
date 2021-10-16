import React from "react";
import { Text } from "./styles";

interface Props {
  text: string;
}

export function LinkText({ text }: Props) {
  return <Text>{text}</Text>;
}
