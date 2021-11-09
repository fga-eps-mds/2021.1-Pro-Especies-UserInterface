import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ArrowButton, ArrowIcon, Box, HeaderIcon, HeaderText, IconContainer, IconText, Spacer } from './styles';

interface Props {
  title: string;
  icon: string;
  iconText: string;
  buttonFunction: VoidFunction;
  navigation: any;
}

export function FilterBar({ navigation, title, icon, iconText, buttonFunction }: Props) {
  return (
    <Box>
      <ArrowButton onPress={() => navigation.goBack()}>
        <IconContainer>
          <ArrowIcon source={require('../../assets/arrow_back.png')} />
        </IconContainer>
      </ArrowButton>

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
