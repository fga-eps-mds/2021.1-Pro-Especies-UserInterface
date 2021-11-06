import React from 'react';
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
  screen: string;
}

export function FilterButton({ url,navigation, screen }: Props) {
  return (

    <TouchableFilter
      onPress={() => navigation.navigate(screen)}
      hasFilter={url ? true : false}
    >
       <TextFilter
        hasFilter={url ? true : false}
      >Filtros</TextFilter>
       {url ? (
          <NumberContainer> 
                <NumberText>{(url.split('=').length-1)}</NumberText>
          </NumberContainer>
        )
          : (<IconFilter name="filter-list" />)
        }
     
    </TouchableFilter>
  );
}

// const wichFilter = ({ url,navigation, screen }: Props) => {
//   if (screen == 'WikiFilter') {
//     return (
      
//       {url ? (
//         <NumberContainer> 
//               <NumberText>{(url.split('=').length-1)}</NumberText>
//         </NumberContainer>
//       )
//         : (<IconFilter name="filter-list" />)
//       }

//     );
//   }
// } 