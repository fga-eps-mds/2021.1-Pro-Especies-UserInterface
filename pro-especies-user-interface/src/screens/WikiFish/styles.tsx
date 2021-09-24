import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
`

export const FishProfile = styled.Image`
    margin-top: ${RFValue(52,640)}px;
    border-radius: ${RFValue(88,640)}px;
    height: &{RFValue(156)}px;
`