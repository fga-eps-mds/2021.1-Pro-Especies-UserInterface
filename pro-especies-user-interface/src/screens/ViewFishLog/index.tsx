import React, { useState, useEffect, FC } from "react";

import { ScrollView } from "react-native";
import {
    FishContainer,
    PropertyRow,
    DescriptionContainer,
    RegisterButtonView,
    RegisterButton,
    RegisterButtonText
} from "./styles";

import { TopBar } from "../../components/TopBar";
import { Property } from '../../components/Property';
import { Title } from "../../components/Title";
import { HalfToneText } from "../../components/HalfToneText";
import { ProfileImage } from "../../components/ProfileImage";
import { MapViewImage } from "../../components/MapViewImage";

import { GetOneFishLog } from '../../services/fishLogServices/getOneFishLog';
import AsyncStorage from "@react-native-async-storage/async-storage";

type IFishLog = {
    log_id: string;
}

export const FishLog: FC<IFishLog> = ({
    log_id
}) => {
    const [fishName, setFishName] = useState("");
    const [fishPhoto, setFishPhoto] = useState("");
    const [fishLargeGroup, setFishLargeGroup] = useState("");
    const [fishWeight, setFishWeight] = useState(0);
    const [fishLength, setFishLength] = useState(0);
    const [isAdmin, setIsAdmin] = useState(false);

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

    const getUser = async () => {
        const _userId = await AsyncStorage.getItem("@eupescador/userId");
        console.log(_userId);
    }

    useEffect(() => {
        // getFishLogProperties();
        getUser();
    }, [])

    return (
        <FishContainer>
            <TopBar title="Registro" />
            <ScrollView>
                <ProfileImage source={require('../../assets/Acestrorhynchus.png')} />

                <DescriptionContainer>
                    <Title text="fishName" />
                    <HalfToneText text="fishLargeGroup" />
                </DescriptionContainer>

                <PropertyRow>
                    <Property property="Tamanho(cm)" value="fishLength" />
                    
                    <Property property="Peso(kg)" value="fishWeight" />
                </PropertyRow>

                <MapViewImage source={require('../../assets/map.png')} />

                <RegisterButtonView>
                    {
                        isAdmin ? (
                            <>
                                <RegisterButton onPress={() => {}}>
                                    <RegisterButtonText>Revisar</RegisterButtonText>
                                </RegisterButton><RegisterButton onPress={() => {}}>
                                    <RegisterButtonText>Exportar</RegisterButtonText>
                                </RegisterButton>
                            </>
                        ) : (
                            <RegisterButton onPress={() => {}}>
                                <RegisterButtonText>Editar</RegisterButtonText>
                            </RegisterButton>
                        )
                    }

                    <RegisterButton onPress={() => {}}>
                        <RegisterButtonText>Excluir</RegisterButtonText>
                    </RegisterButton>
                </RegisterButtonView>
            </ScrollView>
        </FishContainer>
    )
}