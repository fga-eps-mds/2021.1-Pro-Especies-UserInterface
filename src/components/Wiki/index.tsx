import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { FishCard, IFish } from '../FishCard';
import { useNavigation } from '@react-navigation/native';
import { GetWikiFishes } from '../../services/wikiServices/getWikiFishes';
import {
  IconFilter,
  SearchBarContainer,
  RowContainer,
  TouchableFilter,
  TextFilter,
  NoResultContainer,
  BoldText,
  RegularText,
  SearchImage,
  FishBodyContainer,
} from './styles';
import { FishList } from '../FishList';

export const Wiki = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [wiki, setWiki] = useState(false);
  const [filter, setFilter] = useState(false);
  const [fishes, setFishes] = useState<IFish[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const updateFishes = async () => {
    try {
      const data = await GetWikiFishes();
      setFishes(data);
    } catch (error: any) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleNavigation = (id: string) => {
    navigation.navigate(
      'WikiFish' as never,
      {
        fish_id: id,
      } as never,
    );
  };

  useEffect(() => {
    updateFishes();
  }, []);

  return (
    <FishBodyContainer>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <RowContainer>
            <SearchBarContainer
              placeholder="Pesquisar"
              placeholderTextColor="rgba(32, 46, 53, 0.3)"
              onChangeText={setSearchQuery}
              value={searchQuery}
              iconColor="#202E35"
            />
            <TouchableFilter
              onPress={() => {
                setFilter(false);
              }}
            >
              <TextFilter filter={filter}>Filtro</TextFilter>
            </TouchableFilter>
            <IconFilter name="filter-list" />
          </RowContainer>
          {fishes.filter(fish => {
            if (
              !searchQuery ||
              fish.commonName
                .toLowerCase()
                .includes(searchQuery.toLowerCase().trim()) ||
              fish.scientificName
                .toLowerCase()
                .includes(searchQuery.toLowerCase().trim())
            ) {
              return fish;
            }
          }).length ? (
            <FishList
              fishData={fishes.filter(item => {
                if (
                  !searchQuery ||
                  item.commonName
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase().trim()) ||
                  item.scientificName
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase().trim())
                ) {
                  return item;
                }
              })}
              type="fishWiki"
              handleNavigation={handleNavigation}
            />
          ) : (
            <NoResultContainer>
              <SearchImage source={require('../../assets/search.png')} />
              <BoldText>Não encontramos nada com o termo digitado</BoldText>
              <RegularText>
                Por favor, verifique sua pesquisa e tente novamente para obter
                resultados.
              </RegularText>
            </NoResultContainer>
          )}
        </>
      )}
    </FishBodyContainer>
  );
};
