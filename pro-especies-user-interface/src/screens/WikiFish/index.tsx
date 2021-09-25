import React, { useState, useEffect, FC} from "react";

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
import wikiService from '../../services/wikiService';

type IFish = {
    fish_id:string;
}

export const WikiFish: FC<IFish> = ({
    fish_id,
}) => {
    const [ fishName , setFishName ] = useState("");
    const [ fishPhoto , setFishPhoto ] = useState("");
    const [ fishSpecies , setFishSpecies ] = useState("");
    const [ fishFunFact , setFishFuNFact ] = useState("");
    const [ fishLargeGroup , setFishLargeGroup ] = useState("");
    const [ fishGroup , setFishGroup ] = useState("");
    const [ fishFamily , setFishFamily ] = useState("");
    const [ fishFeed , setFishFeed ] = useState("");
    const [ fishMaxSize , setFishMaxSize ] = useState(0);
    const [ fishMaxWeight , setFishMaxWeight ] = useState(0);
    const [ fishHabitat , setFishHabitat ] = useState("");
    const [ fishIsEndemic , setFishIsEndemic ] = useState("");
    const [ fishIsThreatened , setFishIsThreatened ] = useState(false);
    const [ fishWasIntroduced , setFishWasIntroduced ] = useState(false);
    const [ fishHasSpawningSeason , setFishHasSpawningSeason ] = useState(false);

const getFishProperties = async() =>{
    try {
        const fish = await wikiService.get(`/${fish_id}`);
        setFishName(fish.data.commonName);
        setFishSpecies(fish.data.scientificName);
        setFishFuNFact(fish.data.funFact);
        setFishLargeGroup(fish.data.largeGroup);
        setFishFamily(fish.data.family);
        setFishFeed(fish.data.feed);
        setFishHabitat(fish.data.habitat);
        setFishMaxSize(fish.data.sizeMax);
        setFishMaxWeight(fish.data.maxWeight);
        setFishWasIntroduced(fish.data.wasIntroduced);
        setFishIsEndemic(fish.data.isEndemic);
        setFishIsThreatened(fish.data.isThreatened);
        setFishHasSpawningSeason(fish.data.hasSpawingSeason);
    } catch (error) {
        
    }
}; 

    useEffect(()=> {
        getFishProperties();
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
                            <PropertyValueText>{fishIsEndemic}</PropertyValueText>
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