import React, { useState } from "react";
import {
    Container,
    ErrorMessage,
    Input,
    InputBox,
    InputContainer,
    InputView,
    LoginButtonView,
    HomeLogoContainer,
    HomeAppImage,
    HomeAppTitle,
    HomeAppTitleBlue,
    HomePhraseContainer,
    HomeRegularText,
    HomeLogLink

} from "./styles";
import { Alert, TouchableOpacity } from "react-native";
import { useAuth } from "../../contexts/authContext";
import { GreenButton } from "../../components/GreenButton";



export default function Login({ navigation }: any) {
    const [userEmailPhone, setUserEmailPhone] = useState<string | undefined>();
    const [isEmailPhoneValid, setIsEmailPhoneValid] = useState(true);
    const [isEmailPhoneValidMessage, setIsEmailPhoneValidMessage] = useState("Usuário não encontrado");
    const [userPassword, setUserPassword] = useState<string | undefined>();
    const { signIn, authenticated } = useAuth();

    const handleLogin = async () => {
        let alertMessage = "";
        if (userEmailPhone && userPassword) {
            setIsEmailPhoneValid(true);
            const res = await signIn(userEmailPhone, userPassword);

            if (res.status === 200){
                navigation.navigate('Wiki');
                alertMessage = "Conta acessada com sucesso!";
            }
            else if (res.response.status === 404)
                setIsEmailPhoneValid(false);
            else
                alertMessage = res.response.data.message;
        } else {
            alertMessage = "Preencha todos os campos de dados para realizar o login!";
        }
        if (alertMessage) {
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
                    <GreenButton text="Entrar" buttonFunction={handleLogin} />
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