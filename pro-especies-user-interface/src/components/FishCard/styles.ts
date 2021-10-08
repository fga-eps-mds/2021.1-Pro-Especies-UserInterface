import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const FishCardContaner = styled.View`
    align-items: flex-start;
    width: ${RFValue(156,640)}px;
    height: ${RFValue(156,640)}px;
    elevation: 8;
    border-radius: ${RFValue(16,640)}px;
    background-color: ${({ theme }) => theme.colors.background};
`

export const FishImage = styled.Image`
    width: ${RFValue(156,640)}px;
    height: ${RFValue(100,640)}px;
    border-top-left-radius: ${RFValue(16,640)}px;
    border-top-right-radius: ${RFValue(16,640)}px; 
`

export const CommonNameText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(15,640)}px;
    line-height: 16px;
    color: ${({ theme }) => theme.colors.on_background};
    margin-left: ${RFValue(16,640)}px;
`

export const ScientificName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12,640)}px;
    line-height: 13px;
    opacity: 0.3;
    color: ${({ theme }) => theme.colors.on_background};
    margin-left: ${RFValue(16,640)}px;
`