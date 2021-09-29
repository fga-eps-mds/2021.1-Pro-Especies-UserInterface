import React, { useState } from "react";
import { CityStateView,
    InputScroll,
    ComunityInputIcon,
    Container,
    ErrorMessage,
    HalfInputView,
    Input,
    InputBox,
    InputContainer,
    InputMask,
    InputView,
    MaterialInputIcon,
    LoginButton,
    LoginButtonText,
    LoginButtonView,
    TitleContainer,
    TitleHighlight,
    TitleText,
    TouchableTitle,
    HomeLogoContainer,
    HomeAppImage,
    HomeAppTitle,
    HomeAppTitleBlue,
} from "./styles";
import { CreateUser } from "../../services/userServices/createUser";
import { Alert } from "react-native";



export function Login() {
    const [userEmailPhone, setUserEmailPhone] = useState<string|undefined>();
    const [isEmailPhoneValid, setIsEmailPhoneValid] = useState(true);
    const [isEmailPhoneValidMessage, setIsEmailPhoneValidMessage] = useState("");
    const [userPhone, setUserPhone] = useState<string|undefined>();
    const [userPassword, setUserPassword] = useState<string|undefined>();
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isPasswordValidMessage, setIsPasswordValidMessage] = useState("");
    const [userConfirmPassword, setUserConfirmPassword] = useState<string|undefined>();

    const validatePassword = (password: string) => {
        if(userPassword !== password){
            setIsPasswordValidMessage("Digite a mesma senha!");
            setIsPasswordValid(false);
        } else {
            setIsPasswordValid(true);
        }
    }

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

    const handlePassword = (password: string) => {
        setUserConfirmPassword(password);
        validatePassword(password);
    }

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
            <InputScroll>
                <InputContainer>
                    <InputView>
                        <Input placeholder="E-mail / Telefone" value={ '' } onChangeText={()=>{}} />
                    </InputView>
                        {/* {
                            LoginSuccesful ? null : <ErrorMessage>{LoginErrorMessage}</ErrorMessage>
                        } */}
                    <InputBox/>
                    
                    <InputView>
                        <MaterialInputIcon name="lock-outline"/>
                        <Input placeholder="Senha" secureTextEntry={true} value={userPassword} onChangeText={setUserPassword} />
                    </InputView>
                    <InputBox/>
                    <InputBox/>
                    <LoginButtonView>
                        <LoginButton>
                            <LoginButtonText>Entrar</LoginButtonText>
                        </LoginButton>
                    </LoginButtonView>
                </InputContainer>
            </InputScroll>
        </Container>
    )
}