import React, { useState, useEffect } from "react";
import { Switch, TextInput } from "react-native-gesture-handler";
import { GreenButton } from "../../components/GreenButton";
import { TopBar } from "../../components/TopBar";
import { GetWikiFishes } from "../../services/wikiServices/getWikiFishes";
import {
    PageContainer,
    FishBodyContainer,
    GroupContainer,
    GroupTitle,
    GroupDropDown,
    TextInputContainer,
    InputTitle,
    InputRow,
    SwitchContainer,
    SwitchRow,
    SwitchTitle
} from "./styles";


export const WikiFilter = () => {

    useEffect(() => {

    }, [])

    return (
        <PageContainer>
            <TopBar title='Filtros' />
            <FishBodyContainer>
                <GroupContainer>
                    <GroupTitle>Grande Grupo</GroupTitle>
                    <GroupDropDown>
                    </GroupDropDown>
                </GroupContainer>

                <GroupContainer>
                    <GroupTitle>Grupo</GroupTitle>
                    <GroupDropDown>
                    </GroupDropDown>
                </GroupContainer>

                <TextInputContainer>
                    <InputTitle>Peso(kg)</InputTitle>
                    <InputRow>
                        <TextInput></TextInput>
                        <TextInput></TextInput>
                    </InputRow>
                </TextInputContainer>

                <TextInputContainer>
                    <InputTitle>Tamanho(cm)</InputTitle>
                    <InputRow>
                        <TextInput></TextInput>
                        <TextInput></TextInput>
                    </InputRow>
                </TextInputContainer>

                <SwitchContainer>
                    <SwitchRow>
                        <SwitchTitle>Endémico</SwitchTitle>
                        <Switch
                            // trackColor={{ false: "#767577", true: "#81b0ff" }}
                            // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            // ios_backgroundColor="#3e3e3e"
                            // onValueChange={toggleSwitch}
                            // value={isEnabled}
                        />
                    </SwitchRow>
                    <SwitchRow>
                        <SwitchTitle>Ameaçado</SwitchTitle>
                        <Switch
                            // trackColor={{ false: "#767577", true: "#81b0ff" }}
                            // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            // ios_backgroundColor="#3e3e3e"
                            // onValueChange={toggleSwitch}
                            // value={isEnabled}
                        />
                    </SwitchRow>
                    <SwitchRow>
                        <SwitchTitle>Piracema</SwitchTitle>
                        <Switch
                            // trackColor={{ false: "#767577", true: "#81b0ff" }}
                            // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            // ios_backgroundColor="#3e3e3e"
                            // onValueChange={toggleSwitch}
                            // value={isEnabled}
                        />
                    </SwitchRow>
                    <SwitchRow>
                        <SwitchTitle>Introduzido</SwitchTitle>
                        <Switch
                            // trackColor={{ false: "#767577", true: "#81b0ff" }}
                            // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            // ios_backgroundColor="#3e3e3e"
                            // onValueChange={toggleSwitch}
                            // value={isEnabled}
                        />
                    </SwitchRow>
                </SwitchContainer>

                <GreenButton text="Filtrar" buttonFunction={() => { }} />
            </FishBodyContainer>
        </PageContainer>
    )
}