import { Dimensions } from "react-native";
import MapView from "react-native-maps";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { GreenButton } from "../../components/GreenButton";

export const MapContainer = styled.View`
    flex: 1;
    background-color: white;
    align-items: center;
    justify-content: center;
`

export const Map = styled(MapView)`
    width: ${Dimensions.get('window').width}px;
    height: ${Dimensions.get('window').height}px;
`

export const MapInfoView = styled.View`
  flex: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: ${RFValue(16)}px;
`;

export const MapInstructions = styled.View`
    width: ${RFValue(300, 640)}px;
    height: ${RFValue(60, 640)}px;
    margin-top: ${RFValue(40, 640)}px;
    align-self: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: ${RFValue(8, 640)}px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const MapInstructionsText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(12, 640)}px;
    text-align: center;
`

export const MapButtonsView = styled.View`
    flex: 1;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: row;
`
export const ConfirmeMapLocationBUtton = styled(GreenButton)`

`