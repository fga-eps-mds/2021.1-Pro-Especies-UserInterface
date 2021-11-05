import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  ButtonView,
  Container,
  ExportButton,
  ExportButtonText,
  DownloadIcon,
  FilterIcon,
  AddLogButton,
  AddIcon,
  AddLogView,
  AddButtonView,
  TouchableTitle,
  TitleText,
  OptionsView,
} from './styles';
import { GetAllFishLogs } from '../../services/fishLogService/getAllLogs';
import { IFishLog } from '../FishCard';
import { DraftButton } from '../DraftButton';
import { FishList } from '../FishList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { InstructionModal } from '../InstructionsModal';

interface Props {
  token: string;
}

export const FishLogs = ({ token }: Props) => {
  const [fishLog, setFishLog] = useState<IFishLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasDraft, setHasDraft] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const modalDescriptions = [
    "Na tela de biblioteca, você pode visualizar informações sobre os mais diversos peixes.",
    "Na tela de registro, você pode registrar informações sobre peixes que pescou em sua região, clicando no botão \“+\”, para ajudar o mapeamento das especécies.",
    "Seus registros serão avaliados por pesquisadores e os dados serão utilizadas no mapeamento e preservação de espécies."];
  const navigation = useNavigation();

  const getFishLogs = async () => {
    try {
      const data = await GetAllFishLogs(token);
      setFishLog(data);
    } catch (error: any) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const getDrafts = async () => {
    const drafts = await AsyncStorage.getItem('drafts');
    if (drafts)
      setHasDraft(drafts != '[]');
  }
  const handleNavigation = (id: string) => {
    navigation.navigate(
      'FishLog' as never,
      {
        log_id: id,
      } as never,
    );
  };

  const handleExport = async () => { };

  const handleAddLog = async () => {
    navigation.navigate("NewFishLog" as never, {
      isNewRegister: true,
      name: "Novo Registro",
    } as never);
  }

  useEffect(() => {
    getFishLogs();
    getDrafts();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <InstructionModal
            modalVisible={showModal}
            dismissModal={() => setShowModal(false)}
          />
          <OptionsView>
            <TouchableTitle onPress={() => { }}>
              <TitleText>Filtros</TitleText>
              <FilterIcon name="filter-list" />
            </TouchableTitle>
            <ButtonView>
              <ExportButton onPress={handleExport}>
                <DownloadIcon name="file-download" />
                <ExportButtonText>Exportar Registros</ExportButtonText>
              </ExportButton>
            </ButtonView>
          </OptionsView>
          {hasDraft ?
            <DraftButton /> :
            null
          }
          <FishList
            fishData={fishLog}
            type="fishLog"
            handleNavigation={handleNavigation}
          />
          <AddButtonView>
            <AddLogButton onPress={() => { setShowModal(true) }}>
              <AddLogView>
                <AddIcon name="help" />
              </AddLogView>
            </AddLogButton>
          </AddButtonView>
        </>
      )}
    </Container>
  );
};
