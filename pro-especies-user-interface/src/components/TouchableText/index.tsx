import React, { useState } from "react";
import { TitleHighlight, TitleText } from "./styles";



export function TouchableText() {
    const [stateDefault, setStateDefault] = useState(true);
    // const [];
    
    return (
        
        <TitleText stateDefault={stateDefault}>

        </TitleText>

    
    )
}