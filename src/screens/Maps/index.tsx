import * as React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import { Map, MapContainer } from './styles';

export const MyMap = () => {
    return (
        <MapContainer>
            <Map />
        </MapContainer>
    )
}