import { Dimensions } from "react-native";
import MapView from "react-native-maps";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { DefaultButton } from "../../components/Button";

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
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: ${RFValue(40, 640)}px;
    align-self: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: ${RFValue(8, 640)}px;
`

export const MapInstructionsText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12, 640)}px;
    color: ${({ theme }) => theme.colors.on_background};
    text-align: center;
`

export const LocationUsageInfoView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    align-self: center;
    width: 100%;
`
export const LocationUsageInfoContainer = styled.View`
    width: ${RFValue(300, 640)}px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: ${RFValue(32, 640)}px;
    background-color: ${({ theme }) => theme.colors.background};
    padding: ${RFValue(16, 640)}px;
    border-radius: ${RFValue(16, 640)}px;
`
export const LocationUsageInfoTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.on_background};
    font-size: ${RFValue(14, 640)}px;
`

export const LocationUsageInfoText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.on_background};
    font-size: ${RFValue(12, 640)}px;
    
`

export const MapButtonsView = styled.View`
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
`
export const ConfirmeMapLocationBUtton = styled(DefaultButton)`

`