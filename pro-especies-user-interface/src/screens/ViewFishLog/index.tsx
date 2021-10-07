import React, { useState, useEffect, FC } from "react";

import { ScrollView } from "react-native";
import {
    FishContainer,
    PropertyRow,
    DescriptionContainer,
    RegisterButtonView,
} from "./styles";

import { TopBar } from "../../components/TopBar";
import { Property } from '../../components/Property';
import { Title } from "../../components/Title";
import { HalfToneText } from "../../components/HalfToneText";
import { ProfileImage } from "../../components/ProfileImage";
import { MapViewImage } from "../../components/MapViewImage";
import { GreenButton } from "../../components/GreenButton";

import { GetOneFishLog } from '../../services/fishLogServices/getOneFishLog';
import AsyncStorage from "@react-native-async-storage/async-storage";

type IFishLog = {
    log_id: string;
}

export const FishLog: FC<IFishLog> = ({
    log_id
}) => {
    const [fishName, setFishName] = useState();
    const [fishPhoto, setFishPhoto] = useState("");
    const [fishLargeGroup, setFishLargeGroup] = useState();
    const [fishWeight, setFishWeight] = useState();
    const [fishLength, setFishLength] = useState();
    const [isAdmin, setIsAdmin] = useState<Boolean>();
    const [userToken, setUserToken] = useState("");

    
    const getUser = async () => {
        const _userId = await AsyncStorage.getItem("@eupescador/userId");
        const userAdmin = await AsyncStorage.getItem("@eupescador/userAdmin");
        const token = await AsyncStorage.getItem("@eupescador/token");
        if(token){
            setUserToken(token);
        }
        if(userAdmin === "true"){
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
        console.log(_userId,userAdmin,token);
    }
    
    const getFishLogProperties = async () => {
        try {
            const log = await GetOneFishLog(log_id, userToken);
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
        getUser();
    }, [])

    return (
        <FishContainer>
            <TopBar title="Registro" />
            <ScrollView>
                <ProfileImage source={require('../../assets/Acestrorhynchus.png')} />

                <DescriptionContainer>
                    <Title text={
                        fishName ? fishName : "Não informado"
                    } />
                    <HalfToneText text={
                        fishLargeGroup ? fishLargeGroup : "Não informado"
                    } />
                </DescriptionContainer>

                <PropertyRow>
                    <Property property="Tamanho(cm)" value={
                        fishLength ? JSON.stringify(fishLength) : "Não informado"
                    } />
                    
                    <Property property="Peso(kg)" value="fishWeight" />
                </PropertyRow>

                <MapViewImage source={require('../../assets/map.png')} />

                <RegisterButtonView>
                    {
                        isAdmin ? (
                            <>
                                <GreenButton text="Revisar" buttonFunction={()=>{}} />
                                <GreenButton text="Exportar" buttonFunction={()=>{}} />
                            </>
                        ) : (
                            <GreenButton text="Editar" buttonFunction={()=>{}} />
                        )
                    }

                    <GreenButton text="Excluir" buttonFunction={()=>{}} />
                </RegisterButtonView>
            </ScrollView>
        </FishContainer>
    )
}