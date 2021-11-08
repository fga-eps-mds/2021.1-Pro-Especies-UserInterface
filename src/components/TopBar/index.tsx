import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, HeaderIcon, HeaderText, IconContainer, IconText, Spacer } from './styles';

interface Props {
  title: string;
  icon: string;
  iconText: string;
  buttonFunction: VoidFunction;
}

export function TopBar({ title, icon, iconText, buttonFunction }: Props) {
  return (
    <Box>
      <HeaderText>{title}</HeaderText>
      <Spacer />
      <TouchableOpacity onPress={buttonFunction}>
        <IconContainer>
          <HeaderIcon name={icon} />
          <IconText>{iconText}</IconText>
        </IconContainer>
      </TouchableOpacity>
    </Box>
  );
}
