import React, { useState, useEffect } from "react";
import { CommonActions } from '@react-navigation/native';
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
    CheckBoxRow,
    TextContainer
} from "./styles";
import { ScrollView } from "react-native-gesture-handler";


interface IGroup {
    groups: {
        name: string,
        activate: boolean,
        subGroups: {
            name: string,
            activate: boolean,
        }[],
    }[],
}

interface ISubGroup {
    name: string,
    activate: boolean,
}

const initialState: IGroup = {
    groups: [
        {
            name: "Arraias",
            activate: false,
            subGroups: [
                {
                    name: "Arraias",
                    activate: false
                },
            ],
        },
        {
            name: "Cascudos",
            activate: false,
            subGroups: [
                {
                    name: "Cascudos pequenos",
                    activate: false
                },
                {
                    name: "Cascudos grandes",
                    activate: false
                },
            ]
        },
        {
            name: "Outros",
            activate: false,
            subGroups: [
                {
                    name: "Baiacu",
                    activate: false
                },
                {
                    name: "Peixes elétricos",
                    activate: false
                },
                {
                    name: "Outros",
                    activate: false
                },
            ]
        },
        {
            name: "Peixes de couro",
            activate: false,
            subGroups: [
                {
                    name: "Grandes bagres",
                    activate: false
                },
                {
                    name: "Bagres médios",
                    activate: false
                },
                {
                    name: "Bagres pequenos",
                    activate: false
                },
                {
                    name: "Mandís",
                    activate: false
                },
                {
                    name: "Candirús",
                    activate: false
                },
            ]
        },
        {
            name: "Peixes com escamas",
            activate: false,
            subGroups: [
                {
                    name: "Cachorras",
                    activate: false
                },
                {
                    name: "Peixes pequenos",
                    activate: false
                },
                {
                    name: "Peixes médios",
                    activate: false
                },
                {
                    name: "Peixes grandes",
                    activate: false
                },
                {
                    name: "Peixes redondos",
                    activate: false
                },
                {
                    name: "Piaus",
                    activate: false
                },
                {
                    name: "Lambarís e piabas",
                    activate: false
                },
                {
                    name: "Bicudas",
                    activate: false
                },
                {
                    name: "Tucanarés",
                    activate: false
                },
                {
                    name: "Traíras",
                    activate: false
                },
                {
                    name: "Corvinas",
                    activate: false
                },
                {
                    name: "Sardinhas",
                    activate: false
                },
                {
                    name: "Papa-terras e Curimatás",
                    activate: false
                },
                {
                    name: "Carás, Marianas e Jacundás",
                    activate: false
                },
                {
                    name: "Pibanha, Matrinxã e Voadores",
                    activate: false
                },
            ]
        },
    ]

}


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

    const createURLQuery = () => {
        // ?largeGroup=escama&group=Silva&group=famosos&commonName=salmao%20%20albino
        let new_url: string = "?";

        for (let i = 0; i < isChecked.groups.length; i++) {
            if (isChecked.groups[i].activate) {
                if (new_url != "?")
                    new_url += "&"
                new_url += "largeGroup=" + isChecked.groups[i].name;
                for (let j = 0; j < isChecked.groups[i].subGroups.length; j++) {
                    new_url += "&group=" + isChecked.groups[i].subGroups[j].name;
                }
            }
        }
        

        if (new_url != "?")
            new_url += "&"
        new_url += "isEndemic=" + JSON.stringify(isEndemic);

        if (new_url != "?")
            new_url += "&"
        new_url += "isThreatened=" + JSON.stringify(isThreatened);

        if (new_url != "?")
            new_url += "&"
        new_url += "hasSpawningSeason=" + JSON.stringify(hasSpawningSeason);

        if (new_url != "?")
            new_url += "&"
        new_url += "wasIntroduced=" + JSON.stringify(wasIntroduced);

        console.log(new_url);

        const resetAction = CommonActions.reset({
            index: 0,
            routes: [{
                name: 'Wiki',
                params: {
                    filterQuery: new_url,
                    fishMaxSize: maxLength,
                    fishMinSize: minLength,
                    fishMaxWeight: maxWeight,
                    fishMinWeight: minWeight,
                },
            }],
        });
        navigation.dispatch(resetAction);
    }

    useEffect(() => {

    }, [])

    // const subGroupList = () => {
    //     return isChecked.arraias.subGroups.map((item, index) => {
    //         return (
    //             <CheckBoxRow>
    //                 <Checkbox
    //                     value={item.activate}
    //                     onValueChange={() => {
    //                         const newState = { ...isChecked };
    //                         newState.arraias.subGroups[index].activate = !newState.arraias.subGroups[index].activate;
    //                         setIsChecked(newState);
    //                     }}
    //                     color={item.activate ? '#4630EB' : undefined} />
    //                 <RegularText text={item.name} />
    //             </CheckBoxRow>
    //         );
    //     });
    // }

    const subGroupList = (group: IGroup, g_index: number) => {
        return group.groups[g_index].subGroups.map((item, index) => {
            return (
                <CheckBoxRow key={ `subg${index}` }>
                    <Checkbox
                        value={item.activate}
                        onValueChange={() => {
                            const newState = { ...isChecked };
                            newState.groups[g_index].subGroups[index].activate = !newState.groups[g_index].subGroups[index].activate;
                            setIsChecked(newState);
                        }}
                        color={item.activate ? '#4630EB' : undefined}
                    />
                    <RegularText text={item.name} />
                </CheckBoxRow>
            );
        });
    }

    const groupList = () => {
        return isChecked.groups.map((item, index) => {
            return (
                <CheckBoxRow key={ `g${index}` }>
                    <Checkbox
                        value={item.activate}
                        onValueChange={() => {
                            const newState = { ...isChecked };
                            newState.groups[index].activate = !newState.groups[index].activate;
                            setIsChecked(newState);
                        }}
                        color={item.activate ? '#4630EB' : undefined}
                    />
                    <RegularText text={item.name} />
                </CheckBoxRow>
            );
        });
    }

    return (
        <PageContainer>
            <TopBar title='Filtros' />
            <ScrollView>
                <FishBodyContainer>

                    <GroupContainer>
                        <BoldText>Grande Grupo</BoldText>
                        <GroupOptionsContainer>
                            {/* // <CheckBoxRow>
                            //     <Checkbox
                            //         value={isChecked.arraias.activate}
                            //         onValueChange={() => {
                            //             const newState = { ...isChecked };
                            //             newState.arraias.activate = !newState.arraias.activate;
                            //             console.log(newState.arraias.activate);
                            //             setIsChecked(newState);
                            //         }}
                            //         color={isChecked.arraias.activate ? '#4630EB' : undefined}
                            //     />
                            //     <RegularText text={isChecked.arraias.name} />
                            // </CheckBoxRow> */}
                            {
                                groupList()
                            }

                        </GroupOptionsContainer>
                    </GroupContainer>

                    <GroupContainer>
                        <BoldText>Grupo</BoldText>
                        <GroupOptionsContainer>
                            {
                                (isChecked.groups[0].activate) ? subGroupList(isChecked, 0) : null
                            }
                            {
                                (isChecked.groups[1].activate) ? subGroupList(isChecked, 1) : null
                            }
                            {
                                (isChecked.groups[2].activate) ? subGroupList(isChecked, 2) : null
                            }
                            {
                                (isChecked.groups[3].activate) ? subGroupList(isChecked, 3) : null
                            }
                            {
                                (isChecked.groups[4].activate) ? subGroupList(isChecked, 4) : null
                            }

                            {/* {isChecked.cascudos.activate ?
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

                                </>) : null} */}
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
                            <TextContainer>
                                <BoldText>Endémico</BoldText>
                            </TextContainer>
                            <Switch
                                trackColor={{ false: "#e0dfdf", true: "#62EEFF" }}
                                thumbColor={"#00BBD4"}
                                ios_backgroundColor="#e0dfdf"
                                onValueChange={setIsEndemic}
                                value={isEndemic}
                            />
                        </SwitchColumn>
                        <SwitchColumn>
                            <TextContainer>
                                <BoldText>Ameaçado</BoldText>
                            </TextContainer>
                            <Switch
                                trackColor={{ false: "#e0dfdf", true: "#62EEFF" }}
                                thumbColor={"#00BBD4"}
                                ios_backgroundColor="#e0dfdf"
                                onValueChange={setIsThreatened}
                                value={isThreatened}
                            />
                        </SwitchColumn>
                        <SwitchColumn>
                            <TextContainer>
                                <BoldText>Piracema</BoldText>
                            </TextContainer>
                            <Switch
                                trackColor={{ false: "#e0dfdf", true: "#62EEFF" }}
                                thumbColor={"#00BBD4"}
                                ios_backgroundColor="#e0dfdf"
                                onValueChange={setHasSpawningSeason}
                                value={hasSpawningSeason}
                            />
                        </SwitchColumn>
                        <SwitchColumn>
                            <TextContainer>
                                <BoldText>Introduzido</BoldText>
                            </TextContainer>
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