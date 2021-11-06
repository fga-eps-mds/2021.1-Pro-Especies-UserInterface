import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { IFish } from '../FishLogCard';
import { GetWikiFishes } from '../../services/wikiServices/getWikiFishes';
import { FilterButton } from '../FilterButton';
import {
  SearchBarContainer,
  RowContainer,
  NoResultContainer,
  BoldText,
  RegularText,
  SearchImage,
  FishBodyContainer,
} from './styles';
import { WikiFishList } from '../WikiFishList';


export const Wiki = (
  { navigation,
    filterQuery,
  }: any
) => {
  const [searchQuery, setSearchQuery] = React.useState('');
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
            <FilterButton
              url={filterQuery}
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
          }).length ? (
            <WikiFishList
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
              {searchQuery ? (
                <>
                  <BoldText>Não encontramos nada com o termo digitado</BoldText>
                  <RegularText>
                    Por favor, verifique sua pesquisa e tente novamente para obter
                    resultados.
                  </RegularText>
                </>
              ) : (

                filterQuery ? (

                  <>
                    <BoldText>Não encontramos nada com os filtros utilizados</BoldText>
                    <RegularText>
                      Por favor, verifique sua pesquisa e tente novamente para obter
                      resultados.
                    </RegularText>
                  </>

                ) : (
                  <>
                    <BoldText>Não encontramos nada na biblioteca</BoldText>
                    <RegularText>
                      Por favor, verifique sua conexão e tente novamente para obter
                      resultados.
                    </RegularText>
                  </>
                )
              )}
            </NoResultContainer>

          )}
        </>
      )
      }
    </FishBodyContainer >
  );
};
