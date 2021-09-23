import React from "react";
import { Text } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import {
    HomeContainer,
    HomeLogoContainer,
    HomeAppImage,
    HomeAppTitle,
    HomeAppTitleBlue,
    HomeWelcomeText,
    HomeWikiText,
    HomeWikiButton,
    HomeLinksContainer,
    HomePhraseContainer,
    HomeRegularText,
    HomeLogLink
} from "./styles";


export function Home() {
    return (
        <HomeContainer>
            <HomeLogoContainer>
                <HomeAppImage source={require('../../assets/logo.png')} />
                <HomeAppTitle>
                    Pró-Espécies <HomeAppTitleBlue>Peixes</HomeAppTitleBlue>
                </HomeAppTitle>
            </HomeLogoContainer>

            <HomeWelcomeText>
                Descubra os peixes da sua região e colabore com seus registros.
            </HomeWelcomeText>

            <HomeWikiButton onPress={() => { }}>
                <HomeWikiText>Visualizar Biblioteca de Peixes</HomeWikiText>
            </HomeWikiButton>

            <HomeLinksContainer>
                <HomePhraseContainer>
                    <HomeRegularText>
                        Não possui uma conta ainda?
                    </HomeRegularText>
                    <TouchableOpacity onPress={() => { }}>
                        <HomeLogLink> Cadastre-se</HomeLogLink>
                    </TouchableOpacity>
                </HomePhraseContainer>

                <HomePhraseContainer>
                    <HomeRegularText>
                        Já possui uma conta?
                    </HomeRegularText>
                    <TouchableOpacity onPress={() => { }}>
                        <HomeLogLink> Entre</HomeLogLink>
                    </TouchableOpacity>
                </HomePhraseContainer>
            </HomeLinksContainer>
        </HomeContainer>
    )
}