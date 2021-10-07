import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const FishContainer = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`

export const FishDescription = styled.View`
    align-self: center;
`

export const PropertyContainer = styled.View`
    margin-bottom: ${RFValue(8,640)}px;
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