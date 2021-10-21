import React, { useState, useEffect, FC } from "react";
import { Buffer } from "buffer";
import { ScrollView, Alert, ActivityIndicator } from "react-native";
import { CommonActions } from '@react-navigation/native';
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

import { GetOneFishLog } from '../../services/fishLogService/getOneFishLog';
import { DeleteFishLog } from "../../services/fishLogService/deleteFishLog";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FishLog = ({ navigation, route }: any) => {
    const [fishName, setFishName] = useState();
    const [fishPhoto, setFishPhoto] = useState<String>();
    const [fishLargeGroup, setFishLargeGroup] = useState();
    const [fishGroup, setFishGroup] = useState();
    const [fishSpecies, setFishSpecies] = useState();
    const [fishWeight, setFishWeight] = useState();
    const [fishLength, setFishLength] = useState();
    const [isAdmin, setIsAdmin] = useState<Boolean>();
    const [isLoading, setIsLoading] = useState(true);
    const [logId, setLogId] = useState("");
    const [isReviewed, setIsReviewed] = useState(false);
    const [userToken, setUserToken] = useState("");


    const getData = async () => {
        const userAdmin = await AsyncStorage.getItem("@eupescador/userAdmin");
        const token = await AsyncStorage.getItem("@eupescador/token");
        if (token){
            getFishLogProperties(token);
            setUserToken(token);
        }
        if (userAdmin === "true")
            setIsAdmin(true);
        else
            setIsAdmin(false);
    }

    const handleDelete = async () => {
        try {
            await DeleteFishLog(userToken, logId);
            const resetAction = CommonActions.reset({
                index: 0,
                routes: [{ name: 'WikiFishlogs'}],
            });
            navigation.dispatch(resetAction);
        } catch (error) {
            console.log(error);
        }
    }

    const getFishLogProperties = async (token: string) => {
        try {
            const {log_id} = route.params;
            setLogId(log_id);
            const log = await GetOneFishLog(log_id, token);
            if(log.photo){
                const log64 = Buffer.from(log.photo).toString('base64');
                const base64Img = `data:image/png;base64,${log64}`;
                setFishPhoto(base64Img);
              }
            setFishName(log.name);
            setFishSpecies(log.species);
            setFishLargeGroup(log.largeGroup);
            setFishGroup(log.group);
            setFishWeight(log.weight);
            setFishLength(log.length);
            setIsReviewed(log.reviewed);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
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
                                        <GreenButton text="Revisar" buttonFunction={() => {
                                        navigation.navigate("NewFishLog" as never, {
                                            isNewRegister: false,
                                            log_id: logId,
                                            name: "Revisar Registro",
                                        } as never);
                                    }} />
                                        <GreenButton text="Exportar" buttonFunction={() => { }} />
                                    </>
                                ) : (
                                    <GreenButton text="Editar" buttonFunction={() => {
                                        if(isReviewed){
                                            Alert.alert("Registro", "Não é possível editar esse registro pois ele já foi revisado por um pesquisador.", [
                                                {
                                                  text: "Ok",
                                                },
                                              ]);
                                        } else {
                                            navigation.navigate("NewFishLog" as never, {
                                                isNewRegister: false,
                                                log_id: logId,
                                                name: "Editar Registro",
                                            } as never);
                                        }
                                    }} />
                                )
                            }

                            <GreenButton text="Excluir" buttonFunction={() => {
                                if(isReviewed){
                                    Alert.alert("Excluir Registro", "Não é possível deletar esse registro pois ele já foi revisado por um pesquisador.", [
                                        {
                                          text: "Ok",
                                        },
                                      ]);
                                } else {
                                    Alert.alert("Excluir Registro", "Você tem certeza que deseja excluir este registro?", [
                                        {
                                          text: "Cancelar",
                                          style: "cancel"
                                        },
                                        {
                                            text: "Ok",
                                            onPress: () => handleDelete()
                                        }
                                      ]);
                                }
                            }} />
                        </RegisterButtonView>
                    </ScrollView>
                )
            }
        </FishContainer>
    )
}
