import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import CheckBox from '@react-native-community/checkbox';
import {
  ButtonView,
  Container,
  ExportButton,
  ExportButtonText,
  LeftContainer,
  FilterContainer,
  DownloadIcon,
  FilterIcon,
  AddLogButton,
  AddIcon,
  AddLogView,
  AddButtonView,
  TouchableTitle,
  TitleText,
  OptionsView,
  NotLoggedText,
  FishCardList,
  ExportAllView,
  ExportAllText,
  CancelButtonText,
  ExportSelectedView,
  ExportSelectedButton,
  ExportSelectedButtonView,
  DownloadIconBottom,
  ExportSelectedText,
} from './styles';
import { GetAllFishLogs } from '../../services/fishLogService/getAllLogs';
import { ExportFishLogs } from '../../services/fishLogService/exportFishLogs';
import { FishCard, IFishLog } from '../FishCard';

interface Props {
  token: string;
}

export const FishLogs = ({ token }: Props) => {
  const [fishLog, setFishLog] = useState<IFishLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [exportList, setExportList] = useState<string[]>([]);
  const [isCheck, setIsCheck] = useState(false);
  const [isExportMode, setIsExportMode] = useState(false);
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

  const handleNavigation = (id: string) => {
    navigation.navigate(
      'FishLog' as never,
      {
        log_id: id,
      } as never,
    );
  };

  const selectAllFunction = (value: boolean) => {
    setIsCheck(value);
    if (value) {
      fishLog.forEach((item) => {
        if (!exportList.includes(item._id)) {
          setExportList(arr => [...arr, item._id]);
        }
      });
    } else {
      setExportList([""]);
    }
  };

  const handleExport = async () => {
    setIsExportMode(!isExportMode);
  };

  const handleAddLog = async () => {
    navigation.navigate("NewFishLog" as never, {
      isNewRegister: true,
      name: "Novo Registro",
    } as never);
  };

  
  // const saveFile = async (fileUri: string) => {
  //   const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  //   if (status === "granted") {
  //     const asset = await MediaLibrary.createAssetAsync(fileUri)
  //     await MediaLibrary.createAlbumAsync("Download", asset, false)
  //   }
  // }
  // const downloadFile = () => {
  //   const uri = "http://techslides.com/demos/sample-videos/small.mp4"
  //   let fileUri = FileSystem.documentDirectory + "small.mp4";
  //   FileSystem.downloadAsync(uri, fileUri)
  //     .then(({ uri }) => {
  //       saveFile(uri);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     })
  // }




  const requestFileSystemPermission = async () => {
    // const fileUri: string = `$(FileSystem.documentDirectory)$(filename)`;
    // const downloadedFile: FileSystem.FileSystemDownloadResult = await
  const saveFile = async (csvFile: string) => {
    try{
      let fileUri = FileSystem.documentDirectory + "export.csv";
      console.log(fileUri);
      await FileSystem.writeAsStringAsync(fileUri, csvFile,{ encoding: FileSystem.EncodingType.UTF8 });
      const asset = await MediaLibrary.createAssetAsync(fileUri);
      await MediaLibrary.createAlbumAsync("ProEspecies", asset, false);
    }catch(error:any){
      console.log(error);
    }
  }

  const handleExportSelected = async () => {
    //pass
    
    try {
      // console.log(token);
      const file = await ExportFishLogs(token, exportList);
      saveFile(file);
    } catch (error: any) {
      console.log(error);
    }

    // console.log(exportList);
    // console.log(exportList.toString());
    // console.log(exportList.join());
  };


  const addExportList = (logId: string) => {
    setExportList(arr => [...arr, logId]);
  };

  const removeExportList = (logId: string) => {
    setExportList(exportList.filter(item => item !== logId));
  };

  useEffect(() => {
    getFishLogs();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <OptionsView>
            <TouchableTitle onPress={() => { }}>
              <TitleText>Filtros</TitleText>
              <FilterIcon name="filter-list" />
            </TouchableTitle>
            <ButtonView>
              <ExportButton onPress={handleExport}>
                {
                  isExportMode ? <>
                    <DownloadIcon name="cancel" />
                    <CancelButtonText >Cancelar</CancelButtonText>
                  </>

                    :
                    <>
                      <DownloadIcon name="file-download" />
                      <ExportButtonText>Exportar Registros</ExportButtonText>
                    </>

                }
              </ExportButton>
            </ButtonView>
          </OptionsView>
          <ExportAllView>

            {
              isExportMode ? <>
                <CheckBox value={isCheck} onValueChange={selectAllFunction} />
                <ExportAllText>Selecionar todos os registros</ExportAllText>
              </>
                : null
            }
          </ExportAllView>
          <FishCardList
            data={fishLog}
            renderItem={({ item }) => (
              <FishCard
                selectAll={isCheck}
                fishLog={item}
                isHidden={!isExportMode}
                cardFunction={() => {
                  handleNavigation(item._id);
                }}
                selectFunction={() => {
                  addExportList(item._id);
                }}
                deselectFunction={() => {
                  removeExportList(item._id);
                }}
              />
            )}
            keyExtractor={item => item._id}
          />
          {isExportMode ?
            <ExportSelectedView>
              <ExportSelectedButton onPress={handleExportSelected}>
                <ExportSelectedButtonView>
                  <ExportSelectedText>Exportar Selecionados</ExportSelectedText>
                  <DownloadIconBottom name="file-download" />
                </ExportSelectedButtonView>
              </ExportSelectedButton>
            </ExportSelectedView>
            : <AddButtonView>
              <AddLogButton onPress={handleAddLog}>
                <AddLogView>
                  <AddIcon name="add" />
                </AddLogView>
              </AddLogButton>
            </AddButtonView>
          }
        </>
      )}
    </Container>
  );
};
