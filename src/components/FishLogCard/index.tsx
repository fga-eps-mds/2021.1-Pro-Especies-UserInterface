import React, { FC, useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import {
  FishCardContainer,
  FishImage,
  CommonNameText,
  ScientificName,
  TextView,
  CheckBoxView,
  NoFishImage,
  NoFishImageIcon,
} from './styles';

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
  fishLog: IFishLog;
  isHidden: boolean;
  selectAll: boolean;
  cardFunction: VoidFunction;
  selectFunction: VoidFunction;
  deselectFunction: VoidFunction;
}

export const FishLogCard: FC<IFishCardProps> = ({
  fishLog,
  selectAll,
  isHidden,
  cardFunction,
  selectFunction,
  deselectFunction,

}) => {
  const [isCheck, setIsCheck] = useState(false);

  const checkBoxFunction = (value: boolean) => {
    setIsCheck(value);
    if (value) {
      selectFunction();
    } else {
      deselectFunction();
    }
  };

  useEffect(() => {
    if (selectAll) {
      setIsCheck(true);
    } else {
      setIsCheck(false);
    }
  }, [selectAll]);

  return (
    <FishCardContainer>
      {
        isHidden ? null
          : (<CheckBoxView>
            <CheckBox
              checked={isCheck}
              onPress={() => checkBoxFunction(!isCheck)}
              checkedColor={'#00BBD4'}
              uncheckedColor={"black"}
            />
          </CheckBoxView>)
      }
      <TouchableOpacity onPress={cardFunction}>
        {fishLog.photo ?
          <FishImage
            source={{
              uri: `data:image/png;base64,${fishLog.photo}`,
            }}

          /> :
          <NoFishImage>
            <NoFishImageIcon name="no-photography" />
          </NoFishImage>
        }
        <TextView>
          <CommonNameText>
            {fishLog.name}
          </CommonNameText>
          <ScientificName>
            {fishLog.species}
          </ScientificName>
        </TextView>
      </TouchableOpacity>
    </FishCardContainer>
  );
};
