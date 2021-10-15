import React, { useState } from "react";
import { Alert, ScrollView } from "react-native";
import { TopBar } from "../../components/TopBar";
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
} from "./styles";
import * as ImagePicker from 'expo-image-picker'
import { createFishLog } from "../../services/fishLogService/createFishLog";

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
  async function requestPermission() {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert("Error", "É preciso permissão para colocar uma foto");
      return;
    }
  }

  async function openCamera() {
    requestPermission();

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
    requestPermission();

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
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
    let alertMessage = "";
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
        fishLongitude);

      alertMessage="Registro criado com sucesso!";
    }
    catch (error) {
      console.log(error);
      alertMessage="Falha ao criar registro!";
    }
    if (alertMessage) {
      Alert.alert(
          "Registro",
          alertMessage,
          [
              {
                  text: "Ok",
              }
          ]
      )
  }
  }

  return (
    <NewFishLogContainer>
      <TopBar title="Novo Registro" />
      <ScrollView>
        <ImageContainer>
          {
            fishPhoto ?
              <FishLogImage source={{ uri: `data:image/png;base64,${fishPhoto}` }} />
              :
              <FishLogImage source={require('../../assets/selectPicture.png')} />
          }
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
            <Input placeholder="Grande Grupo" onChangeText={setFishLargeGroup} />
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
                <Input placeholder="Latitude" keyboardType="numeric" onChangeText={(value) => setFishLatitude(parseInt(value))} />
              </HalfInputView>
              <HalfInputView>
                <Input placeholder="Longitude" keyboardType="numeric" onChangeText={(value) => setFishLongitude(parseInt(value))} />
              </HalfInputView>
            </RowView>
            <RowView>
              <HalfInputView>
                <Input placeholder="Peso (kg)" keyboardType="numeric" onChangeText={(value) => setFishMaxWeight(parseInt(value))} />
              </HalfInputView>
              <HalfInputView>
                <Input placeholder="Comprimento (cm)" keyboardType="numeric" onChangeText={(value) => setFishLenght(parseInt(value))} />
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
  )
}
