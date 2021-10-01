import React from "react";
import { Text } from "react-native";
import { TopBar } from "../../components/TopBar";
import { PageContainer } from "./styles";
import { Searchbar } from 'react-native-paper';


export const  Wiki = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
    return (
        <PageContainer>
            <TopBar title='Biblioteca' />
            <Text>Wiki</Text>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
        </PageContainer>
    )
}