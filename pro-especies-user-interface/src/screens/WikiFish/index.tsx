import React, { useState, useEffect, FC } from "react";

import { ScrollView } from "react-native";
import {
    FishContainer,
    FishDescription,
    PropertyContainer,
    PropertyColumn,
    ColumnContainer,
    DescriptionContainer,
} from "./styles";
import { TopBar } from "../../components/TopBar";
import { ProfileImage } from "../../components/ProfileImage";
import { Property } from "../../components/Property";
import { Title } from "../../components/Title";
import { HalfToneText } from "../../components/HalfToneText";
import { RegularText } from "../../components/RegularText";
import wikiService from '../../services/wikiService';

type IFish = {
    fish_id: string;
}

export const WikiFish: FC<IFish> = ({
    fish_id,
}) => {
    const [fishName, setFishName] = useState("");
    const [fishPhoto, setFishPhoto] = useState("");
    const [fishSpecies, setFishSpecies] = useState("");
    const [fishFunFact, setFishFuNFact] = useState("");
    const [fishLargeGroup, setFishLargeGroup] = useState("");
    const [fishGroup, setFishGroup] = useState("");
    const [fishFamily, setFishFamily] = useState("");
    const [fishFeed, setFishFeed] = useState("");
    const [fishMaxSize, setFishMaxSize] = useState(0);
    const [fishMaxWeight, setFishMaxWeight] = useState(0);
    const [fishHabitat, setFishHabitat] = useState("");
    const [fishIsEndemic, setFishIsEndemic] = useState("");
    const [fishIsThreatened, setFishIsThreatened] = useState("");
    const [fishWasIntroduced, setFishWasIntroduced] = useState("");
    const [fishHasSpawningSeason, setFishHasSpawningSeason] = useState("");

    const getFishProperties = async () => {
        try {
            const fish = await wikiService.get(`/fishWiki/id/${fish_id}`);
            setFishName(fish.data.commonName);
            setFishSpecies(fish.data.scientificName);
            setFishFuNFact(fish.data.funFact);
            setFishLargeGroup(fish.data.largeGroup);
            setFishGroup(fish.data.group);
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
            console.log(error)
        }
    };

    useEffect(() => {
        getFishProperties();
    }, [])

    return (
        <FishContainer>
            <TopBar title="Informações" />
            <ScrollView>
                <ProfileImage source={require('../../assets/Acestrorhynchus.png')} />

                <DescriptionContainer>
                    <Title text={fishName} />
                    <HalfToneText text={fishSpecies} />
                    <FishDescription>
                        <RegularText text={`"${fishFunFact}"`} />
                    </FishDescription>
                </DescriptionContainer>

                <ColumnContainer>
                    <PropertyColumn>
                        <PropertyContainer>
                            <Property property="Grande Grupo" value={fishLargeGroup} />
                        </PropertyContainer>

                        <PropertyContainer>
                            <Property property="Família" value={fishFamily} />
                        </PropertyContainer>

                        <PropertyContainer>
                            <Property property="Tamanho Máx(cm)" value={JSON.stringify(fishMaxSize)} />
                        </PropertyContainer>

                        <PropertyContainer>
                            <Property property="Habitat" value={fishHabitat} />
                        </PropertyContainer>

                        <PropertyContainer>
                            <Property property="Ameaçado?" value={fishIsThreatened} />
                        </PropertyContainer>

                        <PropertyContainer>
                            <Property property="Foi indroduzido?" value={fishWasIntroduced} />
                        </PropertyContainer>
                    </PropertyColumn>

                    <PropertyColumn>
                        <PropertyContainer>
                            <Property property="Grupo" value={fishGroup} />
                        </PropertyContainer>

                        <PropertyContainer>
                            <Property property="Alimentação" value={fishFeed} />
                        </PropertyContainer>

                        <PropertyContainer>
                            <Property property="Peso Máx(kg)" value={JSON.stringify(fishMaxWeight)} />
                        </PropertyContainer>

                        <PropertyContainer>
                            <Property property="Endemíco?" value={fishIsEndemic} />
                        </PropertyContainer>

                        <PropertyContainer>
                            <Property property="Faz piracema?" value={fishHasSpawningSeason} />
                        </PropertyContainer>
                    </PropertyColumn>
                </ColumnContainer>
            </ScrollView>
        </FishContainer>
    )
}