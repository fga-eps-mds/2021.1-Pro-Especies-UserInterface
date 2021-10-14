import React, { useEffect, useState } from "react";
import { ButtonView, Container ,ExportButton, ExportButtonText, LeftContainer, FilterContainer, DownloadIcon, FilterIcon, AddLogButton, AddIcon, AddLogView, AddButtonView, TouchableTitle, TitleText, OptionsView, NotLoggedText, FishCardList } from "./styles";
import { GetAllFishLogs } from "../../services/fishLogServices/getAllLogs";
import { ScrollView } from "react-native-gesture-handler";
import { FishCard, IFishLog } from "../FishCard";

// TouchableTitle, TitleText, TitleHighlight
interface Props {
  token: string;
}


export const FishLogs = ({token}: Props) => {
  const [fishLog, setFishLog] = useState<IFishLog[]>([]);

  const getFishLogs = async () => {
    try {
      const data = await GetAllFishLogs(token);
      setFishLog(data);
    } catch (error: any) {
        console.log(error);
    }
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
        renderItem={({ item }) => <FishCard fishLog={item} />}
        keyExtractor={item => item._id}
      />

      <AddButtonView >
        <AddLogButton onPress={handleAddLog}>  
            <AddLogView>
              <AddIcon name="add"></AddIcon>
            </AddLogView>
        </AddLogButton>
      </AddButtonView>
    </Container>
  )
}
