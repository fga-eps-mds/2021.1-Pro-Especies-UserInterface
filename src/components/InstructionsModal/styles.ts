import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';

export const ModalContainer = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
    background-color: rgba(32, 46, 53, 0.3);
`;

export const ModalView = styled.View`
    width: ${RFValue(300, 640)}px;
    background-color: ${({ theme }) => theme.colors.background};
    height: ${RFValue(440, 640)}px;
    border-radius: ${RFValue(20, 640)}px;
    padding: 0px ${RFValue(16, 640)}px;
`;

export const CloseButton = styled.TouchableOpacity`
    align-self: flex-end;
`;

export const CloseButtonIcon = styled(MaterialIcons)`
    font-size: ${RFValue(24, 640)}px;
    margin-top: ${RFValue(16, 640)}px;
`;

export const ModalTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(14, 640)}px;
    text-align: center;
    margin-bottom: ${RFValue(16, 640)}px;
`;

export const ModalImageIconContainer = styled.View`
    height: ${RFValue(200, 640)}px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ModalImage = styled.Image`
    margin: ${RFValue(8, 640)}px 0px;
`;


export const ModalDescripton = styled.Text`
    font-size: ${RFValue(14, 640)}px;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.regular};
    margin-bottom: ${RFValue(8, 640)}px;
`;