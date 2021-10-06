import React, { useState , FC} from "react";
import { Text } from "react-native";
import { FishCardContaner } from "./styles";

export interface IFish{
    _id: string;
    largeGroup: string;
    group: string;
    commonName: string;
    scientificName: string;
    family: string;
    food: string;
    habitat: string;
    maxSize: number;
    maxWeight: number;
    isEndemic: string;
    isThreatened: string;
    hasSpawningSeason: string;
    wasIntroduced: string;
    funFact: string;
    photo: string;
}

interface IFishCardProps{
    fish: IFish,
}

export const FishCard:FC<IFishCardProps> = (
    {fish}
) => {
    return (
        <FishCardContaner>
            <Text>{fish.commonName}</Text>
        </FishCardContaner>
    )
}