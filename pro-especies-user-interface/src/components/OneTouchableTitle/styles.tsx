import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`

export const TitleContainer = styled.View`
    margin-left: ${RFValue(20, 640)}px;
    margin-bottom: ${RFValue(20, 640)}px;
    flex-direction: row;
`

export const TouchableTitle = styled.TouchableOpacity`
    text-align: center;
    margin-left: ${RFValue(20, 640)}px;
`

export const TitleText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(12, 640)}px;
`
