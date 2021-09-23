import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const HomeContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 51px;
`
export const HomeLogoContainer = styled.View`
    align-items: center;
    justify-content: center;
`
export const HomeAppImage = styled.Image`
    width: ${RFValue(130,640)};
    height: ${RFValue(106,640)};
    margin-bottom: 16px;
`
export const HomeAppTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(15,640)};
    line-height: 22px;
    color: ${({ theme }) => theme.colors.on_background};
`
export const HomeAppTitleBlue = styled(HomeAppTitle)`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
`
export const HomeWelcomeText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(22,640)};
    line-height: 36px;
    color: ${({ theme }) => theme.colors.on_background};

    margin: ${RFValue(54,640)}px 0px;
`
export const HomeWikiButton = styled.TouchableOpacity`
    width: 275px;
    height: 70px
    background-color: ${({ theme }) => theme.colors.secondary_dark};
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    border-radius: 5px;
    
    align-items: center;
    justify-content: center;
`
export const HomeWikiText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    line-height: 18px;
    font-size: ${RFValue(10.5,640)};
    color: ${({ theme }) => theme.colors.background};
    margin: 16px 0px;
`
export const HomeLinksContainer = styled.View`
    margin-top: 20px;
`
export const HomePhraseContainer = styled.View`
    flex-direction: row;
    margin: 8px 0px;
`
export const HomeRegularText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(10.5,640)};
    line-height: 18px;
    color: ${({ theme }) => theme.colors.on_background};
`
export const HomeLogLink = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(10.5, 640)};
    line-height: 18px;
    color: ${ ({ theme }) => theme.colors.on_background }; 
    `