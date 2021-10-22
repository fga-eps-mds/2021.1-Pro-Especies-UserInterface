import React, { useState } from 'react';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
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
  AddLocaleButton,
  AddLocaleButtonLabel,
  AddLocaleButtonIcon,
  NewFishlogScroll,
} from './styles';
import { createFishLog } from '../../services/fishLogService/createFishLog';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-paper';

export function NewFishLog({ navigation }: any) {
  const [fishPhoto, setFishPhoto] = useState<string | undefined | null>(null);
  const [fishName, setFishName] = useState<string | null>(null);
  const [fishLargeGroup, setFishLargeGroup] = useState<string | null>(null);
  const [fishGroup, setFishGroup] = useState<string | null>(null);
  const [fishSpecies, setFishSpecies] = useState<string | null>(null);
  const [fishWeight, setFishMaxWeight] = useState<number | null>(null);
  const [fishLenght, setFishLenght] = useState<number | null>(null);
  const [fishLatitude, setFishLatitude] = useState<number | null>(null);
  const [fishLongitude, setFishLongitude] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true);
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

      setIsLoading(false);
      alertMessage = 'Registro criado com sucesso!';
      navigation.goBack();
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
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return;
    }
    setIsLoading(true);
    let loc = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
    setIsLoading(false);
    navigation.navigate("Maps", { loc })
  }

  return (
    <NewFishLogContainer>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) :
        (< NewFishlogScroll >
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
                placeholder="Grande Grupo"
                onChangeText={setFishLargeGroup}
              />
              <InputBox />
            </InputView>
            <InputView>
              <Input placeholder="Grupo" onChangeText={setFishGroup} />
              <InputBox />
            </InputView>
            <InputView>
              <Input placeholder="Espécie" onChangeText={setFishSpecies} />
              <InputBox />
            </InputView>
            <InputView>
              <Input placeholder="Nome" onChangeText={setFishName} />
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
          <AddLocaleButton onPress={handleOpenMap}>
            <AddLocaleButtonIcon name="map" />
            <AddLocaleButtonLabel> Abrir mapa</AddLocaleButtonLabel>
          </AddLocaleButton>
          <SendButtonView>
            <SendButton onPress={sendFishLogData}>
              <SendButtonText>Enviar</SendButtonText>
            </SendButton>
          </SendButtonView>
        </NewFishlogScroll>)
      }
    </NewFishLogContainer >
  );
}
