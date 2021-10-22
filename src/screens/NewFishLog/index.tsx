import React, { useState, useEffect } from 'react';
import { Alert, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { TopBar } from '../../components/TopBar';
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
} from './styles';
import { createFishLog } from '../../services/fishLogService/createFishLog';
import { GetWikiFishes } from '../../services/wikiServices/getWikiFishes';
import { RegularText } from '../../components/RegularText';


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

export function NewFishLog({ navigation }: any) {
  const [fishPhoto, setFishPhoto] = useState<string | undefined | null>(null);
  const [fishName, setFishName] = useState<string>("");
  const [fishLargeGroup, setFishLargeGroup] = useState<string>("");
  const [fishGroup, setFishGroup] = useState<string>("");
  const [fishSpecies, setFishSpecies] = useState<string>("");
  const [fishWeight, setFishMaxWeight] = useState<number | null>(null);
  const [fishLenght, setFishLenght] = useState<number | null>(null);
  const [fishLatitude, setFishLatitude] = useState<number | null>(null);
  const [fishLongitude, setFishLongitude] = useState<number | null>(null);
  const [fishes, setFishes] = useState<IFish[]>([]);

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
  }

  const setFishProps = async (fish: IFish) => {
    setFishName(fish.commonName);
    setFishSpecies(fish.scientificName);
    setFishLargeGroup(fish.largeGroup);
    setFishGroup(fish.group);
  }

  useEffect(() => {
    getFishOptions();
  }, []);

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

  async function sendFishLogData() {
    let alertMessage = '';
    try {
      await createFishLog(
        fishPhoto,
        fishName,
        fishLargeGroup,
        fishGroup,
        fishSpecies,
        fishWeight,
        fishLenght,
        fishLatitude,
        fishLongitude,
      );

      alertMessage = 'Registro criado com sucesso!';
      navigation.goBack();
    } catch (error: any) {
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


  return (
    <NewFishLogContainer>
      <TopBar title="Novo Registro" />
      <ScrollView>
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
            <Input placeholder="Nome" value={fishName} onChangeText={setFishName} />
            <InputBox />
          </InputView>
          {
            (fishName && fishes.filter((item) => {
              if (
                item.commonName.toLowerCase().includes(fishName.toLowerCase().trim())
                && item.commonName.toLowerCase() != fishName.toLowerCase().trim()
              ) {
                return item;
              }
            }).length) ? (
              <OptionsContainer>
                <OptionList
                  data={fishes.filter((item) => {
                    if (
                      item.commonName.toLowerCase().includes(fishName.toLowerCase().trim())
                    ) {
                      return item;
                    }
                  })}
                  renderItem={({ item }) =>
                    <OptionListItem onPress={() => setFishProps(item)}>
                      <RegularText text={item.commonName} />
                    </OptionListItem>
                  }
                  keyExtractor={(item) => item._id}
                />
              </OptionsContainer>
            ) : (null)
          }

          <InputView>
            <Input placeholder="Espécie" value={fishSpecies} onChangeText={setFishSpecies} />
            <InputBox />
          </InputView>

          <InputView>
            <Input
              placeholder="Grande Grupo"
              value={fishLargeGroup}
              onChangeText={setFishLargeGroup}
            />
            <InputBox />
          </InputView>

          <InputView>
            <Input placeholder="Grupo" value={fishGroup} onChangeText={setFishGroup} />
            <InputBox />
          </InputView>

          <BoxView>
            <RowView>
              <HalfInputView>
                <Input
                  placeholder="Latitude"
                  keyboardType="numeric"
                  onChangeText={value => setFishLatitude(parseInt(value))}
                />
              </HalfInputView>
              <HalfInputView>
                <Input
                  placeholder="Longitude"
                  keyboardType="numeric"
                  onChangeText={value => setFishLongitude(parseInt(value))}
                />
              </HalfInputView>
            </RowView>
            <RowView>
              <HalfInputView>
                <Input
                  placeholder="Peso (kg)"
                  keyboardType="numeric"
                  onChangeText={value => setFishMaxWeight(parseInt(value))}
                />
              </HalfInputView>
              <HalfInputView>
                <Input
                  placeholder="Comprimento (cm)"
                  keyboardType="numeric"
                  onChangeText={value => setFishLenght(parseInt(value))}
                />
              </HalfInputView>
            </RowView>
          </BoxView>
        </InputContainer>
        <SendButtonView>
          <SendButton onPress={sendFishLogData}>
            <SendButtonText>Enviar</SendButtonText>
          </SendButton>
        </SendButtonView>
      </ScrollView>
    </NewFishLogContainer>
  );
}
