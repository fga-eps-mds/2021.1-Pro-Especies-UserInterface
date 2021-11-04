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
import { FilterButton } from '../FilterButton';

interface Props {
  token: string;
  navigation: any;
  filterQuery: any;
}

export const FishLogs = (
  { token,
    navigation,
    filterQuery,
  }: Props
) => {
  const [fishLog, setFishLog] = useState<IFishLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasDraft, setHasDraft] = useState(false);
  // const navigation = useNavigation();

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
          <OptionsView>
          <FilterButton
              url={filterQuery}
              navigation={navigation}
              screen='LogFilter'
            />
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
            <AddLogButton onPress={handleAddLog}>
              <AddLogView>
                <AddIcon name="add" />
              </AddLogView>
            </AddLogButton>
          </AddButtonView>
        </>
      )}
    </Container>
  );
};
