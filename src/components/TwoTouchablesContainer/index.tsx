import React, { useState } from "react";
import { TitleContainer, TitleHighlight, TitleText, TouchableTitle } from "./styles";

interface Props {
    title0: string;
    title1: string;
}

export function TwoTouchablesContainer({title0, title1}: Props) {
    const [stateDefault, setStateDefault] = useState(true);
    // const [];
    
    return (
        
        <TitleContainer >
            <TouchableTitle onPress={()=> {setStateDefault(true)}}>
                <TitleText stateDefault={!stateDefault}>{title0}</TitleText>
                {   
                    stateDefault ? <TitleHighlight /> : null 
                }
            </TouchableTitle>
            <TouchableTitle onPress={()=> {setStateDefault(false)}}>
                <TitleText stateDefault={stateDefault}>{title1}</TitleText>
                {   
                    stateDefault ? null : <TitleHighlight />  
                }   
            </TouchableTitle>

        </TitleContainer>
    
    )
}