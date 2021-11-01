import React from 'react';
import { HalfToneText } from '../HalfToneText';
import { RegularText } from '../RegularText';
import { PropertyContainer } from './styles';

interface Props {
  property: string;
  value: string;
}

export function Property({ property, value }: Props) {
  return (
    <PropertyContainer>
      <HalfToneText text={property} />
      <RegularText text={value} />
    </PropertyContainer>
  );
}
