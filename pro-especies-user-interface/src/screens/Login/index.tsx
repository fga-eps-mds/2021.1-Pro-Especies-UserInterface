import React, { useState } from "react";
import {
    Container,
    ErrorMessage,
    Input,
    InputBox,
    InputContainer,
    InputView,
    LoginButton,
    LoginButtonText,
    LoginButtonView,
    HomeLogoContainer,
    HomeAppImage,
    HomeAppTitle,
    HomeAppTitleBlue,
    HomePhraseContainer,
    HomeRegularText,
    HomeLogLink

} from "./styles";
import { UserLogin } from "../../services/userServices/login";
import { Alert, TouchableOpacity } from "react-native";



export function Login({ navigation }: any) {
    const [userEmailPhone, setUserEmailPhone] = useState<string | undefined>();
    const [isEmailPhoneValid, setIsEmailPhoneValid] = useState(true);
    const [isEmailPhoneValidMessage, setIsEmailPhoneValidMessage] = useState("Usuário não encontrado");
    const [userPassword, setUserPassword] = useState<string | undefined>();

    const handleLogin = async () => {
        let alertMessage = "";
        if (userEmailPhone && userPassword) {
            try {
                setIsEmailPhoneValid(true);
                const response = await UserLogin(userEmailPhone, userPassword);
                navigation.navigate('Wiki');
                alertMessage = "Conta acessada com sucesso!";
            } catch (error: any) {
                if(error.response.status === 404)                                     
                    setIsEmailPhoneValid(false);
                else
                    alertMessage = error.response.data.message;
            }
        } else {
            alertMessage = "Preencha todos os campos de dados para realizar o login!";
        }
        if(alertMessage){
            Alert.alert(
                "Login",
                alertMessage,
                [
                    {
                        text: "Ok",
                    }
                ]
            )
        }
    }

    return (
        <Container>
            <HomeLogoContainer>
                <HomeAppImage source={require('../../assets/logo.png')} />
                <HomeAppTitle>
                    Eu<HomeAppTitleBlue>Pescador</HomeAppTitleBlue>
                </HomeAppTitle>
            </HomeLogoContainer>
            <InputContainer>
                <InputView>
                    <Input placeholder="E-mail / Telefone" value={userEmailPhone} onChangeText={setUserEmailPhone} />
                </InputView>
                {
                    isEmailPhoneValid ? <InputBox /> : <ErrorMessage>{isEmailPhoneValidMessage}</ErrorMessage>
                }

                <InputView>
                    <Input placeholder="Senha" secureTextEntry={true} value={userPassword} onChangeText={setUserPassword} />
                </InputView>
                <LoginButtonView>
                    <LoginButton onPress={handleLogin}>
                        <LoginButtonText>Entrar</LoginButtonText>
                    </LoginButton>
                </LoginButtonView>
                <HomePhraseContainer>
                    <HomeRegularText>
                        Não possui uma conta ainda?
                    </HomeRegularText>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <HomeLogLink> Cadastre-se</HomeLogLink>
                    </TouchableOpacity>
                </HomePhraseContainer>
            </InputContainer>
        </Container>
    )
}