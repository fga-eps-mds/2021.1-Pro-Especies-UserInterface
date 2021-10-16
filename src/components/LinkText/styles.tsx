import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(10.5, 640)}px;
  line-height: ${RFValue(18, 640)}px;
  color: ${({ theme }) => theme.colors.on_background};
`;
