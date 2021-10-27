import React,{ useState } from 'react';
import { TouchableFilter, TextFilter, IconFilter, NumberContainer, NumberText } from './styles';


interface Props {
  url: string;
  maxSize: any;
  maxWeight: any;
  minSize: any;
  minWeight: any;
  navigation: any;
}
const hasFilter = ({ url, maxSize, maxWeight, minSize, minWeight }: any) => {
  if (!url && typeof maxSize == 'undefined'
    && typeof maxWeight == 'undefined'
    && typeof minSize == 'undefined'
    && typeof minWeight == 'undefined'
  ) {
    return false;
  }
  else {
    return true;
  }
}

export function FilterButton({ url, maxSize, maxWeight, minSize, minWeight, navigation }: Props) {
  const [filterNumber,setFilterNumber]= useState(5);
  return (

    <TouchableFilter
      onPress={() => navigation.navigate('WikiFilter')}
      hasFilter={hasFilter({ url, maxSize, maxWeight, minSize, minWeight })}
    >
      <TextFilter
        hasFilter={hasFilter({ url, maxSize, maxWeight, minSize, minWeight })}
      >Filtros</TextFilter>
      {hasFilter({ url, maxSize, maxWeight, minSize, minWeight }) ? (
        <NumberContainer>
              <NumberText>{filterNumber}</NumberText>
        </NumberContainer>
      )

        : (<IconFilter name="filter-list" />)
      }
    </TouchableFilter>
  );
}
