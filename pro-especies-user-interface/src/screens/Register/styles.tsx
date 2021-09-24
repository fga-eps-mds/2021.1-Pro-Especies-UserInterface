import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
`
export const TitleContainer = styled.View`
    margin-top: ${RFValue(50)}px;
    margin-bottom: ${RFValue(20)}px;
    flex-direction: row;
    align-items: center;
`

export const TitleText = styled.Text<{admin: boolean}>`
    font-family: ${({ theme }) => (p => p.admin ? theme.fonts.regular : theme.fonts.bold)};
    font-size: ${RFValue(12)}px;
    margin-right: ${RFValue(16)}px;
`

export const InputContainer = styled.ScrollView`
    flex: 1;
`
export const InputView = styled.View`
    align-items: center;
    height: ${RFValue(39)}px;
    width: ${RFValue(258)}px;
    flex-direction: row;
    margin-bottom: ${RFValue(32)}px;
    border:  ${RFValue(1)}px;
    border-radius: ${RFValue(5)}px;
`

export const Input = styled.TextInput`
    height: ${RFValue(39)}px;
    width: ${RFValue(258)}px;
    flex-direction: row;
    justify-content: flex-start;    
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
`
export const CityStateView = styled.View`
    align-items: center;
    justify-content: space-between;
    height: ${RFValue(39)}px;
    width: ${RFValue(258)}px;
    flex-direction: row;
    margin-bottom: ${RFValue(32)}px;
`

export const HalfInputView = styled.View`
    align-items: center;
    height: ${RFValue(39)}px;
    width: ${RFValue(121)}px;
    flex-direction: row;
    border:  ${RFValue(1)}px;
    border-radius: ${RFValue(5)}px;
`
    
export const MaterialInputIcon = styled(MaterialIcons)`
    font-size: ${RFValue(20)}px;
    color: #C4C4C4;
    margin: 0 ${RFValue(11)}px; 
`
export const ComunityInputIcon = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(20)}px;
    color: #C4C4C4;
    margin: 0 ${RFValue(11)}px; 
`
export const RegisterButtonView = styled.View`
    align-items: center;
`
export const RegisterButton = styled.TouchableOpacity`
    width: ${RFValue(156)}px;
    height: ${RFValue(39)}px;
    border-radius: ${RFValue(5)}px;
    background-color: ${({ theme }) => theme.colors.secondary_dark};
    align-items: center;
    justify-content: center;
`

export const RegisterButtonText = styled.Text`
    color: white;
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(12)}px;
`