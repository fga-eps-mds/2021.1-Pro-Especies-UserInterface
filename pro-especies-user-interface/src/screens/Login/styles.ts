import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background};
`

export const HomeLogoContainer = styled.View`
    align-items: center;
    justify-content: center;
    margin-bottom: ${RFValue(64, 640)}px;
`
export const HomeAppImage = styled.Image`
    width: ${RFValue(184,640)}px;
    height: ${RFValue(150,640)}px;
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

export const InputContainer = styled.View`
    align-self: center;
    text-align: left;
`

export const InputView = styled.View`
    align-self: center;
    align-items: center;
    height: ${RFValue(39, 640)}px;
    width: ${RFValue(258, 640)}px;
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
    margin: 0 ${RFValue(11, 640)}px;
`

export const ErrorMessage = styled.Text`
    color: ${({ theme }) => theme.colors.on_error};
    font-size: ${RFValue(12, 640)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    margin: ${RFValue(2, 640)}px 0 ${RFValue(8, 640)}px ${RFValue(7, 640)}px;
`

export const LoginButtonView = styled.View`
    align-items: center;
    margin: ${RFValue(32, 640)}px 0;
`

export const HomePhraseContainer = styled.View`
    flex-direction: row;
    margin: ${RFValue(4,640)}px 0px;
`
export const HomeRegularText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(10.5,640)}px;
    line-height: ${RFValue(18,640)}px;
    color: ${({ theme }) => theme.colors.on_background};
`
export const HomeLogLink = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(10.5, 640)}px;
    line-height: ${RFValue(18,640)}px;
    color: ${ ({ theme }) => theme.colors.on_background }; 
`