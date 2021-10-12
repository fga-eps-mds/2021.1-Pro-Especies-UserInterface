import React from "react";
import { Box, HeaderIcon, HeaderText, IconContainer, IconText } from "./styles";

interface Props {
  title: string;
}

export function TopBar({ title }: Props) {
  return (
    <Box>
      <HeaderText>{title}</HeaderText>
      <IconContainer>
        <HeaderIcon name="login" />
        <IconText>Entrar</IconText>
      </IconContainer>
    </Box>
  );
}
