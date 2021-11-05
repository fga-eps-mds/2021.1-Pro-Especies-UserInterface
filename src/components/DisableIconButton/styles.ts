import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

export const IconButton = styled.TouchableOpacity``

export const Icon = styled(MaterialIcons)`
    font-size: ${RFValue(36, 640)}px;
    color: ${({ theme }) => theme.colors.on_background};
`;

export const IconDisabled = styled(MaterialIcons)`
    font-size: ${RFValue(36, 640)}px;
    color: rgba(32, 46, 53, 0.3);
`;