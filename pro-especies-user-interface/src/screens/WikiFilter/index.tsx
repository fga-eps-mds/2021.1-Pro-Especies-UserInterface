import React, { useState, useEffect } from "react";
import { GreenButton } from "../../components/GreenButton";
import { TopBar } from "../../components/TopBar";
import { GetWikiFishes } from "../../services/wikiServices/getWikiFishes";
import {
    PageContainer,
    FishBodyContainer,
    GroupContainer,
    BoldText,
    GroupDropDown,
    TextInputContainer,
    InputTitle,
    InputRow,
    SwitchContainer,
    SwitchColumn,
    Switch,
    SwitchTitle,
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

    useEffect(() => {

    }, [])

    return (
        <PageContainer>
            <TopBar title='Filtros' />
            <FishBodyContainer>
                <GroupContainer>
                    <BoldText>Grande Grupo</BoldText>
                    <GroupDropDown>
                    </GroupDropDown>
                </GroupContainer>

                <GroupContainer>
                    <BoldText>Grupo</BoldText>
                    <GroupDropDown>
                    </GroupDropDown>
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
        </PageContainer>
    )
}