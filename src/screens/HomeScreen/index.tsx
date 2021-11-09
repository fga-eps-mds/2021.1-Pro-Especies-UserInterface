import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
  HomeLogLink,
} from './styles';
import { useAuth } from '../../contexts/authContext';

export default function Home({ navigation }: any) {
  const { authenticated } = useAuth();
  useEffect(() => {
    if (authenticated) {
      navigation.navigate('WikiFishlogs', {
        wikiFilterQuery: null,
      });
    }
  }, [authenticated]);
  return (
    <HomeContainer>
      <HomeLogoContainer>
        <HomeAppImage source={require('../../assets/logo.png')} />
        <HomeAppTitle>
          Eu<HomeAppTitleBlue>Pescador</HomeAppTitleBlue>
        </HomeAppTitle>
      </HomeLogoContainer>

      <HomeWelcomeText>
        Descubra os peixes da sua região e colabore com seus registros.
      </HomeWelcomeText>

      <HomeWikiButton onPress={() => navigation.navigate('WikiFishlogs', {
        wikiFilterQuery: null,
      })}>
        <HomeWikiText>Visualizar Biblioteca de Peixes</HomeWikiText>
      </HomeWikiButton>

      <HomeLinksContainer>
        <HomePhraseContainer>
          <HomeRegularText>Não possui uma conta ainda?</HomeRegularText>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <HomeLogLink> Cadastre-se</HomeLogLink>
          </TouchableOpacity>
        </HomePhraseContainer>

        <HomePhraseContainer>
          <HomeRegularText>Já possui uma conta?</HomeRegularText>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <HomeLogLink> Entre</HomeLogLink>
          </TouchableOpacity>
        </HomePhraseContainer>
      </HomeLinksContainer>
    </HomeContainer>
  );
}
