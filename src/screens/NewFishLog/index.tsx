import React, { useState, useEffect } from 'react';
import { Buffer } from "buffer";
import { Alert, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
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
} from './styles';
import { createFishLog } from '../../services/fishLogService/createFishLog';
import { GetOneFishLog } from '../../services/fishLogService/getOneFishLog';
import { UpdateFishLog } from '../../services/fishLogService/updateFishLog';

export function NewFishLog({ navigation, route }: any) {
  const [isNew, setIsNew] = useState(false);
  const [isAdmin, setIsAdmin] = useState<Boolean>(false);
  const [fishPhoto, setFishPhoto] = useState<string | undefined | null>(null);
  const [fishName, setFishName] = useState<string | null>(null);
  const [fishLargeGroup, setFishLargeGroup] = useState<string | null>(null);
  const [fishGroup, setFishGroup] = useState<string | null>(null);
  const [fishSpecies, setFishSpecies] = useState<string | null>(null);
  const [fishWeight, setFishWeight] = useState<number | null>(null);
  const [fishLength, setFishLength] = useState<number | null>(null);
  const [fishLatitude, setFishLatitude] = useState<number | null>(null);
  const [fishLongitude, setFishLongitude] = useState<number | null>(null);
  const [userToken, setUserToken] = useState("");
  const [userId, setUserId] = useState("");


  const getData = async () => {
    const id = await AsyncStorage.getItem("@eupescador/userId");
    const userAdmin = await AsyncStorage.getItem("@eupescador/userAdmin");
    const token = await AsyncStorage.getItem("@eupescador/token");
    if (token){
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
        const {log_id} = route.params;
        const log = await GetOneFishLog(log_id, token);
        if(log.photo){
          const log64 = Buffer.from(log.photo).toString('base64');
          setFishPhoto(log64);
        }
        setFishName(log.name);
        setFishSpecies(log.species);
        setFishLargeGroup(log.largeGroup);
        setFishGroup(log.group);
        setFishWeight(log.weight);
        setFishLength(log.length);
        setFishLongitude(log.coordenates.longitude);
        setFishLatitude(log.coordenates.latitude);
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
    const {log_id} = route.params;
    let reviewed = false;
      if(isAdmin){
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
          routes: [{ name: 'WikiFishlogs'}],
        });
        navigation.dispatch(resetAction);
      } catch (error) {
        console.log(error);
        if(error.response.status === 400)
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

      alertMessage = 'Registro criado com sucesso!';
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{ name: 'WikiFishlogs'}],
      });
      navigation.dispatch(resetAction);
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

  useEffect(() => {
    const { isNewRegister } = route.params;
    setIsNew(isNewRegister);
    if(!isNewRegister){
      getData();
    }
  }, []);

  return (
    <NewFishLogContainer>
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
              value={isNew ? null : fishLargeGroup}
              onChangeText={setFishLargeGroup}
            />
            <InputBox />
          </InputView>
          <InputView>
            <Input 
              placeholder="Grupo"
              value={isNew ? null : fishGroup}
              onChangeText={setFishGroup} 
            />
            <InputBox />
          </InputView>
          <InputView>
            <Input 
              placeholder="Espécie"
              value={isNew ? null : fishSpecies}
              onChangeText={setFishSpecies} 
            />
            <InputBox />
          </InputView>
          <InputView>
            <Input 
              placeholder="Nome" 
              value={isNew ? null : fishName}
              onChangeText={setFishName} 
            />
            <InputBox />
          </InputView>
          <BoxView>
            <RowView>
              <HalfInputView>
                <Input
                  placeholder="Latitude"
                  value={(isNew || !fishLatitude) ? null : JSON.stringify(fishLatitude)}
                  keyboardType="numeric"
                  onChangeText={value => setFishLatitude(parseInt(value))}
                />
              </HalfInputView>
              <HalfInputView>
                <Input
                  placeholder="Longitude"
                  value={(isNew || !fishLongitude) ? null : JSON.stringify(fishLongitude)}
                  keyboardType="numeric"
                  onChangeText={value => setFishLongitude(parseInt(value))}
                />
              </HalfInputView>
            </RowView>
            <RowView>
              <HalfInputView>
                <Input
                  placeholder="Peso (kg)"
                  value={(isNew || !fishWeight) ? null : JSON.stringify(fishWeight)}
                  keyboardType="numeric"
                  onChangeText={value => setFishWeight(parseInt(value))}
                />
              </HalfInputView>
              <HalfInputView>
                <Input
                  placeholder="Comprimento (cm)"
                  value={(isNew || !fishLength) ? null : JSON.stringify(fishLength)}
                  keyboardType="numeric"
                  onChangeText={value => setFishLength(parseInt(value))}
                />
              </HalfInputView>
            </RowView>
          </BoxView>
        </InputContainer>
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
      </ScrollView>
    </NewFishLogContainer>
  );
}