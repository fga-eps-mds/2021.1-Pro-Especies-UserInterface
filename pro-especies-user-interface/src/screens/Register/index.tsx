import React, { useState } from "react";
import { TextInputMask } from "react-native-masked-text";
import { CityStateView, ComunityInputIcon, Container, HalfInputView, Input, InputContainer, InputView, MaterialInputIcon, RegisterButton, RegisterButtonText, RegisterButtonView, TitleContainer, TitleText } from "./styles";
import { TopBar } from "../../components/TopBar";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CreateUser } from "../../services/userServices/createUser";
import { Alert } from "react-native";
import { AxiosError } from "axios";

export function Register() {
    const [admin, setAdmin] = useState(false);
    const [userName, setUserName] = useState<string|undefined>();
    const [userEmail, setUserEmail] = useState<string|undefined>();
    const [userPhone, setUserPhone] = useState<string|undefined>();
    const [userState, setUserState] = useState<string|undefined>();
    const [userCity, setUserCity] = useState<string|undefined>();
    const [userPassword, setUserPassword] = useState<string|undefined>();
    const [userConfirmPassword, setUserConfirmPassword] = useState<string|undefined>();
    const [adminToken, setAdminToken] = useState<string|undefined>();
    let alertMessage = "";

    const validateEmail = () => {
        if(userEmail){
            const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            
            if (userEmail.length > 254) {
                alertMessage = "Email muito extenso!";
                return false;
            }
    
            const valid = emailRegex.test(userEmail);
            if (!valid) {
                alertMessage = "Formato de email inválido!"
                return false;
            }
    
            const parts = userEmail.split("@");
            if (parts[0].length > 64) {
                alertMessage = "Email muito extenso!";
                return false;
            }
            return true;
        }
    }

    const validatePassword = () => {
        if(userPassword !== userConfirmPassword){
            alertMessage = "Digite a mesma senha!";
            return false;
        }
        return true;
    }

    const handleRegister = async () => {
        if(userName && userEmail && userPhone && userState && userCity && userPassword && userConfirmPassword){
            const emailValid = validateEmail();
            const passwordValid = validatePassword();
            if(emailValid && passwordValid){
                try {
                    await CreateUser(userName, userEmail, userPhone, userState, userCity, userPassword, admin, adminToken);
                    alertMessage = "Conta criada com sucesso!";
                } catch (error: any) {
                    alertMessage = error.response.data.message;
                }
            }
        } else {
            alertMessage = "Preencha todos os campos de dados para realizar o cadastro!";
        }
        Alert.alert(
            "Cadastro",
            alertMessage,
            [
                {
                    text: "Ok",
                }
            ]
        )
    }
    return (
        <Container>
            <TopBar title="Cadastro" />
            <TitleContainer>
                <TouchableOpacity onPress={()=> {setAdmin(!admin)}}>
                    <TitleText admin={admin}>Usuário</TitleText>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {setAdmin(!admin)}}>
                    <TitleText admin={!admin}>Pesquisador</TitleText>
                </TouchableOpacity>
            </TitleContainer>
            <InputContainer>
                <InputView>
                    <MaterialInputIcon name="person-outline"/>
                    <Input placeholder="Nome" value={userName} onChangeText={setUserName} />
                </InputView>
                <InputView>
                    <MaterialInputIcon name="mail-outline"/>
                    <Input placeholder="Email" value={userEmail} onChangeText={setUserEmail} />
                </InputView>
                <InputView>
                    <ComunityInputIcon name="phone-outline"/>
                    <Input placeholder="Telefone" value={userPhone} onChangeText={setUserPhone} />
                </InputView>
                <CityStateView>
                    <HalfInputView>
                        <ComunityInputIcon name="compass-outline"/>
                        <Input placeholder="Estado" value={userState} onChangeText={setUserState} />
                    </HalfInputView>
                    <HalfInputView>
                        <ComunityInputIcon name="city"/>
                        <Input placeholder="Cidade" value={userCity} onChangeText={setUserCity} />
                    </HalfInputView>
                </CityStateView>
                <InputView>
                    <MaterialInputIcon name="lock-outline"/>
                    <Input placeholder="Senha" secureTextEntry={true} value={userPassword} onChangeText={setUserPassword} />
                </InputView>
                <InputView>
                    <MaterialInputIcon name="lock-outline"/>
                    <Input placeholder="Confirmar Senha" secureTextEntry={true} value={userConfirmPassword} onChangeText={setUserConfirmPassword} />
                </InputView>
                {
                    admin ? (
                        <InputView>
                            <ComunityInputIcon name="key-outline"/>
                            <Input placeholder="Código de Pesquisador" value={adminToken} onChangeText={setAdminToken} />
                        </InputView>
                    ) : null
                }
                <RegisterButtonView>
                    <RegisterButton onPress={handleRegister}>
                        <RegisterButtonText>Cadastrar</RegisterButtonText>
                    </RegisterButton>
                </RegisterButtonView>
            </InputContainer>

        </Container>
    )
}