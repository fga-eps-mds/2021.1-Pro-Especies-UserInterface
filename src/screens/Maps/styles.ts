import { Dimensions } from "react-native";
import MapView from "react-native-maps";
import styled from "styled-components/native";

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