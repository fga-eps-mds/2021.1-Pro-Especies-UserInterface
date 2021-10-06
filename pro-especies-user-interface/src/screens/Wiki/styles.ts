import styled from "styled-components/native";
import { Searchbar } from 'react-native-paper';
import { RFValue } from "react-native-responsive-fontsize";

export const PageContainer = styled.View`
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background};
`

export const SearchBarContainer = styled(Searchbar)`
    width: 242px;
    height: 25px;    
    border: 1px solid #202E35;
    border-radius: 8px;
`

export const RowContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin-top: ${RFValue(10,640)}px;
    margin-bottom: ${RFValue(16,640)}px;
    background-color: ${({ theme }) => theme.colors.background};
`

export const TextFilter = styled.Text<{filter: boolean}>`
    font-family: ${({ theme }) => (p => p.filter ? theme.fonts.regular : theme.fonts.bold)};
    font-size: ${RFValue(12, 640)}px;
`

export const TouchableFilter = styled.TouchableOpacity`
    text-align: center;
`

export const TitleContainer = styled.View`
    margin-left: ${RFValue(20, 640)}px;
    margin-top: ${RFValue(32, 640)}px;
    margin-bottom: ${RFValue(20, 640)}px;
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

export const TitleText = styled.Text<{wiki: boolean}>`
    font-family: ${({ theme }) => (p => p.wiki ? theme.fonts.regular : theme.fonts.bold)};
    font-size: ${RFValue(12, 640)}px;
    margin-right: ${RFValue(16, 640)}px;
`