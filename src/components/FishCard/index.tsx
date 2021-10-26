import React, { FC , useState} from 'react';
import { TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import {
  FishCardContainer,
  FishImage,
  CommonNameText,
  ScientificName,
  TextView,
  CheckBoxView,
} from './styles';
import { red100 } from 'react-native-paper/lib/typescript/styles/colors';

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
  checkBoxFunction: VoidFunction;
}

export const FishCard: FC<IFishCardProps> = ({
  fishWiki,
  fishLog,
  cardFunction,
  checkBoxFunction,
}) => {
  const [ isCheck , setIsCheck ] = useState(false);
  return (
    <FishCardContainer>
      <CheckBoxView value={isCheck} onValueChange={() => {
        setIsCheck(!isCheck);
        checkBoxFunction();
      }}/>
      <TouchableOpacity onPress={cardFunction}>
        <FishImage
          source={{
            uri: `data:image/png;base64,${
              fishLog ? fishLog.photo : fishWiki?.photo
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
