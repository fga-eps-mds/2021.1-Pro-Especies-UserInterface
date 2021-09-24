import React from "react";
import { TopBar } from "../../components/TopBar";
import { Container, FishProfile } from "./styles";

export function WikiFish(){
    return (
        <Container>
            <TopBar title="Informações"/>
            <FishProfile source={require('../../assets/Acestrorhynchus.png')} />
        </Container>
    )
}