import AsyncStorage from "@react-native-async-storage/async-storage";
import { Buffer } from "buffer";
import { fishLogService } from "./fishService";

export const createFishLog = async (
  photoString: string | null | undefined,
  name: string | null,
  largeGroup: string | null,
  group: string | null,
  species: string | null,
  weight: number | null,
  length: number | null,
  latitude: number | null,
  longitude: number | null
) => {
  const userId = await AsyncStorage.getItem("@eupescador/userId");
  const token = await AsyncStorage.getItem("@eupescador/token");
  let photo = null;

  const coordenates = {
    latitude: latitude,
    longitude: longitude,
  };
  
  if(photoString){
    photo = Buffer.from(photoString, "base64");
  }

  await fishLogService.post(
    "/fishLog/",
    {
      userId,
      name,
      largeGroup,
      group,
      species,
      coordenates,
      photo,
      length,
      weight,
    },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};
