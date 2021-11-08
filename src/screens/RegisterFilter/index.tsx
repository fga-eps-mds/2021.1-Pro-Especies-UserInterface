import React, { useState, useEffect } from "react";
import { CommonActions } from '@react-navigation/native';
import { CheckBox } from 'react-native-elements';
import { DefaultButton } from "../../components/Button";
import { RegularText } from "../../components/RegularText";
import { FilterBar } from "../../components/FilterBar";
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
import { GetAllFishLogs } from "../../services/fishLogService/getAllLogs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";


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

interface CheckboxItem {
    name: string,
    checked: boolean
}

export const LogFilter = ({ navigation }: any) => {
    const [isChecked, setIsChecked] = useState(initialState);
    const [familiesChecked, setFamiliesChecked] = useState<CheckboxItem[]>([]);
    const [isAdmin, setIsAdmin] = useState<Boolean>();
    const [isLoading, setIsLoading] = useState(true);


    const setFamilies = async (token: string) => {
        if (token) {
            const data = await GetAllFishLogs(token, "");
            const familiesList = data.map(element => element.family || "Outros");
            const familiesSet = [...new Set(familiesList)];
            const familiesCheckBox = familiesSet.map(element => {
                return { name: element, checked: false };
            });
            setFamiliesChecked(familiesCheckBox);
        }

        setIsLoading(false);
    }

    const getData = async () => {
        const userAdmin = await AsyncStorage.getItem("@eupescador/userAdmin");
        const token = await AsyncStorage.getItem("@eupescador/token");
        if (token) {
            setFamilies(token);
        }
        if (userAdmin === "true")
            setIsAdmin(true);
        else
            setIsAdmin(false);
    }

    const createURLQuery = () => {
        // ?largeGroup=escama&group=Silva&group=famosos&commonName=salmao%20%20albino
        let new_url: string = "";

        for (let i = 0; i < isChecked.groups.length; i++) {
            if (isChecked.groups[i].activate) {
                if (new_url)
                    new_url += "&"
                new_url += "largeGroup=" + isChecked.groups[i].name;
                for (let j = 0; j < isChecked.groups[i].subGroups.length; j++) {
                    if (isChecked.groups[i].subGroups[j].activate)
                        new_url += "&group=" + isChecked.groups[i].subGroups[j].name;
                }
            }
        }

        for (let i = 0; i < familiesChecked.length; i++) {
            if (familiesChecked[i].checked) {
                if (new_url)
                    new_url += "&"
                new_url += "family=" + familiesChecked[i].name;
            }
        }

        if (new_url)
            new_url = '?' + new_url;

        const resetAction = CommonActions.reset({
            index: 0,
            routes: [{
                name: 'WikiFishlogs',
                params: {
                    logFilterQuery: new_url,
                },
            }],
        });
        navigation.dispatch(resetAction);
    }

    const clearFilter = () => {
        const newState = { ...isChecked };
        for (let i = 0; i < newState.groups.length; i++) {
            newState.groups[i].activate = false;
            for (let j = 0; j < newState.groups[i].subGroups.length; j++) {
                newState.groups[i].subGroups[j].activate = false;
            }
        }
        setIsChecked(newState);

        const newFamiliesState = familiesChecked;
        for (let i = 0; i < newFamiliesState.length; i++) {
            newFamiliesState[i].checked = false;
        }
        setFamiliesChecked(newFamiliesState);

    }

    const renderFamilyCheckBox = () => {
        return familiesChecked.map((item, index) => {
            return (
                <CheckBoxRow key={item.name}>
                    <CheckBox
                        checked={item.checked}
                        onPress={() => {
                            const newState = [...familiesChecked];
                            newState[index].checked = !newState[index].checked;
                            setFamiliesChecked(newState);
                        }}
                        checkedColor={'#00BBD4'}
                        uncheckedColor={"black"}
                    />
                    <RegularText text={item.name} />
                </CheckBoxRow>
            );
        });
    }

    const subGroupList = (group: IGroup, g_index: number) => {
        return group.groups[g_index].subGroups.map((item, index) => {
            return (
                <CheckBoxRow key={`subg${index}`}>
                    <CheckBox
                        checked={item.activate}
                        onPress={() => {
                            const newState = { ...isChecked };
                            newState.groups[g_index].subGroups[index].activate = !newState.groups[g_index].subGroups[index].activate;
                            setIsChecked(newState);
                        }}
                        checkedColor={'#00BBD4'}
                        uncheckedColor={"black"}
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
                    <CheckBox
                        checked={item.activate}
                        onPress={() => {
                            const newState = { ...isChecked };
                            newState.groups[index].activate = !newState.groups[index].activate;
                            setIsChecked(newState);
                        }}
                        checkedColor={'#00BBD4'}
                        uncheckedColor={"black"}
                    />
                    <RegularText text={item.name} />
                </CheckBoxRow>
            );
        });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <PageContainer>
            <FilterBar
                title='Filtros'
                icon="delete"
                iconText="Limpar"
                buttonFunction={clearFilter}
                navigation={navigation}
            />
            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <>
                    <ScrollView>
                        <FishBodyContainer>
                            <FilterContainer>
                                {isAdmin ? (
                                    <GroupContainer>
                                        <BoldText>Famílias</BoldText>
                                        <GroupOptionsContainer>
                                            {renderFamilyCheckBox()}
                                        </GroupOptionsContainer>
                                    </GroupContainer>
                                ) : (
                                    <>
                                        <GroupContainer>
                                            <BoldText>Grande Grupo</BoldText>
                                            <GroupOptionsContainer>
                                                {groupList()}
                                            </GroupOptionsContainer>
                                        </GroupContainer><GroupContainer>
                                            <BoldText>Grupo</BoldText>
                                            <GroupOptionsContainer>
                                                {(isChecked.groups[0].activate) ? subGroupList(isChecked, 0) : null}
                                                {(isChecked.groups[1].activate) ? subGroupList(isChecked, 1) : null}
                                                {(isChecked.groups[2].activate) ? subGroupList(isChecked, 2) : null}
                                                {(isChecked.groups[3].activate) ? subGroupList(isChecked, 3) : null}
                                                {(isChecked.groups[4].activate) ? subGroupList(isChecked, 4) : null}
                                            </GroupOptionsContainer>
                                        </GroupContainer>
                                    </>
                                )}
                            </FilterContainer>
                            <DefaultButton
                                text="Filtrar"
                                buttonFunction={createURLQuery} />
                        </FishBodyContainer>
                    </ScrollView>
                </>
            )
            }
        </PageContainer >
    )
}