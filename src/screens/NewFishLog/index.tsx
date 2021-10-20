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
  Dropdown,
} from './styles';
import { createFishLog } from '../../services/fishLogService/createFishLog';
import { GetWikiFishes } from '../../services/wikiServices/getWikiFishes';

export function NewFishLog({ navigation }: any) {
  const [fishPhoto, setFishPhoto] = useState<string | undefined | null>(null);
  const [fishName, setFishName] = useState<string | null>(null);
  const [fishLargeGroup, setFishLargeGroup] = useState<string>('');
  const [fishGroup, setFishGroup] = useState<string | null>(null);
  const [fishSpecies, setFishSpecies] = useState<string | null>(null);
  const [fishWeight, setFishMaxWeight] = useState<number | null>(null);
  const [fishLenght, setFishLenght] = useState<number | null>(null);
  const [fishLatitude, setFishLatitude] = useState<number | null>(null);
  const [fishLongitude, setFishLongitude] = useState<number | null>(null);

  const [largeGroupOptions, setLargeGroupOptions] = useState<any[]>([]);
  const [groupOptions, setGroupOptions] = useState<any[]>(['cascudo', 'escama', 'peixe', 'arraia e ta deboa']);
  const [speciesOptions, setSpeciesOptions] = useState<any[]>([]);

  const getLargeGroupsOptions = async () => {
    let newGroups: string[] = [];
    try {
      const wikiData = await GetWikiFishes();
      for (let i = 0; i < wikiData.length; i++) {
        if (!newGroups.includes(wikiData[i].largeGroup))
          //console.log(wikiData[i]);
          newGroups.push(wikiData[i].largeGroup);
      }
      setLargeGroupOptions(newGroups);
      console.log("Grande Grupo: ", largeGroupOptions);
    } catch (error) {
      console.log(error);
    }
  }

  const getGroupsOptions = async () => {
    let newGroups: string[] = [];
    try {
      const wikiData = await GetWikiFishes();
      for (let i = 0; i < wikiData.length; i++) {
        if (!newGroups.includes(wikiData[i].group)) {
          newGroups.push(wikiData[i].group);
        }
      }
      setGroupOptions(newGroups);
      console.log("Grupo: ", groupOptions);
    } catch (error) {
      console.log(error);
    }
  }



  const getSpeciesOptions = async () => {
    let newSpecies: string[] = [];
    try {
      const wikiData = await GetWikiFishes();
      for (let i = 0; i < wikiData.length; i++) {
        if (!newSpecies.includes(wikiData[i].scientificName)) {
          newSpecies.push(wikiData[i].scientificName);
        }
      }
      setSpeciesOptions(newSpecies);
      console.log("Especies: ", speciesOptions);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getLargeGroupsOptions();
    getGroupsOptions();
    getSpeciesOptions();
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
      console.log(typeof fishPhoto);
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
            <Input
              placeholder="Grande Grupo"
              onChangeText={setFishLargeGroup}
              value={fishLargeGroup}
            />
            <Dropdown options={groupOptions} style={{width:30}} dropdownStyle={{width:100}}/>
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
        <SendButtonView>
          <SendButton onPress={sendFishLogData}>
            <SendButtonText>Enviar</SendButtonText>
          </SendButton>
        </SendButtonView>
      </ScrollView>
    </NewFishLogContainer>
  );
}
