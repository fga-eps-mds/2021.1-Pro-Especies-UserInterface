import React from "react";
import { ScrollView } from "react-native";
import { TopBar } from "../../components/TopBar";
import {
    FishContainer,
    FishProfile,
    FishTitle,
    FishDescription,
    PropertyText,
    PropertyValueText,
    PropertyContainer,
    PropertyColumn,
    ColumnContainer,
    DescriptionContainer,
} from "./styles";

export function WikiFish() {
    return (
        <FishContainer>
            <TopBar title="Informações" />
            <ScrollView>
                <FishProfile source={require('../../assets/Acestrorhynchus.png')} />

                <DescriptionContainer>
                    <FishTitle>Peixe Cachorro Dourado</FishTitle>
                    <PropertyText>Acestrorhynchus falcatus</PropertyText>
                    <FishDescription>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean maximus suscipit nisl in sollicitudin. “
                    </FishDescription>
                </DescriptionContainer>

                <ColumnContainer>
                    <PropertyColumn>
                        <PropertyContainer>
                            <PropertyText>Grande Grupo</PropertyText>
                            <PropertyValueText>Peixe</PropertyValueText>
                        </PropertyContainer>

                        <PropertyContainer>
                            <PropertyText>Família</PropertyText>
                            <PropertyValueText>Peixe</PropertyValueText>
                        </PropertyContainer>

                        <PropertyContainer>
                            <PropertyText>Tamanho Máx(cm)</PropertyText>
                            <PropertyValueText>Peixe</PropertyValueText>
                        </PropertyContainer>

                        <PropertyContainer>
                            <PropertyText>Habitat</PropertyText>
                            <PropertyValueText>Peixe</PropertyValueText>
                        </PropertyContainer>

                        <PropertyContainer>
                            <PropertyText>Ameaçado?</PropertyText>
                            <PropertyValueText>Peixe</PropertyValueText>
                        </PropertyContainer>

                        <PropertyContainer>
                            <PropertyText>Foi indroduzido?</PropertyText>
                            <PropertyValueText>Peixe</PropertyValueText>
                        </PropertyContainer>
                    </PropertyColumn>

                    <PropertyColumn>
                        <PropertyContainer>
                            <PropertyText>Grupo</PropertyText>
                            <PropertyValueText>Peixe</PropertyValueText>
                        </PropertyContainer>

                        <PropertyContainer>
                            <PropertyText>Alimentação</PropertyText>
                            <PropertyValueText>Peixe</PropertyValueText>
                        </PropertyContainer>

                        <PropertyContainer>
                            <PropertyText>Peso Máx(kg)</PropertyText>
                            <PropertyValueText>Peixe</PropertyValueText>
                        </PropertyContainer>

                        <PropertyContainer>
                            <PropertyText>Endemíco?</PropertyText>
                            <PropertyValueText>Peixe</PropertyValueText>
                        </PropertyContainer>

                        <PropertyContainer>
                            <PropertyText>Faz piracema?</PropertyText>
                            <PropertyValueText>Peixe</PropertyValueText>
                        </PropertyContainer>
                    </PropertyColumn>
                </ColumnContainer>
            </ScrollView>
        </FishContainer>
    )
}