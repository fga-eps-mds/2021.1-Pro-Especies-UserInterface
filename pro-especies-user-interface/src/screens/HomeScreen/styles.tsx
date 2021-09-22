import styled from "styled-components/native";

export const HomeContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 70px;
`
export const HomeLogoContainer = styled.View`

`
export const HomeAppImage = styled.Image`

`
export const HomeAppTitle = styled.Text`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.on_background};
`
export const HomeAppTitleBlue = styled(HomeAppTitle)`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
`
export const HomeWelcomeText = styled.Text`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 36px;
    color: ${({ theme }) => theme.colors.on_background};

    margin: 54px 0px;
`
export const HomeWikiButton = styled.Button`
    background-color: ${({ theme }) => theme.colors.on_secondary_dark};
`
export const HomeLinksContainer = styled.View`
    marginTop: 16px;
`
export const HomeRegularText = styled.Text`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.on_background};
`
export const HomeLogLink = styled(HomeRegularText)`
    font-weight: bold;
`