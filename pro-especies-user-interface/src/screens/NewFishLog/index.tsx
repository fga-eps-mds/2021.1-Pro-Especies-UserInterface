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
    CameraButtonContainer,
    CameraButton,
    CameraView,
} from "./styles";
import { Camera } from "expo-camera";

export function NewFishLog() {
    // const [ fishPhoto , setFishPhoto ] = useState("");
    // const [ fishName , setFishName ] = useState("");
    // const [ fishLargeGroup , setFishLargeGroup ] = useState("");
    // const [ fishGroup , setFishGroup ] = useState("");
    // const [ fishSpecies , setFishSpecies ] = useState("");
    // const [ fishWeight , setFishMaxWeight ] = useState(0);
    // const [ fishLenght , setFishLenght ] = useState(0);
    // const [fishLogcoordenates , setFishLogCoordenates ] = useState(0);
function CameraFish() {

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <CameraView/>;
  }
  if (hasPermission === false) {
    return <TextClick>Sem permissão para acessar a camera</TextClick>;
  }
  return (
    <CameraView>
      <Camera type={type}>
        <CameraButtonContainer>
          <CameraButton
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <IconBars name="flip-camera-ios"/> 
          </CameraButton>
        </CameraButtonContainer>
      </Camera>
    </CameraView>
  );
}

    return (
        <NewFishLogContainer>
            <TopBar title="Novo Registro" />
            <ScrollView>
                <ImageContainer>
                    <FishLogImage source={require('../../assets/selectPicture.png')} />
                </ImageContainer>
                <ImageContainer>
                    <TopIcon name="photo"/> 
                    <TextClick>Selecionar Foto</TextClick>
                </ImageContainer>
                <ImageContainer>
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
                            <Input placeholder="Peso"/>
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
