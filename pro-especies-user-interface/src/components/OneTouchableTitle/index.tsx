import React, { useState } from "react";
import { TitleText, TouchableTitle } from "./styles";

interface Props {
    title: string;
}

export function OneTouchableTitle({title}: Props) {

    const handleTouch = () => {

    };
    
    return (
        <TouchableTitle onPress={()=> {handleTouch()}}>
            <TitleText >{title}</TitleText>

            
            
        </TouchableTitle>    
    )
}