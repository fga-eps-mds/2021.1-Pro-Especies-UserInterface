import React, { useState, useEffect, FC } from "react";
import { ScrollView } from "react-native";
import { TopBar } from "../../components/TopBar";
import {
    NewFishLogContainer,
    ImageContainer,
    FishLogImage,
    MaterialIcon,
    MaterialIconBars,
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
// import DropDownPicker from 'react-native-dropdown-picker'

export function NewFishLog() {
    // const [ fishPhoto , setFishPhoto ] = useState("");
    // const [ fishName , setFishName ] = useState("");
    // const [ fishLargeGroup , setFishLargeGroup ] = useState("");
    // const [ fishGroup , setFishGroup ] = useState("");
    // const [ fishSpecies , setFishSpecies ] = useState("");
    // const [ fishWeight , setFishMaxWeight ] = useState(0);
    // const [ fishLenght , setFishLenght ] = useState(0);
    // const [fishLogcoordenates , setFishLogCoordenates ] = useState(0);

    return (
        <NewFishLogContainer>
            <TopBar title="Novo Registro" />
            <ScrollView>
                <ImageContainer>
                    <FishLogImage source={require('../../assets/selectPicture.png')} />
                </ImageContainer>
                    <ImageContainer>
                    <MaterialIcon name="photo"/> <TextClick>Selecionar Foto</TextClick>
                    <MaterialIcon name="camera" /> <TextClick>Tirar Foto</TextClick>
                </ImageContainer>
                <InputContainer>
                    <InputView>
                        <Input placeholder="Grande Grupo" />
                        <MaterialIconBars name="keyboard-arrow-down" />
                        <InputBox />
                    </InputView>
                    <InputView>
                        <Input placeholder="Grupo" />
                        <MaterialIconBars name="keyboard-arrow-down" />
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
                        <MaterialIconBars name="map" />
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
