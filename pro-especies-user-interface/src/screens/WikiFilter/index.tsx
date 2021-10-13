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
                    <GroupTitle text="Grande Grupo" />
                    <GroupDropDown>
                    </GroupDropDown>
                </GroupContainer>

                <GroupContainer>
                    <GroupTitle text="Grupo" />
                    <GroupDropDown>
                    </GroupDropDown>
                </GroupContainer>

                <TextInputContainer>
                    <InputTitle text="Peso(kg)" />
                    <InputRow>
                        <TextInput></TextInput>
                        <TextInput></TextInput>
                    </InputRow>
                </TextInputContainer>

                <TextInputContainer>
                    <InputTitle text="Tamanho(cm)" />
                    <InputRow>
                        <TextInput></TextInput>
                        <TextInput></TextInput>
                    </InputRow>
                </TextInputContainer>

                <SwitchContainer>
                    <SwitchRow>
                        <SwitchTitle text="Endémico" />
                        <Switch
                            // trackColor={{ false: "#767577", true: "#81b0ff" }}
                            // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            // ios_backgroundColor="#3e3e3e"
                            // onValueChange={toggleSwitch}
                            // value={isEnabled}
                        />
                    </SwitchRow>
                    <SwitchRow>
                        <SwitchTitle text="Ameaçado" />
                        <Switch
                            // trackColor={{ false: "#767577", true: "#81b0ff" }}
                            // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            // ios_backgroundColor="#3e3e3e"
                            // onValueChange={toggleSwitch}
                            // value={isEnabled}
                        />
                    </SwitchRow>
                    <SwitchRow>
                        <SwitchTitle text="Piracema" />
                        <Switch
                            // trackColor={{ false: "#767577", true: "#81b0ff" }}
                            // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            // ios_backgroundColor="#3e3e3e"
                            // onValueChange={toggleSwitch}
                            // value={isEnabled}
                        />
                    </SwitchRow>
                    <SwitchRow>
                        <SwitchTitle text="Introduzido" />
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