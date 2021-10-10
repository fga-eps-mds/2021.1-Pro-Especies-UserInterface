import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`

export const LeftContainer = styled.View`
    flex: 0.12;
    width:100%;
    justify-content: flex-start;
`

export const FilterContainer = styled.View`
    flex:1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const ButtonView = styled.View`
    align-items: center;
`
export const ExportButton = styled.TouchableOpacity`
    flex-direction: row;
    width: ${RFValue(156, 640)}px;
    height: ${RFValue(39, 640)}px;
    border-radius: ${RFValue(5, 640)}px;
    background-color: ${({ theme }) => theme.colors.secondary_dark};
    align-items: center;
    justify-content: space-around
    
`

export const ExportButtonText = styled.Text`
    color: white;
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(12, 640)}px;
`

export const DownloadIcon = styled(MaterialIcons)`
    font-size:  ${RFValue(16,640)}px;
    color: white;
    font-family: ${({ theme }) => theme.fonts.bold};
`

export const FilterIcon = styled(MaterialIcons)`
    font-size:  ${RFValue(24,640)}px;
    color: black;
    font-family: ${({ theme }) => theme.fonts.bold};

`
export const AddIcon = styled(MaterialIcons)`
    font-size:  ${RFValue(36,640)}px;
    color: white;
    font-family: ${({ theme }) => theme.fonts.bold};
`
export const AddButtonView = styled.View`
    flex:1;
    position: absolute;
    bottom: 3%;
    right: 22%;

    flex-direction: row;
    align-items: flex-end;
    
`

export const AddLogButton = styled.TouchableOpacity`
    position: absolute;
    align-items: center;
    
`
export const AddLogView = styled.View` 
    
    flex-direction: row;
    width: ${RFValue(56, 640)}px;
    height: ${RFValue(56, 640)}px;
    border-radius: ${RFValue(56, 640)}px;
    background-color: ${({ theme }) => theme.colors.secondary_dark};
    align-items: center;
    justify-content: space-around
`