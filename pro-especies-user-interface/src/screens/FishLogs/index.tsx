import React, { useState } from "react";
import { ButtonView, ExportButton, ExportButtonText, LeftContainer, FilterContainer, DownloadIcon, FilterIcon, AddLogButton, AddIcon, AddLogView, AddButtonView } from "./styles";
import {} from "../../services/fishLogServices/getAllLogs";
import { Container } from "../Login/styles";
import { TopBar } from "../../components/TopBar";
import { ScrollView } from "react-native-gesture-handler";
import { TwoTouchablesContainer  } from "../../components/TwoTouchablesContainer";
import { OneTouchableTitle  } from "../../components/OneTouchableTitle";
import { View } from "react-native";

// TouchableTitle, TitleText, TitleHighlight

export function FishLogs(){

  const handleExport = async () => {

  }
  const handleAddLog = async () => {

  }
  return (
    <Container>
      <TopBar title="Registros"/>
      <LeftContainer >
        <TwoTouchablesContainer title0="Biblioteca de Peixes" title1="Registros" ></TwoTouchablesContainer>
      </LeftContainer>
      <View style={{backgroundColor: 'aqua', flex: 0.12, width:'100%', flexDirection:'row'}}>
        <ButtonView>
            <OneTouchableTitle  title="Filtros"/>
            <FilterIcon name="filter-list"/>
        </ButtonView>
          <ButtonView>
            <ExportButton onPress={handleExport}>
              <DownloadIcon name="file-download"/>
              <ExportButtonText>Exportar Registros</ExportButtonText>
            </ExportButton>
          </ButtonView>
      </View>
      <ScrollView>
        <AddIcon></AddIcon>
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
