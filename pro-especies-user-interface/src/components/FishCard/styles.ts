import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const FishCardContaner = styled.View`
    align-items: center;
    width: ${RFValue(156,640)}px;
    height: ${RFValue(156,640)}px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    justify-content: center;
    border-radius: ${RFValue(16,640)}px;
    background-color: ${({ theme }) => theme.colors.on_background};
`