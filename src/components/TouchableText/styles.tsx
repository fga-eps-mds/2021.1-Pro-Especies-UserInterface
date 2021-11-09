import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const TitleText = styled.Text<{ stateDefault: boolean }>`
  font-family: ${({ theme }) =>
    p =>
      p.stateDefault ? theme.fonts.regular : theme.fonts.bold};
  font-size: ${RFValue(12, 640)}px;
  margin-right: ${RFValue(16, 640)}px;
`;
export const TitleHighlight = styled.View`
  height: ${RFValue(1, 640)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
