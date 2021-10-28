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
    CheckBoxRow,
    FilterContainer

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
    const [checkForEndemic, setCheckForEndemic] = useState<boolean>(false);
    const [checkForThreatened, setCheckForThreatened] = useState<boolean>(false);
    const [checkForSpawningSeason, setCheckForSpawningSeason] = useState<boolean>(false);
    const [checkForIntroduced, setCheckForIntroduced] = useState<boolean>(false);
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
                    if (isChecked.groups[i].subGroups[j].activate)
                        new_url += "&group=" + isChecked.groups[i].subGroups[j].name;
                }
            }
        }

        if (checkForEndemic) {
            if (new_url != "?")
                new_url += "&"
            new_url += "isEndemic=" + JSON.stringify(isEndemic);
        }

        if (checkForThreatened) {
            if (new_url != "?")
                new_url += "&"
            new_url += "isThreatened=" + JSON.stringify(isThreatened);
        }

        if (checkForSpawningSeason) {
            if (new_url != "?")
                new_url += "&"
            new_url += "hasSpawningSeason=" + JSON.stringify(hasSpawningSeason);
        }

        if (checkForIntroduced) {
            if (new_url != "?")
                new_url += "&"
            new_url += "wasIntroduced=" + JSON.stringify(wasIntroduced);
        }

        console.log(new_url);

        const resetAction = CommonActions.reset({
            index: 0,
            routes: [{
                name: 'WikiFishlogs',
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

    const subGroupList = (group: IGroup, g_index: number) => {
        return group.groups[g_index].subGroups.map((item, index) => {
            return (
                <CheckBoxRow key={`subg${index}`}>
                    <Checkbox
                        value={item.activate}
                        onValueChange={() => {
                            const newState = { ...isChecked };
                            newState.groups[g_index].subGroups[index].activate = !newState.groups[g_index].subGroups[index].activate;
                            setIsChecked(newState);
                        }}
                        color={item.activate ? '#00BBD4' : undefined}
                    />
                    <RegularText text={item.name} />
                </CheckBoxRow>
            );
        });
    }

    const groupList = () => {
        return isChecked.groups.map((item, index) => {
            return (
                <CheckBoxRow key={`g${index}`}>
                    <Checkbox
                        value={item.activate}
                        onValueChange={() => {
                            const newState = { ...isChecked };
                            newState.groups[index].activate = !newState.groups[index].activate;
                            setIsChecked(newState);
                        }}
                        color={item.activate ? '#00BBD4' : undefined}
                    />
                    <RegularText text={item.name} />
                </CheckBoxRow>
            );
        });
    }

    return (
        <PageContainer>
            <TopBar title='Filtros' icon="delete" iconText="Limpar" buttonFunction={() => { }} />
            <ScrollView>
                <FishBodyContainer>
                    <FilterContainer>
                        <GroupContainer>
                            <BoldText>Grande Grupo</BoldText>
                            <GroupOptionsContainer>
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
                            </GroupOptionsContainer>
                        </GroupContainer>
                    </FilterContainer>
                    <GreenButton
                        text="Filtrar"
                        buttonFunction={createURLQuery}
                    />
                </FishBodyContainer>
            </ScrollView>
        </PageContainer >
    )
}