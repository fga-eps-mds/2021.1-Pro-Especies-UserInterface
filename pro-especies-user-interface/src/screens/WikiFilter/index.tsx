import React, { useState, useEffect } from "react";
import CheckBox from '@react-native-community/checkbox';
import { GreenButton } from "../../components/GreenButton";
import { RegularText } from "../../components/RegularText";
import { TopBar } from "../../components/TopBar";
import { GetWikiFishes } from "../../services/wikiServices/getWikiFishes";
import {
    PageContainer,
    FishBodyContainer,
    GroupContainer,
    BoldText,
    GroupOptionsContainer,
    TextInputContainer,
    InputRow,
    SwitchContainer,
    SwitchColumn,
    Switch,
    InputView,
    Input
} from "./styles";


export const WikiFilter = () => {
    const [isEndemic, setIsEndemic] = useState<boolean>();
    const [isThreatened, setIsThreatened] = useState<boolean>();
    const [hasSpawningSeason, setHasSpawningSeason] = useState<boolean>();
    const [wasIntroduced, setWasIntroduced] = useState<boolean>();
    const [maxWeight, setMaxWeight] = useState<number | null>();
    const [minWeight, setMinWeight] = useState<number | null>();
    const [maxLength, setMaxLength] = useState<number | null>();
    const [minLength, setMinLength] = useState<number | null>();
    const [largeGroups, setLargeGroups] = useState<string[]>();
    const [groups, setGroups] = useState<string[]>();
    const [selectedLargeGroups, setSelectedLargeGroups] = useState<string[]>();
    const [selectedGroups, setSelectedGroups] = useState<string[]>();

    const getLargeGroups = async () => {
        let newGroups: string[] = [];
        try {
            const wikiData = await GetWikiFishes();
            for (let i = 0; i < wikiData.length; i++) {
                if (!newGroups.includes(wikiData[i].largeGroup))
                    newGroups.push(wikiData[i].largeGroup);
            }
            setLargeGroups(newGroups);
            console.log(largeGroups);
        } catch (error) {
            console.log(error);
        }
    }

    const getGroups = async () => {
        let newGroups: string[] = [];
        try {
            const wikiData = await GetWikiFishes();
            for (let i = 0; i < wikiData.length; i++) {
                if (
                    largeGroups?.includes(wikiData[i].largeGroup) &&
                    (!newGroups.includes(wikiData[i].group))
                ) {
                    newGroups.push(wikiData[i].group);
                }
            }
            setGroups(newGroups);
            console.log(groups);
        } catch (error) {
            console.log(error);
        }
    }

    const selectLargeGroup = (largeGroup: string, checked: boolean) => {
        let newLargeGroups: string[] | undefined = [];
        newLargeGroups = selectedLargeGroups;
        if (checked) {
            newLargeGroups?.push(largeGroup);
        } else if (newLargeGroups?.includes(largeGroup)) {
            newLargeGroups = newLargeGroups.filter((item) => {
                if (!largeGroup) {
                    return item;
                }
            })
        }

        setSelectedLargeGroups(newLargeGroups);
        console.log(selectedLargeGroups);
    };

    const selectGroup = (group: string, checked: boolean) => {
        let newGroups: string[] | undefined = [];
        newGroups = selectedGroups;
        if (checked) {
            newGroups?.push(group);
        } else if (newGroups?.includes(group)) {
            newGroups = newGroups.filter((item) => {
                if (!group) {
                    return item;
                }
            })
        }

        setSelectedGroups(newGroups);
        console.log(selectedGroups);
    };

    useEffect(() => {

    }, [])

    return (
        <PageContainer>
            <TopBar title='Filtros' />
            <FishBodyContainer>
                <GroupContainer>
                    <BoldText>Grande Grupo</BoldText>
                    <GroupOptionsContainer>
                        <InputRow>
                            <CheckBox
                                disabled={false}
                                value={false}
                                onValueChange={() => { }}
                            />
                            <RegularText text="Arraia" />
                        </InputRow>
                    </GroupOptionsContainer>
                </GroupContainer>

                <GroupContainer>
                    <BoldText>Grupo</BoldText>
                    <GroupOptionsContainer>
                        <InputRow>
                            <CheckBox
                                disabled={false}
                                value={false}
                                onValueChange={() => { }}
                            />
                            <RegularText text="Arraia" />
                        </InputRow>
                    </GroupOptionsContainer>
                </GroupContainer>

                <TextInputContainer>
                    <BoldText>Peso(kg)</BoldText>
                    <InputRow>
                        <InputView>
                            <Input keyboardType="numeric" placeholder="Mín" onChangeText={(value) => setMinWeight(parseInt(value))} />
                        </InputView>
                        <InputView>
                            <Input keyboardType="numeric" placeholder="Máx" onChangeText={(value) => setMaxWeight(parseInt(value))} />
                        </InputView>
                    </InputRow>
                </TextInputContainer>

                <TextInputContainer>
                    <BoldText>Tamanho(cm)</BoldText>
                    <InputRow>
                        <InputView>
                            <Input keyboardType="numeric" placeholder="Mín" onChangeText={(value) => setMinLength(parseInt(value))} />
                        </InputView>
                        <InputView>
                            <Input keyboardType="numeric" placeholder="Máx" onChangeText={(value) => setMaxLength(parseInt(value))} />
                        </InputView>
                    </InputRow>
                </TextInputContainer>

                <SwitchContainer>
                    <SwitchColumn>
                        <BoldText>Endémico</BoldText>
                        <BoldText>Ameaçado</BoldText>
                        <BoldText>Piracema</BoldText>
                        <BoldText>Introduzido</BoldText>
                    </SwitchColumn>
                    <SwitchColumn>
                        <Switch
                            trackColor={{ false: "#767577", true: "#62EEFF" }}
                            thumbColor={"#00BBD4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={setIsEndemic}
                            value={isEndemic}
                        />
                        <Switch
                            trackColor={{ false: "#767577", true: "#62EEFF" }}
                            thumbColor={"#00BBD4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={setIsThreatened}
                            value={isThreatened}
                        />
                        <Switch
                            trackColor={{ false: "#767577", true: "#62EEFF" }}
                            thumbColor={"#00BBD4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={setHasSpawningSeason}
                            value={hasSpawningSeason}
                        />
                        <Switch
                            trackColor={{ false: "#767577", true: "#62EEFF" }}
                            thumbColor={"#00BBD4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={setWasIntroduced}
                            value={wasIntroduced}
                        />
                    </SwitchColumn>
                </SwitchContainer>

                <GreenButton text="Filtrar" buttonFunction={() => { }} />
            </FishBodyContainer>
        </PageContainer >
    )
}