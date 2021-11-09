import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const PageContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const TitleButtonsContainer = styled.View`
  flex-direction: row;
`

export const TitleContainer = styled.View`
  width: 100%;
  padding: 0px ${RFValue(16, 640)}px;
  margin-top: ${RFValue(32, 640)}px;
  margin-bottom: ${RFValue(11, 640)}px;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
  /* background-color: black; */
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

export const InstructionButton = styled.TouchableOpacity``

export const InstructionButtonIcon = styled(MaterialIcons)`
  font-size: ${RFValue(24, 640)}px;
  /* margin-left: auto; */
  color: ${({ theme }) => theme.colors.on_background};
`
