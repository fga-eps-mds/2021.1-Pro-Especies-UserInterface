import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInputMask } from "react-native-masked-text";


export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`

export const HomeLogoContainer = styled.View`
    align-items: center;
    justify-content: center;
`
export const HomeAppImage = styled.Image`
    width: ${RFValue(130,640)}px;
    height: ${RFValue(106,640)}px;
    margin-bottom: ${RFValue(16,640)}px;
`
export const HomeAppTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(15,640)}px;
    line-height: ${RFValue(22,640)}px;
    color: ${({ theme }) => theme.colors.on_background};
`
export const HomeAppTitleBlue = styled(HomeAppTitle)`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
`

export const TouchableTitle = styled.TouchableOpacity`
    text-align: center;
`
export const TitleContainer = styled.View`
    margin-left: ${RFValue(20, 640)}px;
    margin-top: ${RFValue(32, 640)}px;
    margin-bottom: ${RFValue(20, 640)}px;
    flex-direction: row;
`
export const TitleHighlight = styled.View`
    height: ${RFValue(1, 640)}px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
`

export const TitleText = styled.Text<{admin: boolean}>`
    font-family: ${({ theme }) => (p => p.admin ? theme.fonts.regular : theme.fonts.bold)};
    font-size: ${RFValue(12, 640)}px;
    margin-right: ${RFValue(16, 640)}px;
`

export const InputScroll = styled.ScrollView`
    flex: 1;
    width: 100%;
`

export const InputContainer = styled.View`
    align-self: center;
    text-align: left;
`

export const InputView = styled.View`
    align-self: center;
    align-items: center;
    height: ${RFValue(39, 640)}px;
    flex-direction: row;
    border:  ${RFValue(1, 640)}px;
    border-radius: ${RFValue(5, 640)}px;
`

export const InputBox = styled.View`
    margin-bottom: ${RFValue(32, 640)}px;
`

export const Input = styled.TextInput`
    height: ${RFValue(39, 640)}px;
    width: ${RFValue(258, 640)}px;
    flex-direction: row;
    justify-content: flex-start;    
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12, 640)}px;
`

export const InputMask = styled(TextInputMask)`
    height: ${RFValue(39, 640)}px;
    width: ${RFValue(258, 640)}px;
    flex-direction: row;
    justify-content: flex-start;    
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12, 640)}px;
`

export const CityStateView = styled.View`
    justify-content: space-between;
    height: ${RFValue(39, 640)}px;
    flex-direction: row;
`

export const HalfInputView = styled.View`
    align-items: center;
    height: ${RFValue(39, 640)}px;
    width: ${RFValue(140, 640)}px;
    flex-direction: row;
    border:  ${RFValue(1, 640)}px;
    border-radius: ${RFValue(5, 640)}px;
`

export const ErrorMessage = styled.Text`
    color: ${({ theme }) => theme.colors.on_error};
    font-size: ${RFValue(12, 640)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`

export const MaterialInputIcon = styled(MaterialIcons)`
    font-size: ${RFValue(20, 640)}px;
    color: #C4C4C4;
    margin: 0 ${RFValue(11, 640)}px; 
`
export const ComunityInputIcon = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(20, 640)}px;
    color: #C4C4C4;
    margin: 0 ${RFValue(11, 640)}px; 
`
export const LoginButtonView = styled.View`
    align-items: center;
`
export const LoginButton = styled.TouchableOpacity`
    width: ${RFValue(156, 640)}px;
    height: ${RFValue(39, 640)}px;
    border-radius: ${RFValue(5, 640)}px;
    background-color: ${({ theme }) => theme.colors.secondary_dark};
    align-items: center;
    justify-content: center;
`

export const LoginButtonText = styled.Text`
    color: white;
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(12, 640)}px;
`