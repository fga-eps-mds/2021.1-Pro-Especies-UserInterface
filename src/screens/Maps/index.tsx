import React, { useState } from 'react';
import { LocationUsageInfoContainer, LocationUsageInfoText, LocationUsageInfoTitle, LocationUsageInfoView, Map, MapButtonsView, MapContainer, MapInfoView, MapInstructions, MapInstructionsText } from './styles';
import { Marker, MapEvent } from 'react-native-maps';
import { DefaultButton } from '../../components/Button';

export const MyMap = ({ navigation, route }: any) => {
    const [mark, setMark] = useState<any>({ latitude: route.params.fishLatitude, longitude: route.params.fishLongitude });

    const handleDrag = (e: MapEvent) => {
        setMark(e.nativeEvent.coordinate);
        route.params.fishLatitude = e.nativeEvent.coordinate.latitude;
        route.params.fishLongitude = e.nativeEvent.coordinate.longitude;
    }

    return (
        <MapContainer >
            <Map
                initialRegion={{
                    latitude: route.params.fishLatitude,
                    longitude: route.params.fishLongitude,
                    latitudeDelta: 0.0322,
                    longitudeDelta: 0.0121,
                }}
                onPress={handleDrag}
            >
                <Marker coordinate={mark} />
            </Map>
            <MapInfoView>
                <MapInstructions>
                    <MapInstructionsText>Clique no mapa para marcar o local onde pegou o peixe</MapInstructionsText>
                </MapInstructions>
                <LocationUsageInfoView>
                    <LocationUsageInfoContainer>
                        <LocationUsageInfoTitle>Por que precisamos da localização?</LocationUsageInfoTitle>
                        <LocationUsageInfoText>A localização enviada será utilizada pelas unidades ambientais responsáveis para mapear a posição das espécies marítimas</LocationUsageInfoText>
                    </LocationUsageInfoContainer>
                    <MapButtonsView>
                        <DefaultButton type="secondary" text="Cancelar" buttonFunction={() => { navigation.goBack() }} />
                        <DefaultButton text="Confirmar" buttonFunction={() => { navigation.navigate("NewFishLog", { data: route.params, isNewRegister: route.params.isNew }) }} />
                    </MapButtonsView>
                </LocationUsageInfoView>
            </MapInfoView>
        </MapContainer>
    )
}