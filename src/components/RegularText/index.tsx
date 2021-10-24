import React from 'react';
import { Text } from './styles';

interface Props {
  text: string;
}

export function RegularText({ text }: Props) {
  return <Text>{text}</Text>;
}
