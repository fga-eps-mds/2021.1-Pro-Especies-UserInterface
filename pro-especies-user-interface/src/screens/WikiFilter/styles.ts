import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const PageContainer = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    flex:1;
`

export const FishBodyContainer = styled.View`
    margin: 0px ${RFValue(32,640)}px;
    margin-top: ${RFValue(19,640)}px;
    justify-content: flex-start;
    align-items: flex-start;
`

export const GroupContainer = styled.View`
`

export const BoldText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(12,640)}px;
    line-height: ${RFValue(18,640)}px;
    color: ${({ theme }) => theme.colors.on_background};
    margin: ${RFValue(8, 640)}px 0;
`
export const GroupOptionsContainer = styled.View`
    background-color: rgba(32, 46, 53, 0.05);
    width: ${RFValue(360,640)}px;
    margin-left: ${RFValue(-32,640)}px;
`

export const TextInputContainer = styled.View`
`

export const InputRow = styled.View`
    flex-direction: row;
    align-items: center;
`

export const CheckBoxRow = styled(InputRow)`
    margin-left: ${RFValue(32,640)}px;
`

export const InputView = styled.View`
    align-self: center;
    align-items: center;
    height: ${RFValue(32, 640)}px;
    width: ${RFValue(76.8, 640)}px;
    flex-direction: row;
    border:  ${RFValue(1, 640)}px;
    border-radius: ${RFValue(5, 640)}px;
    margin-right: ${RFValue(32, 640)}px;
    margin-top: ${RFValue(-3, 640)}px;
`

export const Input = styled.TextInput`
    height: ${RFValue(32, 640)}px;
    width: ${RFValue(76.8, 640)}px;
    flex-direction: row;
    justify-content: flex-start;    
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12, 640)}px;
    margin: 0 ${RFValue(11, 640)}px;
`

export const SwitchContainer = styled.View`
    flex-direction: row;
    margin-bottom: ${RFValue(24, 640)}px;
    margin-top: ${RFValue(8, 640)}px;
`

export const SwitchColumn = styled.View`
`

export const Switch = styled.Switch`
    margin-bottom: ${RFValue(8, 640)}px;
    margin-top: ${RFValue(7, 640)}px;
    margin-left: ${RFValue(50, 640)}px;
`
