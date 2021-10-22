import React, { useState } from 'react';
import { LocationUsageInfoContainer, LocationUsageInfoText, LocationUsageInfoTitle, LocationUsageInfoView, Map, MapButtonsView, MapContainer, MapInfoView, MapInstructions, MapInstructionsText } from './styles';
import { Marker, MapEvent } from 'react-native-maps';
import { TouchableOpacity, Text } from 'react-native';
import { DefaultButton } from '../../components/Button';
import { useNavigation } from '@react-navigation/core';

export const MyMap = ({ route }: any) => {
    const [mark, setMark] = useState<any>({ latitude: route.params.loc.coords.latitude, longitude: route.params.loc.coords.longitude });
    const navigation = useNavigation();
    const handleDrag = (e: MapEvent) => {
        setMark(e.nativeEvent.coordinate);
    }

    return (
        <MapContainer >
            <Map
                initialRegion={{
                    latitude: route.params.loc.coords.latitude,
                    longitude: route.params.loc.coords.longitude,
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
                        <DefaultButton text="Confirmar" buttonFunction={() => { }} />
                    </MapButtonsView>
                </LocationUsageInfoView>
            </MapInfoView>
        </MapContainer>
    )
}