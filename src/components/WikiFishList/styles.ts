import styled from "styled-components/native";
import { FlatList } from "react-native";
import { IFishLog, IFish } from "../FishLogCard";
import { RFValue } from "react-native-responsive-fontsize";

export const FishCardList = styled(
    FlatList as new () => FlatList<IFishLog | IFish>,
).attrs({
    numColumns: 2,
    columnWrapperStyle: { justifyContent: 'space-around' },
    contentContainerStyle: {
        alignItems: 'stretch',
        paddingBottom: RFValue(156),
    },
})``;
