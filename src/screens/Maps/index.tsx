import React, { useState } from 'react';
import { LocationUsageInfoContainer, LocationUsageInfoText, LocationUsageInfoTitle, LocationUsageInfoView, Map, MapButtonsView, MapContainer, MapInfoView, MapInstructions, MapInstructionsText } from './styles';
import { Marker, MapEvent, LatLng } from 'react-native-maps';
import { DefaultButton } from '../../components/Button';

export const MyMap = ({ navigation, route }: any) => {
    const [mark, setMark] = useState<LatLng>({ latitude: route.params.fishLatitude, longitude: route.params.fishLongitude });

    const handleDrag = (e: MapEvent) => {
        setMark(e.nativeEvent.coordinate);
    }
    const handleConfirm = (latitude: number, longitude: number) => {
        route.params.fishLatitude = latitude;
        route.params.fishLongitude = longitude;
        const params = {
            data: route.params,
            isNewRegister: route.params.isNew,
            log_id: route.params.log_id,
            name: route.params.name
        };
        navigation.navigate("NewFishLog", { ...params })
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
                        <DefaultButton text="Confirmar" buttonFunction={() => handleConfirm(mark.latitude, mark.longitude)} />
                    </MapButtonsView>
                </LocationUsageInfoView>
            </MapInfoView>
        </MapContainer>
    )
}