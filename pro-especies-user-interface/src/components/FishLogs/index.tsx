import React, { useState } from "react";
import { ButtonView, Container ,ExportButton, ExportButtonText, LeftContainer, FilterContainer, DownloadIcon, FilterIcon, AddLogButton, AddIcon, AddLogView, AddButtonView, TouchableTitle, TitleText, OptionsView, NotLoggedText, FishCardList } from "./styles";
import { GetAllFishLogs } from "../../services/fishLogServices/getAllLogs";
import { ScrollView } from "react-native-gesture-handler";

// TouchableTitle, TitleText, TitleHighlight
interface Props {
  token: string;
}

export const FishLogs = ({token}: Props) => {

  const getFishLogs = async () => {

  }

  const handleExport = async () => {

  }
  const handleAddLog = async () => {

  }
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
      <ScrollView>
        
      </ScrollView>

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
