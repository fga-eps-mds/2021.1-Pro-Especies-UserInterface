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
import { CreateUser } from "../../services/userServices/createUser";
import { Alert, TouchableOpacity } from "react-native";



export function Login({navigation}: any) {
    const [userEmailPhone, setUserEmailPhone] = useState<string | undefined>();
    const [isEmailPhoneValid, setIsEmailPhoneValid] = useState(true);
    const [isEmailPhoneValidMessage, setIsEmailPhoneValidMessage] = useState("Erro");
    const [userPhone, setUserPhone] = useState<string | undefined>();
    const [userPassword, setUserPassword] = useState<string | undefined>();

    // const handleLogin = async () => {
    //     let alertMessage = "";
    //     if(userName && userEmail && userPhone && userState && userCity && userPassword && userConfirmPassword){
    //         if(isEmailValid && isPasswordValid && isPhoneValid){
    //             try {
    //                 await CreateUser(userName, userEmail, userPhone, userState, userCity, userPassword, admin, adminToken);
    //                 alertMessage = "Conta criada com sucesso!";
    //             } catch (error: any) {
    //                 alertMessage = error.response.data.message;
    //             }
    //         } else {
    //             alertMessage = "Preencha todos os dados corretamente!";
    //         }
    //     } else {
    //         alertMessage = "Preencha todos os campos de dados para realizar o cadastro!";
    //     }
    //     Alert.alert(
    //         "Cadastro",
    //         alertMessage,
    //         [
    //             {
    //                 text: "Ok",
    //             }
    //         ]
    //     )
    // }

    const handlePhone = (phone: string) => {
        setUserPhone(phone);
    }

    return (
        <Container>
            <HomeLogoContainer>
                <HomeAppImage source={require('../../assets/logo.png')} />
                <HomeAppTitle>
                    Eu<HomeAppTitleBlue>Pescador</HomeAppTitleBlue>
                </HomeAppTitle>
            </HomeLogoContainer>
            <InputBox />
            <InputBox />
            <InputContainer>
                <InputView>
                    <Input placeholder="E-mail / Telefone" value={''} onChangeText={() => { }} />
                </InputView>
                    {
                        isEmailPhoneValid ? <InputBox /> : <ErrorMessage>{isEmailPhoneValidMessage}</ErrorMessage>
                    }

                <InputView>
                    <Input placeholder="Senha" secureTextEntry={true} value={userPassword} onChangeText={setUserPassword} />
                </InputView>
                <InputBox />
                <LoginButtonView>
                    <LoginButton>
                        <LoginButtonText>Entrar</LoginButtonText>
                    </LoginButton>
                </LoginButtonView>
                <InputBox />
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