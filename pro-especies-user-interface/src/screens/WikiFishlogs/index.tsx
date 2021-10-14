import React, { useState, useEffect } from "react";
import { TopBar } from "../../components/TopBar";
import { Wiki } from "../../components/Wiki";
import { FishLogs } from "../../components/FishLogs";
import {
    PageContainer,
    TitleContainer,
    TouchableTitle,
    TitleText,
    TitleHighlight,
} from "./styles";
import { useAuth } from "../../contexts/authContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";



export const WikiFishlogs = ({navigation}: any) => {
    const [token, setToken] = useState("");
    const [wiki, setWiki] = useState(true);
    const [isLogged, setIsLogged] = useState<Boolean>();
    const { signOut } = useAuth();

    const getData = async () => {
        const token = await AsyncStorage.getItem("@eupescador/token");
        const userAdmin = await AsyncStorage.getItem("@eupescador/userAdmin");
        if(token) {
            setToken(token);
            setIsLogged(true);
        } else {
            setIsLogged(false);
        }
        
    }

    const handleSignOut = () => {
        Alert.alert(
            "Sair da conta",
            "Tem certeza que deseja sair da conta?",
            [
                {
                    text: "Não",
                    onPress: () => {},
                    style: "cancel",
                },
                {
                    text: "Sim",
                    onPress: () => {
                        signOut();
                        navigation.navigate('Home');
                    }
                }
            ]
        )
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <PageContainer>
            <TopBar 
            title={ wiki ? 'Biblioteca' : 'Registros'} 
            icon={ isLogged ? 'logout' : 'login'} 
            iconText={ isLogged ? 'Sair' : 'Entrar'}
            buttonFunction={ isLogged ? ()=>{handleSignOut()} : () => navigation.navigate('Login')}
            />
            {
                isLogged ?
                <TitleContainer>
                    <TouchableTitle onPress={() => { setWiki(true) }}>
                        <TitleText wiki={wiki}>Biblioteca de Peixes</TitleText>
                        {
                            wiki ? <TitleHighlight /> : null
                        }
                    </TouchableTitle>
                    <TouchableTitle onPress={() => { setWiki(false) }}>
                        <TitleText wiki={!wiki}>Registros</TitleText>
                        {
                            wiki ? null : <TitleHighlight />
                        }
                    </TouchableTitle>
                </TitleContainer> : null
            }
            {
                wiki ? <Wiki /> : <FishLogs token={token} />
            }
        </PageContainer>
    )
}