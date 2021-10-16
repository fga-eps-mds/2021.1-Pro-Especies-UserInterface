import React, { useState, useEffect, FC } from "react";

import { ScrollView } from "react-native";
import {
    FishContainer,
    PropertyRow,
    DescriptionContainer,
    RegisterButtonView,
} from "./styles";

import { Property } from '../../components/Property';
import { Title } from "../../components/Title";
import { HalfToneText } from "../../components/HalfToneText";
import { ProfileImage } from "../../components/ProfileImage";
import { MapViewImage } from "../../components/MapViewImage";
import { GreenButton } from "../../components/GreenButton";
import { ActivityIndicator } from "react-native";

import { GetOneFishLog } from '../../services/fishLogServices/getOneFishLog';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FishLog = ({ route }: any) => {
    const [fishName, setFishName] = useState();
    const [fishPhoto, setFishPhoto] = useState<String>();
    const [fishLargeGroup, setFishLargeGroup] = useState();
    const [fishGroup, setFishGroup] = useState();
    const [fishSpecies, setFishSpecies] = useState();
    const [fishWeight, setFishWeight] = useState();
    const [fishLength, setFishLength] = useState();
    const [isAdmin, setIsAdmin] = useState<Boolean>();
    const [isLoading, setIsLoading] = useState(true);


    const getData = async () => {
        const userAdmin = await AsyncStorage.getItem("@eupescador/userAdmin");
        const token = await AsyncStorage.getItem("@eupescador/token");
        if (token)
            getFishLogProperties(token);
        if (userAdmin === "true")
            setIsAdmin(true);
        else
            setIsAdmin(false);
    }

    const getFishLogProperties = async (token: string) => {
        try {
            const {log_id} = route.params;
            const log = await GetOneFishLog(log_id, token);
            const base64Img = `data:image/png;base64,${log.photo}`;
            if(log.photo)
                setFishPhoto(base64Img);
            setFishName(log.name);
            setFishSpecies(log.species);
            setFishLargeGroup(log.largeGroup);
            setFishGroup(log.group);
            setFishWeight(log.weight);
            setFishLength(log.length);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, [])

    return (
        <FishContainer>
            {
                isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : (
                    <ScrollView>
                        <ProfileImage source={fishPhoto ? {uri: fishPhoto} : require('../../assets/fishIcon.png')} />

                        <DescriptionContainer>
                            <Title text={
                                fishName ? fishName : "Nome não informado"
                            } />
                            <HalfToneText text={
                                fishSpecies ? fishSpecies : "Espécie não informado"
                            } />
                        </DescriptionContainer>

                        <PropertyRow>
                            <Property property="Grande Grupo" value={
                                fishLargeGroup ? JSON.stringify(fishLargeGroup) : "Não informado"
                            } />

                            <Property property="Grupo" value={
                                fishGroup ? JSON.stringify(fishGroup) : "Não informado"
                            }/>
                        </PropertyRow>

                        <PropertyRow>
                            <Property property="Tamanho(cm)" value={
                                fishLength ? JSON.stringify(fishLength) : "Não informado"
                            } />

                            <Property property="Peso(kg)" value={
                                fishWeight ? JSON.stringify(fishWeight) : "Não informado"
                            }/>
                        </PropertyRow>

                        <MapViewImage source={require('../../assets/map.png')} />

                        <RegisterButtonView>
                            {
                                isAdmin ? (
                                    <>
                                        <GreenButton text="Revisar" buttonFunction={() => { }} />
                                        <GreenButton text="Exportar" buttonFunction={() => { }} />
                                    </>
                                ) : (
                                    <GreenButton text="Editar" buttonFunction={() => { }} />
                                )
                            }

                            <GreenButton text="Excluir" buttonFunction={() => { }} />
                        </RegisterButtonView>
                    </ScrollView>
                )
            }
        </FishContainer>
    )
}