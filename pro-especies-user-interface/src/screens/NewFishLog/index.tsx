import React, { useState, useEffect, FC } from "react";
import { ScrollView } from "react-native";
import { TopBar } from "../../components/TopBar";
import {
  NewFishLogContainer,
  ImageContainer,
  FishLogImage,
  TopIcon,
  IconBars,
  TextClick,
  InputContainer,
  InputView,
  InputBox,
  Input,
  CentralizerBoxView,
  HalfInputView,
  SendButtonView,
  SendButton,
  SendButtonText,
} from "./styles";
import * as ImagePicker from 'expo-image-picker'

export function NewFishLog({ navigation }: any) {
  // const [ fishPhoto , setFishPhoto ] = useState("");
  // const [ fishName , setFishName ] = useState("");
  // const [ fishLargeGroup , setFishLargeGroup ] = useState("");
  // const [ fishGroup , setFishGroup ] = useState("");
  // const [ fishSpecies , setFishSpecies ] = useState("");
  // const [ fishWeight , setFishMaxWeight ] = useState(0);
  // const [ fishLenght , setFishLenght ] = useState(0);
  // const [fishLogcoordenates , setFishLogCoordenates ] = useState(0);
  async function requestPermission() {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      <TextClick>É preciso permissão para colocar uma foto</TextClick>;
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
}
  return (
    <NewFishLogContainer>
      <TopBar title="Novo Registro" />
      <ScrollView>
        <ImageContainer>
          <FishLogImage source={require('../../assets/selectPicture.png')} />
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
            <Input placeholder="Grande Grupo" />
            <IconBars name="keyboard-arrow-down" />
            <InputBox />
          </InputView>
          <InputView>
            <Input placeholder="Grupo" />
            <IconBars name="keyboard-arrow-down" />
            <InputBox />
          </InputView>
          <InputView>
            <Input placeholder="Espécie" />
            <InputBox />
          </InputView>
          <InputView>
            <Input placeholder="Nome" />
            <InputBox />
          </InputView>
          <InputView>
            <Input placeholder="Localização" />
            <IconBars name="map" />
            <InputBox />
          </InputView>
          <CentralizerBoxView>
            <HalfInputView>
              <Input placeholder="Peso" />
            </HalfInputView>
            <HalfInputView>
              <Input placeholder="Comprimento (cm)" />
            </HalfInputView>
          </CentralizerBoxView>
        </InputContainer>
        <SendButtonView>
          <SendButton>
            <SendButtonText>Enviar</SendButtonText>
          </SendButton>
        </SendButtonView>
      </ScrollView>
    </NewFishLogContainer>
  )
}
