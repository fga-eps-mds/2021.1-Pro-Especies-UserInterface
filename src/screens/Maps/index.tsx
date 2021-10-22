import { LocationObject } from 'expo-location';
import * as React from 'react';
import { Map, MapContainer } from './styles';

export const MyMap = ({ route }: any) => {
    return (
        <MapContainer >
            <Map
                initialRegion={{
                    latitude: route.params.loc.coords.latitude,
                    longitude: route.params.loc.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </MapContainer>
    )
}