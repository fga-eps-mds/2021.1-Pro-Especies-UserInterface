import React, { useState, useEffect, FC } from "react";

import { ScrollView } from "react-native";
import { TopBar } from "../../components/TopBar";
import {
    FishContainer,
    FishProfile,
    FishTitle,
    PropertyText,
    PropertyValueText,
    PropertyContainer,
    PropertyRow,
    DescriptionContainer,
} from "./styles";
import { GetOneFishLog } from '../../services/fishLogServices/getOneFishLog';

type IFishLog = {
    log_id: string;
}

export const WikiFish: FC<IFishLog> = ({
    log_id,
}) => {
    const [fishName, setFishName] = useState("");
    const [fishPhoto, setFishPhoto] = useState("");
    const [fishLargeGroup, setFishLargeGroup] = useState("");
    const [fishWeight, setFishWeight] = useState(0);
    const [fishLength, setFishLength] = useState(0);

    const getFishLogProperties = async () => {
        try {
            const log = await GetOneFishLog(log_id);
            setFishName(log.species);
            setFishLargeGroup(log.fishType);
            setFishWeight(log.weight);
            setFishLength(log.length);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getFishLogProperties();
    }, [])

    return (
        <FishContainer>
            <TopBar title="Registro" />
            <ScrollView>
                <FishProfile source={require('../../assets/Acestrorhynchus.png')} />

                <DescriptionContainer>
                    <FishTitle>fishName</FishTitle>
                    <PropertyText>fishLargeGroup</PropertyText>
                </DescriptionContainer>

                <PropertyRow>
                    <PropertyContainer>
                        <PropertyText>Tamanho(cm)</PropertyText>
                        <PropertyValueText>fishLength</PropertyValueText>
                    </PropertyContainer>

                    <PropertyContainer>
                        <PropertyText>Peso(kg)</PropertyText>
                        <PropertyValueText>fishWeight</PropertyValueText>
                    </PropertyContainer>
                </PropertyRow>
            </ScrollView>
        </FishContainer>
    )
}