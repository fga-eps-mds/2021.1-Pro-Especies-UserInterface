import React, { FC } from "react";
import { FishCardContaner, FishImage, CommonNameText, ScientificName } from "./styles";

export interface IFish {
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

interface IFishCardProps {
    fish: IFish,
}

export const FishCard: FC<IFishCardProps> = (
    { fish }
) => {
    return (
        <FishCardContaner onPress={() => { }}>
            <FishImage source={{ uri: `data:image/png;base64,${fish.photo}` }}></FishImage>
            <CommonNameText>{fish.commonName}</CommonNameText>
            <ScientificName>{fish.scientificName}</ScientificName>
        </FishCardContaner>
    )
}