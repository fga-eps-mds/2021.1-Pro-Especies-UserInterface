import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  width: ${RFValue(156, 640)}px;
  height: ${RFValue(40, 640)}px;
  border-radius: ${RFValue(5, 640)}px;
  background-color: ${({ theme }) => theme.colors.secondary_dark};
  align-items: center;
  justify-content: center;
  margin-bottom: ${RFValue(8, 640)}px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12, 640)}px;
`;
