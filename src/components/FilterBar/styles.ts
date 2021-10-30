import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Box = styled.View`
  height: ${RFValue(82)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary_light};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: ${RFValue(30)}px;
`;
export const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: ${RFValue(16)}px;
`;

export const HeaderIcon = styled(MaterialIcons)`
  font-size: ${RFValue(30)}px;
`;

export const ArrowIcon = styled.Image`
  height: ${RFValue(24, 640)}px;
`;

export const IconText = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const HeaderText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(18)}px;
  margin-left: ${RFValue(20, 640)}px;
  flex-direction: row;
`;

export const ArrowButton = styled.TouchableOpacity`
  flex-direction: row;
  margin: ${RFValue(10, 640)}px;
`;