import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const FishContainer = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`

export const FishProfile = styled.Image`
    align-self: center;
    margin-top: ${RFValue(52,640)}px;
    border-radius: ${RFValue(88,640)}px;
    height: ${RFValue(156, 640)}px;
`
export const PropertyValueText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12,640)}px;
    line-height: ${RFValue(18,640)}px;
    color: ${({ theme }) => theme.colors.on_primary};
    margin-top: ${RFValue(4,640)}px;
`

export const FishTitle = styled(PropertyValueText)`
    font-size: ${RFValue(16,640)}px;
`

export const PropertyText = styled(PropertyValueText)`
    opacity: 0.4;
`


export const FishDescription = styled(PropertyValueText)`
    text-align: center;
`

export const PropertyContainer = styled.View`
    margin-bottom: ${RFValue(16,640)}px;
`

export const PropertyColumn = styled.View`

`

export const ColumnContainer = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: ${RFValue(10,640)}px;
    margin-bottom: ${RFValue(16,640)}px;
`

export const DescriptionContainer = styled.View`
    align-items: center;
    margin: ${RFValue(10,640)}px ${RFValue(22,640)}px;
`