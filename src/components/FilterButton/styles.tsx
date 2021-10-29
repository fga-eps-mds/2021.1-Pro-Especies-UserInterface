import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

interface ButtonType {
  hasFilter: boolean;
}
export const TextFilter = styled.Text<ButtonType>`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12, 640)}px;
  color: ${({ theme, hasFilter }) => hasFilter ? 'white' : 'black'};
  margin-left: ${RFValue(3, 640)}px;
`;

export const IconFilter = styled(MaterialIcons)`
  align-self: center;
  font-size: ${RFValue(24, 640)}px;
`;

export const TouchableFilter = styled.TouchableOpacity<ButtonType>`
  text-align: center;
  flex-direction: row;
  background-color: ${({ theme, hasFilter }) => hasFilter ? theme.colors.secondary_dark : theme.colors.background};
  width: ${RFValue(75, 640)}px;
  border-radius: ${RFValue(4, 640)}px;
  height: ${RFValue(32, 640)}px;
  align-items: center;
`;
export const NumberContainer = styled.View`
  background-color: rgba(32, 46, 53, 0.3);
  border-radius: ${RFValue(10, 640)}px;;
  height: ${RFValue(20, 640)}px;
  width: ${RFValue(20, 640)}px;
  align-items: center;
  justify-content: center;
  margin-left: ${RFValue(6, 640)}px;
`
export const NumberText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12, 640)}px;
  color: white;
`;
