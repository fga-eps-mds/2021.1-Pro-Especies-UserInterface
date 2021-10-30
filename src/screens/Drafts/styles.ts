import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
export const DraftsContainer = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    margin-top: ${RFValue(28, 640)}px;
`