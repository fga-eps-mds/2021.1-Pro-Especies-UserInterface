import React from "react";
import { Button, ButtonText } from "./styles";

interface Props {
    name: string;
    function: VoidFunction;
}

export function TopBar({ name, function }: Props) {
    return (
        <Button onPress={function}>
            <ButtonText>Excluir</ButtonText>
        </Button>
    )
}