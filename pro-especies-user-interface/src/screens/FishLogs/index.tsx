import React, { useState } from "react";
import { ButtonView, ExportButton, ExportButtonText, LeftContainer, FilterContainer, DownloadIcon, FilterIcon, AddLogButton, AddIcon, AddLogView, AddButtonView, TouchableTitle, TitleText, OptionsView, NotLoggedText } from "./styles";
import { GetAllFishLogs } from "../../services/fishLogServices/getAllLogs";
import { Container } from "../Login/styles";
import { TopBar } from "../../components/TopBar";
import { ScrollView } from "react-native-gesture-handler";
import { TwoTouchablesContainer  } from "../../components/TwoTouchablesContainer";
import AsyncStorage from "@react-native-async-storage/async-storage";

// TouchableTitle, TitleText, TitleHighlight

export function FishLogs(){

  const [isLogged, setIsLogged] = useState<Boolean>();

  const getData = async () => {
    const token = await AsyncStorage.getItem("@eupescador/token");
    const userAdmin = await AsyncStorage.getItem("@eupescador/userAdmin");
    (token) ? setIsLogged(true): setIsLogged(false);
    
  }

  const handleExport = async () => {

  }
  const handleAddLog = async () => {

  }
  return (
    <Container>
      { isLogged ? 
      <>  
        <LeftContainer >
          <TwoTouchablesContainer title0="Biblioteca de Peixes" title1="Registros" ></TwoTouchablesContainer>
        </LeftContainer>
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
      </> 
      :
      <NotLoggedText>É preciso acessar uma conta para visualizar esse recurso</NotLoggedText>
      }
      
    </Container>
  )
}
