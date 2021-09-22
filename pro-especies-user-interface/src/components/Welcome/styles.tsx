import styled from "styled-components/native";

export const WelcomeCard = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background};
`
export const WelcomeText = styled.Text`
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.on_background};
`