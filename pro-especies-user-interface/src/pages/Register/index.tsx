import React from "react";
import { Container } from "./styles";
import { TopBar } from "../../components/TopBar";
import { RegisterInput } from "../../components/RegisterInput";

export function Register() {
    return (
        <Container>
            <TopBar title="Cadastro" />
            <RegisterInput icon="person-outline" placeholder="Nome" />

        </Container>
    )
}