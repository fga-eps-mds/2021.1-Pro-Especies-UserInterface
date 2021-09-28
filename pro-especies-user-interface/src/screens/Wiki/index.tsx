import React from "react";
import { Text } from "react-native";
import { TopBar } from "../../components/TopBar";
import { PageContainer } from "./styles";

export default function Wiki() {
    return (
        <PageContainer>
            <TopBar title='Biblioteca' />
            <Text>Wiki</Text>
        </PageContainer>
    )
}