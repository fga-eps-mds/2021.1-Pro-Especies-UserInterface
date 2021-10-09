import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { FishCard, IFish } from "../../components/FishCard";
import { TopBar } from "../../components/TopBar";
import { getWikiFishes } from "../../services/wikiServices/getWikiFishes";
import { PageContainer, IconFilter, SearchBarContainer, RowContainer, TouchableFilter, TextFilter, TitleContainer, TouchableTitle, TitleText, TitleHighlight, ListImages, FishCardList, FishBodyContainer } from "./styles";


export const Wiki = () => {

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

    const [wiki, setWiki] = useState(false);
    const [filter, setFilter] = useState(false);

    const [fishes, setFishes] = useState<IFish[]>([]);

    const updateFishes = async () => {
        const data = await getWikiFishes();
        setFishes(data);
    }
    useEffect(() => {
        updateFishes();
    }, [])

    return (
        <PageContainer>
            <TopBar title='Biblioteca' />
            <FishBodyContainer>
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
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                        iconColor="#202E35"
                    />
                    <TouchableFilter onPress={() => { setFilter(false) }}>
                        <TextFilter filter={filter}>Filtro</TextFilter>
                        <IconFilter name="filter-list" />
                    </TouchableFilter>
                </RowContainer>
                <FishCardList
                    data={fishes}
                    renderItem={({ item }) => <FishCard fish={item} />}
                    keyExtractor={item => item._id}
                />
            </FishBodyContainer>
        </PageContainer>
    )
}