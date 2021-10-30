import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const DraftButtonTouchable = styled.TouchableOpacity`
    width: ${RFValue(120, 640)}px;
    height: ${RFValue(36, 640)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
    padding: 8px 4px;
    flex-direction: row;
    justify-content: center;
    margin-bottom: ${RFValue(8, 640)}px;
`

export const DraftButtonLabel = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.background};
    font-size: ${RFValue(12, 640)}px;
    margin-right: ${RFValue(8, 640)}px;
`

export const DraftButtonCountCircle = styled.View`
    background: rgba(32, 46, 53, 0.3);
    /* align-self: flex-end; */
    width: ${RFValue(20, 640)}px;
    height: ${RFValue(20, 640)}px;
    border-radius: ${RFValue(10, 640)}px;
`

export const DraftButtonCountText = styled.Text`
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.background};
    font-size: ${RFValue(12, 640)}px;
`