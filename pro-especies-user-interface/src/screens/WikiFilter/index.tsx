import React, { useState, useEffect } from "react";
import Checkbox from 'expo-checkbox';
import { GreenButton } from "../../components/GreenButton";
import { RegularText } from "../../components/RegularText";
import { TopBar } from "../../components/TopBar";
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
    Input,
    CheckBoxRow
} from "./styles";
import { ScrollView } from "react-native-gesture-handler";


interface IGroup {
    arraias: {
        name: string,
        activate: boolean,
        subGroups: {
            name: string,
            activate: boolean
        }[]
    },
    cascudos: {
        name: string,
        activate: boolean,
        subGroups: {
            name: string,
            activate: boolean
        }[]
    }
}

const initialState: IGroup = {
    arraias: {
        name: "Arraia",
        activate: true,
        subGroups: [
            {
                name: "Arraia1",
                activate: false
            },
            {
                name: "Arraia2",
                activate: false
            },
            {
                name: "Arraia3",
                activate: false
            },
        ]
    },
    cascudos: {
        name: "Cascudo",
        activate: true,
        subGroups: [
            {
                name: "Cascudo1",
                activate: false
            },
            {
                name: "Cascudo2",
                activate: false
            },
            {
                name: "Cascudo3",
                activate: false
            },
        ]
    }
}


// interface IGroup {
//     arraias: {
//         name: string,
//         activate: boolean,
//         subGroups: {
//             arraia: boolean,
//         }
//     },
//     cascudos: {
//         name: string,
//         activate: boolean,
//         subGroups: {
//             cascao: boolean,
//         }
//     }
// }

// const initialState: IGroup = {
//     arraias: {
//         name: "Arraia",
//         activate: true,
//         subGroups:
//             {
//                 arraia: false
//             }
//     },
//     cascudos: {
//         name: "Cascudo",
//         activate: true,
//         subGroups:
//         {
//             cascao: false
//         }
//     }
// }


export const WikiFilter = ({ navigation }: any) => {
    const [isEndemic, setIsEndemic] = useState<boolean>(true);
    const [isThreatened, setIsThreatened] = useState<boolean>(true);
    const [hasSpawningSeason, setHasSpawningSeason] = useState<boolean>(true);
    const [wasIntroduced, setWasIntroduced] = useState<boolean>(true);
    const [maxWeight, setMaxWeight] = useState<number | null>();
    const [minWeight, setMinWeight] = useState<number | null>();
    const [maxLength, setMaxLength] = useState<number | null>();
    const [minLength, setMinLength] = useState<number | null>();

    const [isChecked, setIsChecked] = useState(initialState);
    const [filterQuery, setFilterQuery] = useState<string>();

    const createURLQuery = () => {
        // ?largeGroup=escama&group=Silva&group=famosos&commonName=salmao%20%20albino
        let new_url: string = "?";

        if (isChecked.arraias.activate || isChecked.cascudos.activate) {
            if (isChecked.arraias.activate)
                new_url += "largeGroup=" + isChecked.arraias.name.toLowerCase();
            if (isChecked.cascudos.activate)
                new_url += "&largeGroup=" + isChecked.cascudos.name.toLowerCase();

            for (let i = 0; i < isChecked.arraias.subGroups.length; i++) {
                console.log(i);
                if (isChecked.arraias.subGroups[i].activate)
                    new_url += "&group=" + isChecked.arraias.subGroups[i].name.toLowerCase();
            }

            for (let i = 0; i < isChecked.cascudos.subGroups.length; i++) {
                if (isChecked.cascudos.subGroups[i].activate)
                    new_url += "&group=" + isChecked.cascudos.subGroups[i].name.toLowerCase();
            }
        }

        new_url += "&isEndemic=" + JSON.stringify(isEndemic);
        new_url += "&isThreatened=" + JSON.stringify(isThreatened);
        new_url += "&hasSpawningSeason=" + JSON.stringify(hasSpawningSeason);
        new_url += "&wasIntroduced=" + JSON.stringify(wasIntroduced);

        if (maxWeight)
            new_url += "&maxWeight=" + JSON.stringify(maxWeight);
        if (maxLength)
            new_url += "&maxSize=" + JSON.stringify(maxLength);

        setFilterQuery(new_url);
        console.log(filterQuery);
    }

    const filterWiki = () => {
        createURLQuery();
        navigation.navigate('Wiki', {
            filterQuery: filterQuery,
        });
    }

    useEffect(() => {
        console.log(isChecked.arraias.subGroups)
    }, [])

    return (
        <PageContainer>
            <TopBar title='Filtros' />
            <ScrollView>
                <FishBodyContainer>

                    <GroupContainer>
                        <BoldText>Grande Grupo</BoldText>
                        <GroupOptionsContainer>
                            <CheckBoxRow>
                                <Checkbox
                                    value={isChecked.arraias.activate}
                                    onValueChange={() => {
                                        const newState = { ...isChecked };
                                        newState.arraias.activate = !newState.arraias.activate;
                                        console.log(newState.arraias.activate);
                                        setIsChecked(newState);
                                    }}
                                    color={isChecked.arraias.activate ? '#4630EB' : undefined}
                                />
                                <RegularText text={isChecked.arraias.name} />


                                {/* {isChecked.cascudos.activate && (
                                <>
                                    <RegularText text="SubGrupo 2" />
                                    <Checkbox
                                        value={isChecked.cascudos.subGroups.cascao}
                                        onValueChange={() => {
                                            const newState = { ...isChecked };
                                            newState.cascudos.subGroups.cascao = !newState.cascudos.subGroups.cascao;
                                            setIsChecked(newState);
                                        }}
                                        color={isChecked.cascudos.subGroups.cascao ? '#4630EB' : undefined}
                                    />
                                </>
                            )} */}
                            </CheckBoxRow>

                            <CheckBoxRow>
                                <Checkbox
                                    value={isChecked.cascudos.activate}
                                    onValueChange={() => {
                                        const newState = { ...isChecked };
                                        newState.cascudos.activate = !newState.cascudos.activate;
                                        console.log(newState.cascudos.activate);
                                        setIsChecked(newState);
                                    }}
                                    color={isChecked.cascudos.activate ? '#4630EB' : undefined}
                                />
                                <RegularText text={isChecked.cascudos.name} />
                            </CheckBoxRow>

                        </GroupOptionsContainer>
                    </GroupContainer>

                    <GroupContainer>
                        <BoldText>Grupo</BoldText>
                        <GroupOptionsContainer>
                            {/* {isChecked.arraias.subGroups.map((item, index) => {
                            <CheckBoxRow>
                            
                                <Checkbox
                                    value={item.activate}
                                    onValueChange={() => {
                                        const newState = { ...isChecked };
                                        newState.arraias.subGroups[index].activate = !newState.arraias.subGroups[index].activate;
                                        setIsChecked(newState);
                                    }}
                                    color={item.activate ? '#4630EB' : undefined}
                                />
                                <RegularText text={item.name} />
                            </CheckBoxRow>
                            
                        })
                        } */}
                            {isChecked.arraias.activate ?
                                (<>
                                    <CheckBoxRow>
                                        <Checkbox
                                            value={isChecked.arraias.subGroups[0].activate}
                                            onValueChange={() => {
                                                const newState = { ...isChecked };
                                                newState.arraias.subGroups[0].activate = !newState.arraias.subGroups[0].activate;
                                                setIsChecked(newState);
                                            }}
                                            color={isChecked.arraias.subGroups[0].activate ? '#4630EB' : undefined} />
                                        <RegularText text={isChecked.arraias.subGroups[0].name} />
                                    </CheckBoxRow>
                                    <CheckBoxRow>
                                        <Checkbox
                                            value={isChecked.arraias.subGroups[1].activate}
                                            onValueChange={() => {
                                                const newState = { ...isChecked };
                                                newState.arraias.subGroups[1].activate = !newState.arraias.subGroups[1].activate;
                                                setIsChecked(newState);
                                            }}
                                            color={isChecked.arraias.subGroups[1].activate ? '#4630EB' : undefined} />
                                        <RegularText text={isChecked.arraias.subGroups[1].name} />
                                    </CheckBoxRow>
                                    <CheckBoxRow>
                                        <Checkbox
                                            value={isChecked.arraias.subGroups[2].activate}
                                            onValueChange={() => {
                                                const newState = { ...isChecked };
                                                newState.arraias.subGroups[2].activate = !newState.arraias.subGroups[2].activate;
                                                setIsChecked(newState);
                                            }}
                                            color={isChecked.arraias.subGroups[2].activate ? '#4630EB' : undefined} />
                                        <RegularText text={isChecked.arraias.subGroups[2].name} />
                                    </CheckBoxRow>

                                </>) : null}

                            {isChecked.cascudos.activate ?
                                (<>
                                    <CheckBoxRow>
                                        <Checkbox
                                            value={isChecked.cascudos.subGroups[0].activate}
                                            onValueChange={() => {
                                                const newState = { ...isChecked };
                                                newState.cascudos.subGroups[0].activate = !newState.cascudos.subGroups[0].activate;
                                                setIsChecked(newState);
                                            }}
                                            color={isChecked.cascudos.subGroups[0].activate ? '#4630EB' : undefined} />
                                        <RegularText text={isChecked.cascudos.subGroups[0].name} />
                                    </CheckBoxRow>
                                    <CheckBoxRow>

                                        <Checkbox
                                            value={isChecked.cascudos.subGroups[1].activate}
                                            onValueChange={() => {
                                                const newState = { ...isChecked };
                                                newState.cascudos.subGroups[1].activate = !newState.cascudos.subGroups[1].activate;
                                                setIsChecked(newState);
                                            }}
                                            color={isChecked.cascudos.subGroups[1].activate ? '#4630EB' : undefined} />
                                        <RegularText text={isChecked.cascudos.subGroups[1].name} />
                                    </CheckBoxRow>
                                    <CheckBoxRow>
                                        <Checkbox
                                            value={isChecked.cascudos.subGroups[2].activate}
                                            onValueChange={() => {
                                                const newState = { ...isChecked };
                                                newState.cascudos.subGroups[2].activate = !newState.cascudos.subGroups[2].activate;
                                                setIsChecked(newState);
                                            }}
                                            color={isChecked.cascudos.subGroups[2].activate ? '#4630EB' : undefined} />
                                        <RegularText text={isChecked.cascudos.subGroups[2].name} />
                                    </CheckBoxRow>

                                </>) : null}
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
                                trackColor={{ false: "#e0dfdf", true: "#62EEFF" }}
                                thumbColor={"#00BBD4"}
                                ios_backgroundColor="#e0dfdf"
                                onValueChange={setIsEndemic}
                                value={isEndemic}
                            />
                            <Switch
                                trackColor={{ false: "#e0dfdf", true: "#62EEFF" }}
                                thumbColor={"#00BBD4"}
                                ios_backgroundColor="#e0dfdf"
                                onValueChange={setIsThreatened}
                                value={isThreatened}
                            />
                            <Switch
                                trackColor={{ false: "#e0dfdf", true: "#62EEFF" }}
                                thumbColor={"#00BBD4"}
                                ios_backgroundColor="#e0dfdf"
                                onValueChange={setHasSpawningSeason}
                                value={hasSpawningSeason}
                            />
                            <Switch
                                trackColor={{ false: "#e0dfdf", true: "#62EEFF" }}
                                thumbColor={"#00BBD4"}
                                ios_backgroundColor="#e0dfdf"
                                onValueChange={setWasIntroduced}
                                value={wasIntroduced}
                            />
                        </SwitchColumn>
                    </SwitchContainer>

                    <GreenButton
                        text="Filtrar"
                        buttonFunction={createURLQuery}
                    />
                </FishBodyContainer>
            </ScrollView>
        </PageContainer >
    )
}