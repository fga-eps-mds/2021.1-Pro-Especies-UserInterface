import React, { useState, useEffect } from "react";

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
    const [ fishName , setFishName ] = useState("");
    const [ fishPhoto , setFishPhoto ] = useState("");
    const [ fishSpecies , setFishSpecies ] = useState("");
    const [ fishFunFact , setFishFuNFact ] = useState("");
    const [ fishLargeGroup , setFishLargeGroup ] = useState("");
    const [ fishGroup , setFishGroup ] = useState("");
    const [ fishFamily , setFishFamily ] = useState("");
    const [ fishFeed , setFishFeed ] = useState("");
    const [ fishMaxSize , setFishMaxSize ] = useState("");
    const [ fishMaxWeight , setFishMaxWeight ] = useState("");
    const [ fishHabitat , setFishHabitat ] = useState("");
    const [ fishIsEndemic , setFishIsEndemic ] = useState(false);
    const [ fishIsThreatened , setFishIsThreatened ] = useState(false);
    const [ fishWasIntroduced , setFishWasIntroduced ] = useState(false);
    const [ fishHasSpawningSeason , setFishHasSpawningSeason ] = useState(true);

    useEffect(()=> {
        setFishName("Nemo");
        setFishSpecies("Acestrorhynchus falcatus");
        setFishFuNFact('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus suscipit nisl in sollicitudin.');
        setFishLargeGroup('Peixes com Escama');
    } ,[])

    return (
        <FishContainer>
            <TopBar title="Informações" />
            <ScrollView>
                <FishProfile source={require('../../assets/Acestrorhynchus.png')} />

                <DescriptionContainer>
                    <FishTitle>{fishName}</FishTitle>
                    <PropertyText>{fishSpecies}</PropertyText>
                    <FishDescription>
                        {`"${fishFunFact}"`}
                    </FishDescription>
                </DescriptionContainer>

                <ColumnContainer>
                    <PropertyColumn>
                        <PropertyContainer>
                            <PropertyText>Grande Grupo</PropertyText>
                            <PropertyValueText>{fishLargeGroup}</PropertyValueText>
                        </PropertyContainer>

                        <PropertyContainer>
                            <PropertyText>Família</PropertyText>
                            <PropertyValueText>{fishFamily}</PropertyValueText>
                        </PropertyContainer>

                        <PropertyContainer>
                            <PropertyText>Tamanho Máx(cm)</PropertyText>
                            <PropertyValueText>{fishMaxSize}</PropertyValueText>
                        </PropertyContainer>

                        <PropertyContainer>
                            <PropertyText>Habitat</PropertyText>
                            <PropertyValueText>{fishHabitat}</PropertyValueText>
                        </PropertyContainer>

                        <PropertyContainer>
                            <PropertyText>Ameaçado?</PropertyText>
                            <PropertyValueText>{(fishIsThreatened?"Sim":"Não")}</PropertyValueText>
                        </PropertyContainer>

                        <PropertyContainer>
                            <PropertyText>Foi indroduzido?</PropertyText>
                            <PropertyValueText>{(fishWasIntroduced?"Sim":"Não")}</PropertyValueText>
                        </PropertyContainer>
                    </PropertyColumn>

                    <PropertyColumn>
                        <PropertyContainer>
                            <PropertyText>Grupo</PropertyText>
                            <PropertyValueText>{fishGroup}</PropertyValueText>
                        </PropertyContainer>

                        <PropertyContainer>
                            <PropertyText>Alimentação</PropertyText>
                            <PropertyValueText>{fishFeed}</PropertyValueText>
                        </PropertyContainer>

                        <PropertyContainer>
                            <PropertyText>Peso Máx(kg)</PropertyText>
                            <PropertyValueText>{fishMaxWeight}</PropertyValueText>
                        </PropertyContainer>

                        <PropertyContainer>
                            <PropertyText>Endemíco?</PropertyText>
                            <PropertyValueText>{(fishIsEndemic?"Sim":"Não")}</PropertyValueText>
                        </PropertyContainer>

                        <PropertyContainer>
                            <PropertyText>Faz piracema?</PropertyText>
                            <PropertyValueText>{(fishHasSpawningSeason?"Sim":"Não")}</PropertyValueText>
                        </PropertyContainer>
                    </PropertyColumn>
                </ColumnContainer>
            </ScrollView>
        </FishContainer>
    )
}