import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { IFishLog } from "../../components/FishCard";
import { FishList } from "../../components/FishList";
import { DraftsContainer } from "./styles";
export const Drafts = ({ navigation, route }: any) => {
    const [draftList, setDraftList] = useState<IFishLog[]>([]);
    const getDrafts = async () => {
        const draftsData = await AsyncStorage.getItem('drafts');
        console.log(draftsData);
        if (draftsData)
            setDraftList(JSON.parse(draftsData) as IFishLog[]);
    }

    useEffect(() => {
        getDrafts()
    }, []);
    return (
        <DraftsContainer>
            <FishList
                fishData={draftList}
                type="fishLog"
                handleNavigation={(id) => { }}
            />
        </DraftsContainer>
    )

}