import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Image = styled.Image`
    align-self: center;
    width: ${RFValue(145, 640)}px;
    height: ${RFValue(145, 640)}px;
    margin: ${RFValue(20,640)}px 0;
`