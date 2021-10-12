import React from "react";
import { ImageSourcePropType } from "react-native";
import { Image } from "./styles";

interface Props {
    source: ImageSourcePropType;
}

export function ProfileImage({source}: Props) {
    return (
        <Image source={source} />
    )
}