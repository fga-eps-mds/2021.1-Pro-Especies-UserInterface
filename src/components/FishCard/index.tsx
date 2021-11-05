import React, { FC, useState, useEffect } from 'react';
import { Buffer } from "buffer";
import { TouchableOpacity } from 'react-native';
import {
  FishCardContainer,
  FishImage,
  CommonNameText,
  ScientificName,
  TextView,
  NoFishImage,
  NoFishImageIcon,
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
  cardFunction: (VoidFunction);
}

export const FishCard: FC<IFishCardProps> = ({
  fishWiki,
  fishLog,
  cardFunction,
}) => {
  const [image, setImage] = useState<string | null>(null);
  const getPhoto = () => {
    if (fishLog?.photo) {
      const log64 = Buffer.from(fishLog.photo).toString('base64');
      const base64Img = `data:image/png;base64,${log64}`;
      return base64Img;
    }
    if (fishWiki?.photo) {
      return fishWiki.photo;
    }
  }
  useEffect(() => {
    if (fishLog?.photo) {
      const log64 = Buffer.from(fishLog.photo).toString('base64');
      const base64Img = `data:image/png;base64,${log64}`;
      setImage(base64Img);
    }
    if (fishWiki?.photo) {
      setImage(fishWiki.photo);
    }
  }, []);
  return (
    <FishCardContainer onPress={() => { }}>
      <TouchableOpacity onPress={cardFunction}>
        {image ?
          <FishImage
            source={{
              uri: image,
            }}

          /> :
          <NoFishImage>
            <NoFishImageIcon name="no-photography" />
          </NoFishImage>

        }
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
