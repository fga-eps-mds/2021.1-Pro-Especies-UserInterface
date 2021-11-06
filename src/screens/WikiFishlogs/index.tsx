import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { TopBar } from '../../components/TopBar';
import { Wiki } from '../../components/Wiki';
import { FishLogs } from '../../components/FishLogs';
import {
  PageContainer,
  TitleContainer,
  TouchableTitle,
  TitleText,
  TitleHighlight,
} from './styles';
import { useAuth } from '../../contexts/authContext';

export const WikiFishlogs = ({ navigation, route }: any) => {

  const [token, setToken] = useState('');
  const [wiki, setWiki] = useState(true);
  const [isLogged, setIsLogged] = useState<boolean>();
  const [isAdmin, setIsAdmin] = useState<Boolean>();
  const { signOut } = useAuth();

  const getData = async () => {
    const userAdmin = await AsyncStorage.getItem("@eupescador/userAdmin");
    const token = await AsyncStorage.getItem('@eupescador/token');
    console.log(token);
    if (token) {
      setToken(token);
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
    if (userAdmin === "true")
      setIsAdmin(true);
    else
      setIsAdmin(false);

  };

  const handleSignOut = () => {
    Alert.alert('Sair da conta', 'Tem certeza que deseja sair da conta?', [
      {
        text: 'Não',
        onPress: () => { },
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => {
          signOut();
          const resetAction = CommonActions.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          });
          navigation.dispatch(resetAction);
        },
      },
    ]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <PageContainer>
      <TopBar
        title={wiki ? 'Biblioteca' : 'Registros'}
        icon={isLogged ? 'logout' : 'login'}
        iconText={isLogged ? 'Sair' : 'Entrar'}
        buttonFunction={
          isLogged
            ? () => {
              handleSignOut();
            }
            : () => navigation.navigate('Login')
        }
      />
      {isLogged ? (
        <TitleContainer>
          <TouchableTitle
            onPress={() => {
              setWiki(true);
            }}
          >
            <TitleText wiki={wiki}>Biblioteca de Peixes</TitleText>
            {wiki ? <TitleHighlight /> : null}
          </TouchableTitle>
          <TouchableTitle
            onPress={() => {
              setWiki(false);
            }}
          >
            <TitleText wiki={!wiki}>Registros</TitleText>
            {wiki ? null : <TitleHighlight />}
          </TouchableTitle>
        </TitleContainer>
      ) : null}
      {wiki ?
        (<Wiki
          navigation={navigation}
          filterQuery={route.params ? route.params.filterQuery : null}
        />) :
        (<FishLogs token={token} isAdmin={isAdmin} />)}
    </PageContainer>
  );
};
