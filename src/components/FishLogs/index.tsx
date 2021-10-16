import React, { useEffect, useState } from "react";
import { ButtonView, Container ,ExportButton, ExportButtonText, LeftContainer, FilterContainer, DownloadIcon, FilterIcon, AddLogButton, AddIcon, AddLogView, AddButtonView, TouchableTitle, TitleText, OptionsView, NotLoggedText, FishCardList } from "./styles";
import { GetAllFishLogs } from "../../services/fishLogServices/getAllLogs";
import { FishCard, IFishLog } from "../FishCard";
import { ActivityIndicator } from "react-native";
import { useNavigation } from '@react-navigation/native';

// TouchableTitle, TitleText, TitleHighlight
interface Props {
  token: string;
}


export const FishLogs = ({token}: Props) => {
  const [fishLog, setFishLog] = useState<IFishLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  const getFishLogs = async () => {
    try {
      const data = await GetAllFishLogs(token);
      setFishLog(data);
    } catch (error: any) {
      console.log(error);
    }
    setIsLoading(false);
  }

  const handleNavigation = (id: string) => {
    navigation.navigate("FishLog" as never, {
      log_id: id,
    } as never);
  }

  const handleExport = async () => {

  }
  const handleAddLog = async () => {

  }

  useEffect(() => {
    getFishLogs();
  }, []);

  return (
    <Container>
      {
        isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : (
          <>
            <OptionsView >
            <TouchableTitle onPress={()=> {}}>
                <TitleText >Filtros</TitleText>  
                <FilterIcon name="filter-list"/> 
            </TouchableTitle>   
            <ButtonView>
              <ExportButton onPress={handleExport}>
                <DownloadIcon name="file-download"/>
                <ExportButtonText>Exportar Registros</ExportButtonText>
              </ExportButton>
            </ButtonView>
          </OptionsView>
          <FishCardList
            data={fishLog}
            renderItem={({ item }) => <FishCard fishLog={item} cardFunction={()=>{handleNavigation(item._id)}}/>}
            keyExtractor={item => item._id}
          />
          <AddButtonView >
            <AddLogButton onPress={handleAddLog}>  
                <AddLogView>
                  <AddIcon name="add"></AddIcon>
                </AddLogView>
            </AddLogButton>
          </AddButtonView>
        </>
        )
      }
    </Container>
  )
}
