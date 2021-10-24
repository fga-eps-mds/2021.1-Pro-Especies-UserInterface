import AsyncStorage from '@react-native-async-storage/async-storage';
import { Buffer } from "buffer";
import { fishLogService } from './fishService';

async function UpdateFishLog(
    log_id: string, 
    name: string | null,
    largeGroup: string | null,
    group: string | null,
    species: string | null,
    latitude: number | null,
    longitude: number | null,
    photoString: string | undefined | null,
    length: number | null,
    weight: number | null,
    reviewed: boolean | null,
    admin: Boolean,
) {
    const userId = await AsyncStorage.getItem("@eupescador/userId");
    const token = await AsyncStorage.getItem("@eupescador/token");
    const userToken = `Bearer ${token}`;
    let photo = null;
    let reviewedBy = null;

    if(admin)
        reviewedBy = userId;

    const coordenates = {
        latitude,
        longitude
    }

    if(photoString){
        photo = Buffer.from(photoString, "base64");
    }

    const res = await fishLogService.patch(`/fishLog/${log_id}`, {
        name,
        largeGroup,
        group,
        species,
        coordenates,
        photo,
        length,
        weight,
        reviewed,
        reviewedBy,
        updatedBy: userId,
    } ,{ headers: { Authorization: userToken } });
    return res.data;
}

export { UpdateFishLog };
