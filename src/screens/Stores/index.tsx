import { useState, useCallback } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { FlatList } from "react-native";

import { Header } from "@components/Header";
import { Caption } from "@components/Caption";
import { ShopCard } from "@components/ShopCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

import { storesGetAll } from "@storage/store/storesGetAll";

import { Container } from "./styles";

export function Stores() {
    const [stores, setStores] = useState<string[]>(["Angeloni", "Giassi", "Fort Atacadista", "Hortifruti João Colin", "Especiarias Chilli", "Rango True", "Rancho Casa Mexicana", "Feng Cheng", "Mr Shawarma"]);

    const navigation = useNavigation();

    function handleNewStore() {
        navigation.navigate('new');
    }

    async function fetchStores() {
        try {
            const data = await storesGetAll();
            setStores(data);

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    function handleOpenStore(store: string) {
        navigation.navigate('items', { store: store })
    }

    useFocusEffect(useCallback(() => {
        fetchStores();
    }, []))

    return (
        <Container>
            <Header />

            <Caption 
                title="Shopping"
                subtitle="Things to buy :D"
            />

            <FlatList 
                data={stores}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <ShopCard 
                        title={item}
                        onPress={() => handleOpenStore(item)}
                    />
                )}     
                contentContainerStyle={stores.length === 0 && { flex: 1 }}
                ListEmptyComponent={() => <ListEmpty message={"There are no items from any store to buy!"}/>}
                showsVerticalScrollIndicator={false}
            />

            <Button 
                title="Create New Purchase"
                onPress={handleNewStore}
            />

        </Container>
    )
}