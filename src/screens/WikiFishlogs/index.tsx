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
  InstructionButton,
  InstructionButtonIcon,
  TitleButtonsContainer,
} from './styles';
import { useAuth } from '../../contexts/authContext';
import { InstructionModal } from '../../components/InstructionsModal';

export const WikiFishlogs = ({ navigation, route }: any) => {

  const [token, setToken] = useState('');
  const [wiki, setWiki] = useState(true);
  const [isLogged, setIsLogged] = useState<boolean>();
  const [isAdmin, setIsAdmin] = useState<boolean>();
  const [showModal, setShowModal] = useState(false);
  const { signOut } = useAuth();

  const getData = async () => {
    const userAdmin = await AsyncStorage.getItem("@eupescador/userAdmin");
    const token = await AsyncStorage.getItem('@eupescador/token');
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

  const getFirstAcess = async () => {
    const hasAcessTheApp = await AsyncStorage.getItem('hasAcessTheApp');
    if (hasAcessTheApp === 'false') {
      setShowModal(true);
      await AsyncStorage.setItem('hasAcessTheApp', 'true');
    }
  }

  useEffect(() => {
    getData();
    getFirstAcess();
  }, []);

  return (
    <>
      <InstructionModal
        modalVisible={showModal}
        dismissModal={() => setShowModal(false)}
      />
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
            <TitleButtonsContainer>
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
            </TitleButtonsContainer>
            <InstructionButton onPress={() => { setShowModal(true) }}>
              <InstructionButtonIcon name="info" />
            </InstructionButton>
          </TitleContainer>
        ) : null}
        {wiki ?
          (<Wiki
            navigation={navigation}
            filterQuery={route.params ? route.params.filterQuery : null}
          />) :
          (<FishLogs token={token} 
            navigation={navigation}
            filterQuery={route.params ? route.params.filterQuery : null}
          />)
        }
      </PageContainer>
    </>
  );
};
