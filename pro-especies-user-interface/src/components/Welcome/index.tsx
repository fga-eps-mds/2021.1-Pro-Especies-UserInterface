import React from "react";
import { WelcomeCard, WelcomeText } from "./styles";

interface Props {
    title: string;
}

export function Welcome({ title }: Props) {
    return (
        <WelcomeCard>
            <WelcomeText>{title}</WelcomeText>
        </WelcomeCard>
    )
}