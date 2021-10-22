import React, { useState } from 'react';
import { Map, MapButtonsView, MapContainer, MapInfoView, MapInstructions, MapInstructionsText } from './styles';
import { Marker, MapEvent } from 'react-native-maps';
import { TouchableOpacity, Text } from 'react-native';
import { GreenButton } from '../../components/GreenButton';

export const MyMap = ({ route }: any) => {
    const [mark, setMark] = useState<any>({ latitude: route.params.loc.coords.latitude, longitude: route.params.loc.coords.longitude });

    const handleDrag = (e: MapEvent) => {
        console.log(e.nativeEvent.coordinate);
        setMark(e.nativeEvent.coordinate);
    }

    return (
        <MapContainer >
            <Map
                initialRegion={{
                    latitude: route.params.loc.coords.latitude,
                    longitude: route.params.loc.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onPress={handleDrag}
            >
                <Marker coordinate={mark} />
            </Map>
            <MapInfoView>
                <MapInstructions>
                    <MapInstructionsText>Clique no mapa para marcar o local onde pegou o peixe</MapInstructionsText>
                </MapInstructions>
                <MapButtonsView>
                    <GreenButton text="Cancelar" buttonFunction={() => { }} />
                    <GreenButton text="Confirmar Localização" buttonFunction={() => { }} />
                </MapButtonsView>
            </MapInfoView>
        </MapContainer>
    )
}