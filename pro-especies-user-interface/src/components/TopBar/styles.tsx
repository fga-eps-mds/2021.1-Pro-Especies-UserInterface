import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';


export const Box = styled.View`
    height: ${RFValue(72)}px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary_light};
    flex-direction: row;
    align-items: center;
    padding-top: ${RFValue(20)}px;
    
    
`
export const ArrowLeft = styled(MaterialIcons)`
    font-size: ${RFValue(30)}px;
    margin-left: ${RFValue(12)}px;
    
`
export const HeaderText = styled.Text`
    flex: 1;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(18)}px;
    margin-right: ${RFValue(42)}px;
`