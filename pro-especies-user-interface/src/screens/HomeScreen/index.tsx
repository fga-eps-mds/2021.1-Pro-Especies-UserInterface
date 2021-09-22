import React from "react";
import {
    HomeContainer,
    HomeLogoContainer,
    HomeAppImage,
    HomeAppTitle,
    HomeAppTitleBlue,
    HomeWelcomeText,
    HomeWikiButton,
    HomeLinksContainer,
    HomeRegularText,
    HomeLogLink
} from "./styles";
// import logo from '../../assets/logo.svg';

export function Home() {
    return (
        <HomeContainer>
            <HomeLogoContainer>
                {/* <HomeAppImage source={logo}/> */}
                <HomeAppTitle>
                    Pró-Espécies <HomeAppTitleBlue>Peixes</HomeAppTitleBlue>
                </HomeAppTitle>
            </HomeLogoContainer>

            <HomeWelcomeText>
                Descubra os peixes da sua região e colabore com seus registros.
            </HomeWelcomeText>

            {/* <HomeWikiButton>
                Visualizar Biblioteca de Peixes
            </HomeWikiButton> */}

            <HomeLinksContainer>
                <HomeRegularText>
                    Não possui uma conta ainda? <HomeLogLink>Registre-se</HomeLogLink>
                </HomeRegularText>
                <HomeRegularText>
                    Já possui uma conta? <HomeLogLink>Entre</HomeLogLink>
                </HomeRegularText>
            </HomeLinksContainer>
        </HomeContainer>
    )
}