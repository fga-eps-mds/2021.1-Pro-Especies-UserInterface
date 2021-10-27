import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { FishCard, IFish } from '../FishCard';
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
  FishCardList,
  FishBodyContainer,
} from './styles';
import { FilterButton } from '../FilterButton';

export const Wiki = (
  { navigation,
    filterQuery,
    fishMaxSize,
    fishMinSize,
    fishMaxWeight,
    fishMinWeight }: any
) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [wiki, setWiki] = useState(false);
  const [filter, setFilter] = useState(false);
  const [fishes, setFishes] = useState<IFish[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const updateFishes = async () => {
    try {
      const data = await GetWikiFishes(filterQuery);
      setFishes(data);
    } catch (error: any) {
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    updateFishes();
  }, []);

  const checkSizes = (maxSize: any, minSize: any, fishSize: any) => {
    if (typeof maxSize != undefined && typeof minSize != undefined) {
      if (fishSize >= minSize && fishSize <= maxSize) {
        return true;
      }
      return false;
    } else if (typeof minSize != undefined) {
      if (fishSize >= minSize) {
        return true;
      }
      return false;
    } else if (typeof maxSize != undefined) {
      if (fishSize <= maxSize) {
        return true;
      }
      return false;
    } else {
      return true;
    }
  };

  const checkWeights = (maxWeight: number, minWeight: number, fishWeight: number) => {
    if (typeof maxWeight != undefined && typeof minWeight != undefined) {
      if (fishWeight >= minWeight && fishWeight <= maxWeight) {
        return true;
      }
      return false;
    } else if (typeof minWeight != undefined) {
      if (fishWeight >= minWeight) {
        return true;
      }
      return false;
    } else if (typeof maxWeight != undefined) {
      if (fishWeight <= maxWeight) {
        return true;
      }
      return false;
    } else {
      return true;
    }
  };

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
            <FilterButton  
              url={filterQuery}
              maxSize={fishMaxSize}
              maxWeight={fishMaxWeight}
              minSize={fishMinSize}
              minWeight={fishMinWeight}
              navigation={navigation}
            />
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
          }).filter((item) => {
            if (typeof fishMaxSize != "undefined" && typeof fishMinSize != "undefined") {
              if (item.maxSize >= fishMinSize && item.maxSize <= fishMaxSize) {
                return item;
              }
            } else if (typeof fishMinSize != "undefined") {
              if (item.maxSize >= fishMinSize) {
                return item;
              }
            } else if (typeof fishMaxSize != "undefined") {
              if (item.maxSize <= fishMaxSize) {
                return item;
              }
            } else {
              return item;
            }
          }).length ? (
            <FishCardList
              data={fishes.filter(item => {
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
              }).filter((item) => {
                if (typeof fishMaxSize != "undefined" && typeof fishMinSize != "undefined") {
                  if (item.maxSize >= fishMinSize && item.maxSize <= fishMaxSize) {
                    return item;
                  }
                } else if (typeof fishMinSize != "undefined") {
                  if (item.maxSize >= fishMinSize) {
                    return item;
                  }
                } else if (typeof fishMaxSize != "undefined") {
                  if (item.maxSize <= fishMaxSize) {
                    return item;
                  }
                } else {
                  return item;
                }
              })}
              renderItem={({ item }) => (
                <FishCard fishWiki={item} cardFunction={() => { }} />
              )}
              keyExtractor={item => item._id}
            />
          ) : (
            <NoResultContainer>
              <SearchImage source={require('../../assets/search.png')} />
              {searchQuery ? (
                <>
                  <BoldText>Não encontramos nada com o termo digitado</BoldText>
                  <RegularText>
                    Por favor, verifique sua pesquisa e tente novamente para obter
                    resultados.
                  </RegularText>
                </>
              ) : (
                <>
                  <BoldText>Não encontramos nada com os filtros utilizados</BoldText>
                  <RegularText>
                    Por favor, verifique sua pesquisa e tente novamente para obter
                    resultados.
                  </RegularText>
                </>
              )}
            </NoResultContainer>

          )}
        </>
      )}
    </FishBodyContainer>
  );
};
