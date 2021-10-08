import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const FishCardContaner = styled.View`
    align-items: center;
    width: ${RFValue(156,640)}px;
    height: ${RFValue(156,640)}px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    justify-content: center;
    border-radius: ${RFValue(16,640)}px;
    background-color: ${({ theme }) => theme.colors.primary};
`

export const FishImage = styled.Image`
    width: ${RFValue(156,640)}px;
    height: ${RFValue(117,640)}px;
    border-top-left-radius: ${RFValue(16,640)}px;
    border-top-right-radius: ${RFValue(16,640)}px; 
`

export const CommonNameText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(11,640)}px;
    color: ${({ theme }) => theme.colors.primary};
`