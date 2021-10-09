import React, { useState, useEffect } from "react";
import { FlatList, Text } from "react-native";
import { FishCard, IFish } from "../../components/FishCard";
import { TopBar } from "../../components/TopBar";
import { GetWikiFishes } from "../../services/wikiServices/getWikiFishes";
import {
    PageContainer,
    IconFilter,
    SearchBarContainer,
    RowContainer,
    TouchableFilter,
    TextFilter,
    TitleContainer,
    TouchableTitle,
    TitleText,
    TitleHighlight,
    ListImages
} from "./styles";


export const Wiki = () => {

    const [searchQuery, setSearchQuery] = React.useState('');
    const [wiki, setWiki] = useState(false);
    const [filter, setFilter] = useState(false);
    const [fishes, setFishes] = useState<IFish[]>([]);

    const updateFishes = async () => {
        try {
            const data = await GetWikiFishes();
            setFishes(data);
        } catch (error: any) {
            console.log(error);
        }
    }
    useEffect(() => {
        updateFishes();
    }, [])

    return (
        <PageContainer>
            <TopBar title='Biblioteca' />
            <TitleContainer>
                <TouchableTitle onPress={() => { setWiki(false) }}>
                    <TitleText wiki={wiki}>Biblioteca de Peixes</TitleText>
                    {
                        wiki ? null : <TitleHighlight />
                    }
                </TouchableTitle>
                <TouchableTitle onPress={() => { setWiki(true) }}>
                    <TitleText wiki={!wiki}>Registros</TitleText>
                    {
                        wiki ? <TitleHighlight /> : null
                    }
                </TouchableTitle>
            </TitleContainer>
            <RowContainer>
                <SearchBarContainer
                    placeholder="Pesquisar"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    iconColor="#202E35"
                />
                <TouchableFilter onPress={() => { setFilter(false) }}>
                    <TextFilter filter={filter}>Filtro</TextFilter>
                </TouchableFilter>
                <IconFilter name="filter-list" />
            </RowContainer>
            {
                fishes ? (
                    <FlatList
                        data={fishes}
                        // numColumns={2}
                        // initialNumToRender={2}
                        renderItem={(fish) => (
                            <ListImages>
                                {fishes.filter((fish)=>{
                                    if(!searchQuery || fish.commonName.toLowerCase().includes(searchQuery.toLowerCase().trim())){
                                        return fish;
                                    }
                                }).map(fish => (
                                    <FishCard fish={fish} key={fish._id} />
                                ))}
                            </ListImages>
                        )}
                        keyExtractor={fish => fish._id}
                    />
                ) : (
                    <Text>Não encontramos nada com o termo digitado</Text>
                )
            }
        </PageContainer>
    )
}