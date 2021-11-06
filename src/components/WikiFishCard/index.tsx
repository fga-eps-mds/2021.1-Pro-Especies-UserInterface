import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  FishCardContainer,
  FishImage,
  CommonNameText,
  ScientificName,
  TextView,
} from './styles';

export interface IFish {
  _id: string;
  largeGroup: string;
  group: string;
  commonName: string;
  scientificName: string;
  family: string;
  food: string;
  habitat: string;
  maxSize: number;
  maxWeight: number;
  isEndemic: string;
  isThreatened: string;
  hasSpawningSeason: string;
  wasIntroduced: string;
  funFact: string;
  photo: string;
}

export interface IFishLog {
  _id: string;
  userId: number;
  name: string;
  largeGroup: string;
  group: string;
  species: string;
  coordenates: [number, number][];
  photo: string;
  length: number;
  weight: number;
  reviewed: boolean;
  reviewedBy: number;
  createdAt: Date;
  updatedAt: Date;
  updatedBy: number;
  deletedAt: Date;
  deletedBy: number;
}

interface IFishCardProps {
  fishWiki?: IFish;
  fishLog?: IFishLog;
  cardFunction: VoidFunction;
}

export const WikiFishCard: FC<IFishCardProps> = ({
  fishWiki,
  fishLog,
  cardFunction,
}) => {
  return (
    <FishCardContainer onPress={() => { }}>
      <TouchableOpacity onPress={cardFunction}>
        <FishImage
          source={{
            uri: `data:image/png;base64,${fishLog ? fishLog.photo : fishWiki?.photo
              }`,
          }}
        />
        <TextView>
          <CommonNameText>
            {fishLog ? fishLog.name : fishWiki?.commonName}
          </CommonNameText>
          <ScientificName>
            {fishLog ? fishLog.species : fishWiki?.scientificName}
          </ScientificName>
        </TextView>
      </TouchableOpacity>
    </FishCardContainer>
  );
};