import React, { useState } from "react";
import { CityStateView, ComunityInputIcon, Container, HalfInputView, Input, InputContainer, InputView, MaterialInputIcon, RegisterButton, RegisterButtonText, RegisterButtonView, TitleContainer, TitleText } from "./styles";
import { TopBar } from "../../components/TopBar";
import { TouchableOpacity } from "react-native-gesture-handler";
import { api } from '../../services/userServices/api';

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

    const handleRegister = () => {
        console.log(userName);
        console.log(userEmail);
        console.log(userPhone);
        console.log(userState);
        console.log(userCity);
        console.log(userPassword);
        console.log(userConfirmPassword);
        console.log(adminToken);
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
                    <Input placeholder="Senha" value={userPassword} onChangeText={setUserPassword} />
                </InputView>
                <InputView>
                    <MaterialInputIcon name="lock-outline"/>
                    <Input placeholder="Confirmar Senha" value={userConfirmPassword} onChangeText={setUserConfirmPassword} />
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