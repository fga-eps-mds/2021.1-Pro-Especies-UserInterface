import React from "react";
import { Text } from "./styles";

interface Props {
  text: string;
}

export function Title({ text }: Props) {
  return <Text>{text}</Text>;
}
