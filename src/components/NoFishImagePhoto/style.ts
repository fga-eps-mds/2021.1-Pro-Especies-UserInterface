import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';

export const NoFishImageSquare = styled.View`
  align-self: center;
  margin-top: ${RFValue(16, 640)}px;
  border-radius: ${RFValue(16, 640)}px;
  height: ${RFValue(160, 640)}px;
  width: ${RFValue(400, 640)}px;
  align-items: center;
  justify-content: center;
`;

export const NoFishImageSquareIcon = styled(MaterialIcons)`
  font-size: ${RFValue(64, 640)}px;
`