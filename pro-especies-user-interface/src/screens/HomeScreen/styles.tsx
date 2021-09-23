import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const HomeContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 70px;
`
export const HomeLogoContainer = styled.View`
    align-items: center;
    justify-content: center;
`
export const HomeAppImage = styled.Image`
    margin-bottom: 16px;
`
export const HomeAppTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: RFValue(15,640);
    line-height: 22px;
    color: ${({ theme }) => theme.colors.on_background};
`
export const HomeAppTitleBlue = styled(HomeAppTitle)`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
`
export const HomeWelcomeText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: RFValue(28,640);
    line-height: 36px;
    color: ${({ theme }) => theme.colors.on_background};

    margin: 54px 0px;
`
export const HomeWikiButton = styled.TouchableOpacity`
    width: 204px;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.secondary_dark};
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    border-radius: 5px;
    font-family: ${({ theme }) => theme.fonts.bold};
    line-height: 18px;
    font-size: RFValue(12,640);
    color: ${({ theme }) => theme.colors.background};

`

export const HomeLinksContainer = styled.View`
    margin-top: 16px;
`
export const HomeRegularText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: RFValue(12,640);
    line-height: 18px;
    color: ${({ theme }) => theme.colors.on_background};
`
export const HomeLogLink = styled.TouchableOpacity`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: RFValue(12, 640);
    line-height: 18px;
    color: ${ ({ theme }) => theme.colors.on_background }; 
    `