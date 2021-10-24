import React from 'react';
import { Text } from './styles';

interface Props {
  text: string;
}

export function HalfToneText({ text }: Props) {
  return <Text>{text}</Text>;
}
