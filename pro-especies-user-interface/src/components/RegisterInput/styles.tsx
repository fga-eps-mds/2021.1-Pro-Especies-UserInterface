import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';


export const InputView = styled.View`
    align-items: center;
    height: ${RFValue(39)}px;
    width: ${RFValue(258)}px;
    flex-direction: row;
    border:  ${RFValue(1)}px;
    border-radius: ${RFValue(5)}px;
`


export const Input = styled.TextInput`
    height: ${RFValue(39)}px;
    width: ${RFValue(258)}px;
    flex-direction: row;
    justify-content: flex-start;    
    font-family: ${({ theme }) => theme.fonts.regular}
    
`
export const InputIcon = styled(MaterialIcons)`
    font-size: ${RFValue(20)}px;
    color: #C4C4C4;
    margin: 0 ${RFValue(11)}px; 
    
    
`
