import React, { useState, useEffect } from 'react';
import { Buffer } from "buffer";
import { Alert, ScrollView, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import { GetWikiFishes } from '../../services/wikiServices/getWikiFishes';
import { RegularText } from '../../components/RegularText';
import { HalfToneText } from '../../components/HalfToneText';
import { ActivityIndicator } from 'react-native-paper';
import { createFishLog } from '../../services/fishLogService/createFishLog';
import { GetOneFishLog } from '../../services/fishLogService/getOneFishLog';
import { UpdateFishLog } from '../../services/fishLogService/updateFishLog';
import {
  NewFishLogContainer,
  ImageContainer,
  FishLogImage,
  TopIcon,
  TextClick,
  InputContainer,
  InputView,
  InputBox,
  Input,
  RowView,
  BoxView,
  HalfInputView,
  SendButtonView,
  SendButton,
  SendButtonText,
  OptionList,
  OptionsContainer,
  OptionListItem,
  AddLocaleButton,
  AddLocaleButtonLabel,
  AddLocaleButtonIcon,
  NewFishlogScroll,
} from './styles';


export interface IFish {
  _id: string;
  largeGroup: string;
  group: string;
  commonName: string;
  scientificName: string;
  family: string;
  food: string;
  habitat: string;
  maxSize: number;
  maxWeight: number;
  isEndemic: string;
  isThreatened: string;
  hasSpawningSeason: string;
  wasIntroduced: string;
  funFact: string;
  photo: string;
}

export function NewFishLog({ navigation, route }: any) {
  const [isNew, setIsNew] = useState(false);
  const [isAdmin, setIsAdmin] = useState<Boolean>(false);
  const [fishes, setFishes] = useState<IFish[]>([]);
  const [fishPhoto, setFishPhoto] = useState<string | undefined | undefined>();
  const [fishName, setFishName] = useState<string | undefined>();
  const [fishLargeGroup, setFishLargeGroup] = useState<string | undefined>("");
  const [fishGroup, setFishGroup] = useState<string | undefined>();
  const [fishSpecies, setFishSpecies] = useState<string | undefined>();
  const [fishWeight, setFishWeight] = useState<string | undefined>();
  const [fishLength, setFishLength] = useState<string | undefined>();
  const [fishLatitude, setFishLatitude] = useState<string | undefined>();
  const [fishLongitude, setFishLongitude] = useState<string | undefined>();
  const [dropLargeGroup, setDropLargeGroup] = useState(false);
  const [dropGroup, setDropGroup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [userId, setUserId] = useState("");

  const getFishOptions = async () => {
    let newFishes: IFish[] = [];
    try {
      const wikiData = await GetWikiFishes();
      for (let i = 0; i < wikiData.length; i++) {
        if (!newFishes.includes(wikiData[i])) {
          newFishes.push(wikiData[i]);
        }
      }
      setFishes(newFishes);
    } catch (error) {
      console.log(error);
    }
  };

  const setFishProps = async (fish: IFish) => {
    setFishName(fish.commonName);
    setFishSpecies(fish.scientificName);
    setFishLargeGroup(fish.largeGroup);
    setFishGroup(fish.group);
  }

  const getData = async () => {
    const id = await AsyncStorage.getItem("@eupescador/userId");
    const userAdmin = await AsyncStorage.getItem("@eupescador/userAdmin");
    const token = await AsyncStorage.getItem("@eupescador/token");
    if (token) {
      setUserToken(token);
      getFishLogProperties(token);
    }
    if (id)
      setUserId(id);
    if (userAdmin === "true")
      setIsAdmin(true);
    else
      setIsAdmin(false);
  }

  const getFishLogProperties = async (token: string) => {
    try {
      const { log_id } = route.params;
      const log = await GetOneFishLog(log_id, token);
      if (log.photo) {
        const log64 = Buffer.from(log.photo).toString('base64');
        setFishPhoto(log64);
      }
      setFishName(log?.name || undefined);
      setFishSpecies(log?.species || undefined);
      setFishLargeGroup(log?.largeGroup || undefined);
      setFishGroup(log?.group || undefined);
      setFishWeight(log?.weight?.toString() || undefined);
      setFishLength(log?.length?.toString() || undefined);
      setFishLongitude(log?.coordenates?.longitude?.toString() || undefined);
      setFishLatitude(log?.coordenates?.latitude?.toString() || undefined);
    } catch (error) {
      console.log(error);
    }
  };

  async function requestPermission() {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert('Error', 'É preciso permissão para colocar uma foto');
    }
  }

  async function openCamera() {
    await requestPermission();

    const pickerResult = await ImagePicker.launchCameraAsync({
      base64: true,
      allowsEditing: true,
      quality: 0.5,
    });
    if (pickerResult.cancelled === true) {
      return;
    }
    setFishPhoto(pickerResult.base64);
  }

  async function pickImage() {
    await requestPermission();

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 0.5,
      aspect: [1, 1],
      base64: true,
    });

    if (pickerResult.cancelled === true) {
      return;
    }
    setFishPhoto(pickerResult.base64);
  }

  const handleEditFishLog = async () => {
    let alertMessage = '';
    let alertTitle = '';
    const { log_id } = route.params;
    let reviewed = false;
    if (isAdmin) {
      reviewed = true;
    }

    try {
      const res = await UpdateFishLog(
        log_id,
        fishName,
        fishLargeGroup,
        fishGroup,
        fishSpecies,
        fishLatitude,
        fishLongitude,
        fishPhoto,
        fishLength,
        fishWeight,
        reviewed,
        isAdmin
      );
      alertMessage = "Registro atualizado com sucesso";
      alertTitle = 'Editar registro'
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{ name: 'WikiFishlogs' }],
      });
      navigation.dispatch(resetAction);
    } catch (error) {
      console.log(error);
      if (error.response.status === 400)
        alertTitle = 'Sem informação'
      alertMessage = error.response.data.message;
    }
    if (alertMessage) {
      Alert.alert(alertTitle, alertMessage, [
        {
          text: 'Ok',
        },
      ]);
    }
  }

  async function handleCreateFishLog() {
    let alertMessage = '';
    try {
      setIsLoading(true);
      await createFishLog(
        fishPhoto,
        fishName,
        fishLargeGroup,
        fishGroup,
        fishSpecies,
        fishWeight,
        fishLength,
        fishLatitude,
        fishLongitude,
      );

      setIsLoading(false);
      alertMessage = 'Registro criado com sucesso!';
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{ name: 'WikiFishlogs' }],
      });
      navigation.dispatch(resetAction);
    } catch (error: any) {
      setIsLoading(false);
      console.log(error);
      if (error.response.status === 400)
        alertMessage =
          'Informe no mínimo o grande grupo, espécie ou foto do peixe';
      else if (error.response.status === 413)
        alertMessage = 'Falha ao criar registro! Arquivo muito grande';
      else alertMessage = 'Falha ao criar registro!';
    }
    if (alertMessage) {
      Alert.alert('Registro', alertMessage, [
        {
          text: 'Ok',
        },
      ]);
    }
  }

  const handleOpenMap = async () => {
    const { log_id, name } = route.params;
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        "Sem permissão de localização",
        "Para abrir o mapa é necessário que você aceite a permissão de localização."
      );
      return;
    }
    setIsLoading(true);
    let loc = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
    setIsLoading(false);
    if (!fishLatitude && !fishLongitude) {
      setFishLatitude(loc.coords.latitude.toString());
      setFishLongitude(loc.coords.longitude.toString());
    }
    const latitude = fishLatitude ? parseFloat(fishLatitude) : loc.coords.latitude;
    const longitude = fishLongitude ? parseFloat(fishLongitude) : loc.coords.longitude;
    navigation.navigate("Maps", {
      isNew,
      isAdmin,
      fishPhoto,
      fishName,
      fishLargeGroup,
      fishGroup,
      fishSpecies,
      fishWeight,
      fishLength,
      fishLatitude: latitude,
      fishLongitude: longitude,
      log_id,
      name
    })
  }

  useEffect(() => {
    getFishOptions();
    const { data, isNewRegister } = route.params;
    setIsNew(isNewRegister);
    if (data != null) {
      setIsAdmin(data.isAdmin);
      setFishPhoto(data.fishPhoto);
      setFishName(data.fishName);
      setFishLargeGroup(data.fishLargeGroup);
      setFishGroup(data.fishGroup);
      setFishSpecies(data.fishSpecies)
      setFishWeight(data.fishWeight);
      setFishLength(data.fishLength);
      setFishLatitude(data.fishLatitude.toString());
      setFishLongitude(data.fishLongitude.toString());
      if (data.photo) {
        const log64 = Buffer.from(data.photo).toString('base64');
        setFishPhoto(log64);
      }
    }
    else {
      if (!isNewRegister) {
        getData();
      }
    }
  }, [route.params]);

  const nameList = () => {
    return fishes.filter((item) => {
      if (item.commonName.toLowerCase().includes(fishName.toLowerCase().trim())) {
        if (fishGroup) {
          if (item.group.toLowerCase().includes(fishGroup.toLowerCase())) {
            return item;
          }
        }
        else if (fishLargeGroup) {
          if (item.largeGroup.toLowerCase().includes(fishLargeGroup.toLowerCase())) {
            return item;
          }
        } else
          return item;
      }
    }).map((item, index) => {
      return (
        <OptionListItem key={index} onPress={() => setFishProps(item)}>
          <RegularText text={item.commonName} />
        </OptionListItem>
      );
    });
  };

  const largeGroupList = () => {
    let fishesLargeGroup = fishes.map((item) => item.largeGroup);
    fishesLargeGroup = [...new Set(fishesLargeGroup)];
    return fishesLargeGroup.map((item, index) => {
      return (
        <OptionListItem key={index} onPress={() => {
          setFishLargeGroup(item)
          setDropLargeGroup(false)
        }
        }>
          <RegularText text={item} />
        </OptionListItem>
      );
    });
  };

  const groupList = () => {
    const filteredGroupFishes = fishes.filter((item) => {
      if (fishLargeGroup) {
        if (item.largeGroup.toLowerCase().includes(fishLargeGroup.toLowerCase().trim())) {
          return item;
        }
      } else {
        return item;
      }
    })
    let fishesGroup = filteredGroupFishes.map((item) => item.group);
    fishesGroup = [...new Set(fishesGroup)];
    return fishesGroup.map((item, index) => {
      return (
        <OptionListItem key={index} onPress={() => {
          setFishGroup(item)
          setDropGroup(false)
        }
        }>
          <RegularText text={item} />
        </OptionListItem>
      );
    });
  };

  return (
    <NewFishLogContainer>

      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) :
        (<ScrollView>
          <ImageContainer>
            {fishPhoto ? (
              <FishLogImage
                source={{ uri: `data:image/png;base64,${fishPhoto}` }}
              />
            ) : (
              <FishLogImage source={require('../../assets/selectPicture.png')} />
            )}
          </ImageContainer>
          <ImageContainer onPress={pickImage}>
            <TopIcon name="photo" />
            <TextClick>Selecionar Foto</TextClick>
          </ImageContainer>
          <ImageContainer onPress={openCamera}>
            <TopIcon name="camera" />
            <TextClick>Tirar Foto</TextClick>
          </ImageContainer>

          <InputContainer>
            <InputView>
              <Input
                placeholder="Nome"
                value={fishName}
                onChangeText={setFishName}
              />
              <InputBox />
            </InputView>
            {
              (fishName && fishes.filter((item) => {
                if (item.commonName.toLowerCase().includes(fishName.toLowerCase().trim())) {
                  if (fishGroup) {
                    if (item.group.toLowerCase().includes(fishGroup.toLowerCase())) {
                      return item;
                    }
                  }
                  else if (fishLargeGroup) {
                    if (item.largeGroup.toLowerCase().includes(fishLargeGroup.toLowerCase())) {
                      return item;
                    }
                  } else
                    return item;
                }
              }).length) ? (
                <OptionsContainer>
                  <OptionList showsVerticalScrollIndicator>{nameList()}</OptionList>
                </OptionsContainer>
              ) : (null)
            }

            <InputView>
              <Input
                placeholder="Espécie"
                value={fishSpecies}
                onChangeText={setFishSpecies}
              />
              <InputBox />
            </InputView>

            <TouchableOpacity onPress={() => setDropLargeGroup(!dropLargeGroup)}>
              <InputView>
                <View style={{ marginLeft: 4, width: "95%" }}>
                  {
                    fishLargeGroup ? (
                      <RegularText text={fishLargeGroup ? fishLargeGroup : ""} />
                    ) :
                      (<HalfToneText text="Grande Grupo" />)
                  }
                </View>
                <InputBox />
              </InputView>
            </TouchableOpacity>
            {
              (dropLargeGroup && fishes.length) ? (
                <OptionsContainer>
                  <OptionList showsVerticalScrollIndicator>{largeGroupList()}</OptionList>
                </OptionsContainer>
              ) : (null)
            }

            <TouchableOpacity onPress={() => setDropGroup(!dropGroup)}>
              <InputView>
                <View style={{ marginLeft: 4, width: "95%" }}>
                  {
                    fishGroup ? (
                      <RegularText text={fishGroup ? fishGroup : ""} />
                    ) :
                      (<HalfToneText text="Grupo" />)
                  }
                </View>
                <InputBox />
              </InputView>
            </TouchableOpacity>
            {
              (dropGroup && fishes.filter((item) => {
                if (fishLargeGroup) {
                  if (item.largeGroup.toLowerCase().includes(fishLargeGroup.toLowerCase().trim())) {
                    return item;
                  }
                } else {
                  return item;
                }
              }).length) ? (
                <OptionsContainer>
                  <OptionList showsVerticalScrollIndicator>{groupList()}</OptionList>
                </OptionsContainer>
              ) : (null)
            }

            <BoxView>
              <RowView>
                <HalfInputView>
                  <Input
                    placeholder="Peso (kg)"
                    value={fishWeight}
                    keyboardType="numeric"
                    onChangeText={setFishWeight}
                  />
                </HalfInputView>
                <HalfInputView>
                  <Input
                    placeholder="Comprimento (cm)"
                    value={fishLength}
                    keyboardType="numeric"
                    onChangeText={setFishLength}
                  />
                </HalfInputView>
              </RowView>
            </BoxView>
          </InputContainer>
          <AddLocaleButton onPress={handleOpenMap}>
            <AddLocaleButtonIcon name="map" />
            <AddLocaleButtonLabel> {fishLatitude && fishLongitude ? "Alterar" : "Adicionar"} Localização </AddLocaleButtonLabel>
          </AddLocaleButton >
          <SendButtonView>
            <SendButton onPress={isNew ? handleCreateFishLog : handleEditFishLog}>
              {
                (isNew || !isAdmin) ? (
                  <SendButtonText>Enviar</SendButtonText>
                ) : (
                  <SendButtonText>Revisar</SendButtonText>
                )
              }
            </SendButton>
          </SendButtonView>
        </ScrollView >)
      }
    </NewFishLogContainer >
  );
}