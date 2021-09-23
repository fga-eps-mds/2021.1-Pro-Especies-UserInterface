import React, { useState } from "react";
import { CityStateView, ComunityInputIcon, Container, HalfInputView, Input, InputContainer, InputView, MaterialInputIcon, RegisterButton, RegisterButtonText, RegisterButtonView, TitleContainer, TitleText } from "./styles";
import { TopBar } from "../../components/TopBar";
import { TouchableOpacity } from "react-native-gesture-handler";

export function Register() {
    const [admin, setAdmin] = useState(false);

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
                    <Input placeholder="Nome" />
                </InputView>
                <InputView>
                    <MaterialInputIcon name="mail-outline"/>
                    <Input placeholder="Email" />
                </InputView>
                <InputView>
                    <ComunityInputIcon name="phone-outline"/>
                    <Input placeholder="Telefone" />
                </InputView>
                <CityStateView>
                    <HalfInputView>
                        <ComunityInputIcon name="compass-outline"/>
                        <Input placeholder="Estado" />
                    </HalfInputView>
                    <HalfInputView>
                        <ComunityInputIcon name="city"/>
                        <Input placeholder="Cidade" />
                    </HalfInputView>
                </CityStateView>
                <InputView>
                    <MaterialInputIcon name="lock-outline"/>
                    <Input placeholder="Senha" />
                </InputView>
                <InputView>
                    <MaterialInputIcon name="lock-outline"/>
                    <Input placeholder="Confirmar Senha" />
                </InputView>
                {
                    admin ? (
                        <InputView>
                            <ComunityInputIcon name="key-outline"/>
                            <Input placeholder="Código de Pesquisador" />
                        </InputView>
                    ) : null
                }
                <RegisterButtonView>
                    <RegisterButton onPress={()=>{}}>
                        <RegisterButtonText>Cadastrar</RegisterButtonText>
                    </RegisterButton>
                </RegisterButtonView>
            </InputContainer>

        </Container>
    )
}