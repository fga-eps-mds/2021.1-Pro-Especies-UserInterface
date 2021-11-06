import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons';

export const FishCardContainer = styled.View`
  align-items: flex-start;
  width: ${RFValue(156, 640)}px;
  height: ${RFValue(180, 640)}px;
  elevation: 8;
  border-radius: ${RFValue(16, 640)}px;
  background-color: ${({ theme }) => theme.colors.background};
  margin-bottom: 14px;
`;

export const CheckBoxView = styled.View`
  position: absolute;
  z-index: 10;
`;

export const FishImage = styled.Image`
  width: ${RFValue(156, 640)}px;
  height: ${RFValue(125, 640)}px;
  border-top-left-radius: ${RFValue(16, 640)}px;
  border-top-right-radius: ${RFValue(16, 640)}px;
`;
export const TextView = styled.View`
  justify-content: center;
  margin-left: ${RFValue(10, 640)}px;
  width: ${RFValue(135, 640)}px;
`;

export const CommonNameText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14, 640)}px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.on_background};
  padding-top: ${RFValue(8, 640)}px;
`;

export const ScientificName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10, 640)}px;
  line-height: 13px;
  opacity: 0.3;
  color: ${({ theme }) => theme.colors.on_background};
  padding-top: ${RFValue(4, 640)}px;
`;

export const NoFishImage = styled.View`
  width: ${RFValue(156, 640)}px;
  height: ${RFValue(125, 640)}px;
  border-top-left-radius: ${RFValue(16, 640)}px;
  justify-content: center;
  align-items: center;
  border-top-right-radius: ${RFValue(16, 640)}px;
  background-color: rgba(32, 46, 53, 0.3);
`;

export const NoFishImageIcon = styled(MaterialIcons)`
  font-size: ${RFValue(32, 640)}px;
`