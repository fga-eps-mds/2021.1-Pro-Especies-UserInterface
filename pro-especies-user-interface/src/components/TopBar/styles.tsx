import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Box = styled.View`
    height: ${RFValue(57)}px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
`