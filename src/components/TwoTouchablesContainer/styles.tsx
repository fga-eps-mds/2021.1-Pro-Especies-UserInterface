import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`

export const TitleContainer = styled.View`
    margin-left: ${RFValue(20, 640)}px;
    margin-top: ${RFValue(32, 640)}px;
    margin-bottom: ${RFValue(20, 640)}px;
    flex-direction: row;
`

export const TouchableTitle = styled.TouchableOpacity`
text-align: center;
`

export const TitleHighlight = styled.View`
    height: ${RFValue(1, 640)}px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
`

export const TitleText = styled.Text<{stateDefault: boolean}>`
    font-family: ${({ theme }) => (p => p.stateDefault ? theme.fonts.regular : theme.fonts.bold)};
    font-size: ${RFValue(12, 640)}px;
    margin-right: ${RFValue(16, 640)}px;
`