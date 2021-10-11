import React from "react";
import { ArrowLeft, Box, HeaderText } from "./styles";

interface Props {
    title: string;
}

export function TopBar({title}: Props) {
    return (
        <Box>
            <ArrowLeft name="arrow-back" />
            <HeaderText >{title}</HeaderText>
        </Box>
    )
}