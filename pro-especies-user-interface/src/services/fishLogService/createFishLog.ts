import AsyncStorage from "@react-native-async-storage/async-storage";
import fishLogService from "./fishService"

export const createFishLog = async (
    photo: string | null | undefined,
    name: string | null,
    largeGroup: string | null,
    group: string | null,
    species: string | null,
    weight: number | null,
    lenght: number | null,
    coordenates: number | null,
) => {
    const _userId = AsyncStorage.getItem("@eupescador/userId");
    const token = AsyncStorage.getItem("@eupescador/token");
    const config = {
        headers:{Authorization:`Bearer ${token}`}
    }
    await fishLogService.post(
        '/fishLog', 
        {
            _userId,
            name,
            largeGroup,
            group,
            species,
            coordenates,
            photo,
            length,
            weight,
        },
        config
    );
}