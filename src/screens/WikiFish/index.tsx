import React, { useState, useEffect, FC } from 'react';

import { ActivityIndicator, ScrollView } from 'react-native';
import {
  FishContainer,
  FishDescription,
  PropertyContainer,
  PropertyColumn,
  ColumnContainer,
  DescriptionContainer,
} from './styles';
import { GetOneWikiFish } from '../../services/wikiServices/getOneWikiFish';
import { ProfileImage } from '../../components/ProfileImage';
import { Property } from '../../components/Property';
import { Title } from '../../components/Title';
import { HalfToneText } from '../../components/HalfToneText';
import { RegularText } from '../../components/RegularText';
import { NoFishImagePhoto } from '../../components/NoFishImagePhoto';

type IFish = {
  fish_id: string;
};

export const WikiFish: FC<IFish> = ({ navigation, route }: any) => {
  const [fishName, setFishName] = useState('');
  const [fishPhoto, setFishPhoto] = useState('');
  const [fishSpecies, setFishSpecies] = useState('');
  const [fishFunFact, setFishFuNFact] = useState('');
  const [fishLargeGroup, setFishLargeGroup] = useState('');
  const [fishGroup, setFishGroup] = useState('');
  const [fishFamily, setFishFamily] = useState('');
  const [fishFeed, setFishFeed] = useState('');
  const [fishMaxSize, setFishMaxSize] = useState(0);
  const [fishMaxWeight, setFishMaxWeight] = useState(0);
  const [fishHabitat, setFishHabitat] = useState('');
  const [fishIsEndemic, setFishIsEndemic] = useState('');
  const [fishIsThreatened, setFishIsThreatened] = useState('');
  const [fishWasIntroduced, setFishWasIntroduced] = useState('');
  const [fishHasSpawningSeason, setFishHasSpawningSeason] = useState('');
  const { fish_id } = route.params;
  const [isLoading, setIsLoading] = useState(true);

  const getFishProperties = async () => {
    try {
      const fish = await GetOneWikiFish(fish_id);
      setIsLoading(true);
      setFishName(fish.commonName);
      setFishSpecies(fish.scientificName);
      setFishFuNFact(fish.funFact);
      setFishLargeGroup(fish.largeGroup);
      setFishGroup(fish.group);
      setFishFamily(fish.family);
      setFishFeed(fish.feed);
      setFishHabitat(fish.habitat);
      setFishMaxSize(fish.sizeMax);
      setFishMaxWeight(fish.maxWeight);
      setFishWasIntroduced(fish.wasIntroducedInfo);
      setFishIsEndemic(fish.isEndemicInfo);
      setFishIsThreatened(fish.isThreatenedInfo);
      setFishHasSpawningSeason(fish.hasSpawingSeasonInfo);
      if (fish.photo) {
        setFishPhoto(fish.photo);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFishProperties();
  }, []);

  return (
    <FishContainer>
      { isLoading ? <ActivityIndicator size="large" color="#0000ff" />
        :  <ScrollView>
          {
            fishPhoto ?
              <ProfileImage source={{ uri: fishPhoto }} /> :
              <NoFishImagePhoto />
          }

          <DescriptionContainer>
            <Title text={fishName} />
            <HalfToneText text={fishSpecies} />
            <FishDescription>
              <RegularText text={fishFunFact ? `"${fishFunFact}"` : ""} />
            </FishDescription>
          </DescriptionContainer>

          <ColumnContainer>
            <PropertyColumn>
              <PropertyContainer>
                <Property property="Grande Grupo" value={fishLargeGroup} />
              </PropertyContainer>

              <PropertyContainer>
                <Property property="Família" value={fishFamily} />
              </PropertyContainer>

              <PropertyContainer>
                <Property
                  property="Tamanho Máx(cm)"
                  value={fishMaxSize?.toString() || "-"}
                />
              </PropertyContainer>

              <PropertyContainer>
                <Property property="Habitat" value={fishHabitat} />
              </PropertyContainer>

              <PropertyContainer>
                <Property property="Ameaçado?" value={fishIsThreatened || "-"} />
              </PropertyContainer>

              <PropertyContainer>
                <Property property="Foi indroduzido?" value={fishWasIntroduced || "-"} />
              </PropertyContainer>
            </PropertyColumn>

            <PropertyColumn>
              <PropertyContainer>
                <Property property="Grupo" value={fishGroup} />
              </PropertyContainer>

              <PropertyContainer>
                <Property property="Alimentação" value={fishFeed} />
              </PropertyContainer>

              <PropertyContainer>
                <Property
                  property="Peso Máx(kg)"
                  value={fishMaxWeight?.toString() || "-"}
                />
              </PropertyContainer>

              <PropertyContainer>
                <Property property="Endêmico?" value={fishIsEndemic || "-"} />
              </PropertyContainer>

              <PropertyContainer>
                <Property
                  property="Faz piracema?"
                  value={fishHasSpawningSeason || "-"}
                />
              </PropertyContainer>
            </PropertyColumn>
          </ColumnContainer>
        </ScrollView>}
    </FishContainer>
  );
};