import React, { useState, useEffect } from "react";
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
    NoResultContainer,
    BoldText,
    RegularText,
    SearchImage,
    FishCardList,
    FishBodyContainer
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
                        placeholderTextColor="rgba(32, 46, 53, 0.3)"
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
                    fishes.filter((fish) => {
                        if (!searchQuery ||
                            fish.commonName.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
                            fish.scientificName.toLowerCase().includes(searchQuery.toLowerCase().trim())
                        ) {
                            return fish;
                        }
                    }).length ? (
                        <FishCardList
                            data={fishes.filter((item) => {
                                if (!searchQuery ||
                                    item.commonName.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
                                    item.scientificName.toLowerCase().includes(searchQuery.toLowerCase().trim())
                                ) {
                                    return item;
                                }
                            })}
                            renderItem={({ item }) => <FishCard fish={item} />}
                            keyExtractor={item => item._id}
                        />
                    ) : (
                        <NoResultContainer>
                            <SearchImage source={require('../../assets/search.png')} />
                            <BoldText>Não encontramos nada com o termo digitado</BoldText>
                            <RegularText>Por favor, verifique sua pesquisa e tente novamente para obter resultados.</RegularText>
                        </NoResultContainer>
                    )
                }
            </FishBodyContainer>
        </PageContainer>
    )
}