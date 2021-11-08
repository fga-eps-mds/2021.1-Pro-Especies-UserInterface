import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { IFishLog } from "../../components/FishLogCard";
import { WikiFishList } from "../../components/WikiFishList";
import { DraftsContainer } from "./styles";
import { ActivityIndicator, Alert } from 'react-native';

export const Drafts = ({ navigation, route }: any) => {
    const [draftList, setDraftList] = useState<IFishLog[]>([]);
    const getDrafts = async () => {
        const draftsData = await AsyncStorage.getItem('drafts');
        if (draftsData && draftsData != '[]')
            setDraftList(JSON.parse(draftsData) as IFishLog[]);
        setIsLoading(false);
    };
    const [isLoading, setIsLoading] = useState(true);


    const handleNavigation = (id: string) => {
        navigation.navigate("NewFishLog", {
            data: { ...draftList[parseInt(id)] },
            isNewRegister: true,
            isFishLogDraft: true,
            name: "Novo Registro",
            fishLogDraftId: id,
        });
    }

    useEffect(() => {
        getDrafts()
    }, []);
    return (
        <DraftsContainer>
            
            { isLoading ? ( 
                <ActivityIndicator size="large" color="#0000ff" />
            ) :
                <WikiFishList
                    fishData={draftList}
                    type="fishLog"
                    handleNavigation={handleNavigation}
                />
            }
        </DraftsContainer>
    )

}