import React,{ useState } from 'react';
import { 
  TouchableFilter,
  TextFilter,
  IconFilter,
  NumberContainer,
  NumberText
 } from './styles';


interface Props {
  url: string;
  navigation: any;
}
const hasFilter = (url: string) => {
  console.log(url)
  if (!url) {
    return false;
  }
  else {
    return true;
  }
}

export function FilterButton({ url,navigation }: Props) {
  return (

    <TouchableFilter
      onPress={() => navigation.navigate('WikiFilter')}
      hasFilter={hasFilter(url)}
    >
      <TextFilter
        hasFilter={hasFilter(url)}
      >Filtros</TextFilter>
      {hasFilter(url) ? (
        <NumberContainer>
              <NumberText>{(url.split('=').length-1)}</NumberText>
        </NumberContainer>
      )

        : (<IconFilter name="filter-list" />)
      }
    </TouchableFilter>
  );
}
