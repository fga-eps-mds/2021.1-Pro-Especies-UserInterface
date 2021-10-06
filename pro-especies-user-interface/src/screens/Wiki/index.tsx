import React, { useState , useEffect} from "react";
import { FishCard, IFish } from "../../components/FishCard";
import { TopBar } from "../../components/TopBar";
import { getWikiFishes } from "../../services/wikiServices/getWikiFishes";
import { PageContainer , SearchBarContainer, RowContainer, TouchableFilter, TextFilter,TitleContainer, TouchableTitle , TitleText , TitleHighlight  } from "./styles";


export const  Wiki = () => {
    const fish : IFish = {
        _id: 'string',
        largeGroup: 'string',
        group: 'string',
        commonName: 'ASDASDA',
        scientificName: 'string',
        family: 'string',
        food: 'string',
        habitat: 'string',
        maxSize: 1,
        maxWeight: 2,
        isEndemic: 'string',
        isThreatened: 'string',
        hasSpawningSeason: 'string',
        wasIntroduced: 'string',
        funFact: 'string',
        photo: 'string',
    };
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

    const [wiki, setWiki] = useState(false);
    const [filter, setFilter] = useState(false);

    const fishData = [];
    const [fishes, setFishes] = useState<IFish[]>([]);
    
    const updateFishes = async () => {
        const data = await getWikiFishes();
        console.log(data);
    }
    useEffect(() => {
        updateFishes();
    },[])

    return (
        <PageContainer>
            <TopBar title='Biblioteca' />
            <TitleContainer>
                <TouchableTitle onPress={()=> {setWiki(false)}}>
                    <TitleText wiki={wiki}>Biblioteca de Peixes</TitleText>
                    {
                        wiki ? null : <TitleHighlight />
                    }
                </TouchableTitle>
                <TouchableTitle onPress={()=> {setWiki(true)}}>
                    <TitleText wiki={!wiki}>Registros</TitleText>
                    {
                        wiki ? <TitleHighlight /> : null
                    }
                </TouchableTitle>
            </TitleContainer>
            <RowContainer>
            <SearchBarContainer
                placeholder="Pesquisar"
                onChangeText={onChangeSearch}
                value={searchQuery}
                iconColor="#202E35"
            />
            <TouchableFilter onPress={() => {setFilter(false)}}>
                <TextFilter filter={filter}>Filtro</TextFilter>
            </TouchableFilter>
            </RowContainer>
            <FishCard fish={fish} />
        </PageContainer>
    )
}