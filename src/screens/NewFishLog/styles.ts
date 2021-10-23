import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons';

export const NewFishLogContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
`;
export const ImageContainer = styled.TouchableOpacity`
  align-self: center;
  align-items: center;
  flex-direction: row;
`;

export const FishLogImage = styled.Image`
  align-self: center;
  margin-top: ${RFValue(41, 640)}px;
  border-radius: ${RFValue(88, 640)}px;
  height: ${RFValue(123, 640)}px;
  width: ${RFValue(123, 640)}px;
`;

export const TopIcon = styled(MaterialIcons)`
  font-size: ${RFValue(12, 640)}px;
  color: ${({ theme }) => theme.colors.on_primary};
  margin-top: ${RFValue(4, 640)}px;
`;
export const TextClick = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12, 640)}px;
  line-height: ${RFValue(18, 640)}px;
  color: ${({ theme }) => theme.colors.on_primary};
  margin-top: ${RFValue(4, 640)}px;
  text-align: center;
`;
export const InputContainer = styled.View`
  align-self: center;
  text-align: left;
  align-items: center;
  margin-top: ${RFValue(33, 640)}px;
`;
export const InputView = styled.View`
  align-self: center;
  align-items: center;
  height: ${RFValue(40, 640)}px;
  flex-direction: row;
  border: ${RFValue(1, 640)}px;
  border-radius: ${RFValue(5, 640)}px;
  margin-top: ${RFValue(10, 640)}px;
  width: ${RFValue(258, 640)}px;
`;
export const InputBox = styled.View`
  margin-bottom: ${RFValue(32, 640)}px;
`;
export const Input = styled.TextInput`
  height: ${RFValue(40, 640)}px;
  width: 90%;
  flex-direction: row;
  justify-content: flex-start;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12, 640)}px;
  margin-left: ${RFValue(4, 640)}px;
`;
export const RowView = styled.View`
  justify-content: center;
  height: ${RFValue(40, 640)}px;
  width: ${RFValue(258, 640)}px;
  flex-direction: row;
  margin-top: ${RFValue(10, 640)}px;
`;
export const BoxView = styled.View`
  align-items: center;
  justify-content: center;
  margin-left: ${RFValue(10, 640)}px;
`;

export const HalfInputView = styled.View`
  align-items: center;
  height: ${RFValue(40, 640)}px;
  width: ${RFValue(123, 640)}px;
  flex-direction: row;
  margin-right: ${RFValue(10, 640)}px;
  border: ${RFValue(1, 640)}px;
  border-radius: ${RFValue(5, 640)}px;
`;

export const AddLocaleButton = styled.TouchableOpacity`
  margin-top: ${RFValue(36, 640)}px;
  width: ${RFValue(156, 640)}px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: center;
`

export const AddLocaleButtonIcon = styled(MaterialIcons)`
  font-size: ${RFValue(18, 640)}px;
  color: ${({ theme }) => theme.colors.on_background};
`

export const AddLocaleButtonLabel = styled.Text`
  font-size: ${RFValue(12, 640)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.on_background};
`


export const SendButtonView = styled.View`
  align-items: center;
  margin-top: ${RFValue(36, 640)}px;
  padding-bottom: ${RFValue(20, 640)}px;
`;

export const SendButton = styled.TouchableOpacity`
  width: ${RFValue(156, 640)}px;
  height: ${RFValue(40, 640)}px;
  border-radius: ${RFValue(5, 640)}px;
  background-color: ${({ theme }) => theme.colors.secondary_dark};
  align-items: center;
  justify-content: center;
`;

export const SendButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.on_secondary_dark};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12, 640)}px;
`;

export const NewFishlogScroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: "center"
  }
})``
