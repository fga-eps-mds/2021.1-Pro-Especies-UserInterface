import styled from "styled-components/native";
import { Searchbar } from 'react-native-paper';
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from '@expo/vector-icons';
import { IFish } from "../../components/FishCard";
import { FlatList } from "react-native";

export const PageContainer = styled.View`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
`

export const SearchBarContainer = styled(Searchbar)`
    width: ${RFValue(242, 640)}px;
    height: ${RFValue(25, 640)}px;    
    border-radius: ${RFValue(8, 640)}px;
    border: 1px solid ${({ theme }) => theme.colors.on_background};
    background-color: ${({ theme }) => theme.colors.background};
`

export const FishBodyContainer = styled.View`
    margin: 0px 16px;
`

export const RowContainer = styled.View`
    width: ${RFValue(328, 640)}px;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: ${RFValue(16, 640)}px;
    background-color: ${({ theme }) => theme.colors.background};
`

export const TextFilter = styled.Text<{ filter: boolean }>`
    font-family: ${({ theme }) => (p => p.filter ? theme.fonts.regular : theme.fonts.bold)};
    font-size: ${RFValue(16, 640)}px;
`

export const IconFilter = styled(MaterialIcons)`
    font-size:${RFValue(24, 640)}px;
`

export const TouchableFilter = styled.TouchableOpacity`
    text-align: center;
    flex-direction: row;
`

export const TitleContainer = styled.View`
    width: 100%;
    padding-left: ${RFValue(16, 640)}px;
    margin-top: ${RFValue(32, 640)}px;
    margin-bottom: ${RFValue(11, 640)}px;
    flex-direction: row;
`

export const TouchableTitle = styled.TouchableOpacity`
    text-align: center;
`

export const TitleHighlight = styled.View`
    height: ${RFValue(1, 640)}px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
`

export const TitleText = styled.Text<{ wiki: boolean }>`
    font-family: ${({ theme }) => (p => p.wiki ? theme.fonts.regular : theme.fonts.bold)};
    font-size: ${RFValue(12, 640)}px;
    margin-right: ${RFValue(16, 640)}px;
`

export const NoResultContainer = styled.View`
    align-self: center;
    align-items: center
    width: 100%;
    justify-content: center;
`

export const BoldText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(16, 640)}px;
    text-align: center;
    margin-bottom: ${RFValue(16, 640)}px;
    padding: 0 ${RFValue(34, 640)}px;
`

export const RegularText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12, 640)}px;
    text-align: center;
    margin-bottom: ${RFValue(16, 640)}px;
    padding: 0 ${RFValue(24, 640)}px;
`

export const SearchImage = styled.Image`
    height: ${RFValue(80, 640)}px;
    width: ${RFValue(80, 640)}px;
    margin-bottom: ${RFValue(16, 640)}px;
    margin-top: ${RFValue(55, 640)}px;
`

export const FishCardList = styled(
    FlatList as new () => FlatList<IFish>
).attrs({
    numColumns: 2,
    columnWrapperStyle: { justifyContent: 'space-around' },
    contentContainerStyle: {
        alignItems: "stretch",
        paddingBottom: RFValue(156),
    }
})``

export const Spacer = styled.View`
    width: 16px;
`