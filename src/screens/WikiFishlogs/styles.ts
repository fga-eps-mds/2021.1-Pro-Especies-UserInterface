import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const PageContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const TitleContainer = styled.View`
  width: 100%;
  padding-left: ${RFValue(16, 640)}px;
  margin-top: ${RFValue(32, 640)}px;
  margin-bottom: ${RFValue(11, 640)}px;
  flex-direction: row;
`;

export const TouchableTitle = styled.TouchableOpacity`
  text-align: center;
`;

export const TitleHighlight = styled.View`
  height: ${RFValue(1, 640)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const TitleText = styled.Text<{ wiki: boolean }>`
  font-family: ${({ theme }) =>
    p =>
      p.wiki ? theme.fonts.bold : theme.fonts.regular};
  font-size: ${RFValue(12, 640)}px;
  margin-right: ${RFValue(16, 640)}px;
`;
