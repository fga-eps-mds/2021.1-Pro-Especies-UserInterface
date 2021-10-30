import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { DraftButtonCountCircle, DraftButtonCountText, DraftButtonLabel, DraftButtonTouchable } from "./styles";
export const DraftButton = () => {
    const [drafts, setDrafts] = useState([]);
    const getDrafts = async () => {
        const draftsData = await AsyncStorage.getItem('drafts');
        if (draftsData)
            setDrafts(JSON.parse(draftsData));

    }
    useEffect(() => {
        getDrafts();
    }, [])
    return (
        <DraftButtonTouchable>
            <DraftButtonLabel>Rascunhos</DraftButtonLabel>
            <DraftButtonCountCircle>
                <DraftButtonCountText>{drafts.length}</DraftButtonCountText>
            </DraftButtonCountCircle>
        </DraftButtonTouchable>
    );
}