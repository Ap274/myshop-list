import { useState, useCallback } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { FlatList, Alert } from "react-native";

import { Header } from "@components/Header";
import { Caption } from "@components/Caption";
import { ShopCard } from "@components/ShopCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { Loading } from "@components/Loading";

import { storesGetAll } from "@storage/store/storesGetAll";

import { Container } from "./styles";

export function Stores() {
    const [isLoading, setIsLoading] = useState(true);
    const [stores, setStores] = useState<string[]>([]);

    const navigation = useNavigation();

    function handleNewStore() {
        navigation.navigate('new');
    }

    async function fetchStores() {
        try {
            setIsLoading(true);
            const data = await storesGetAll();
            setStores(data);

        } catch (error) {
            console.log(error);
            Alert.alert('Stores', 'Unable to load stores.')
        } finally {
            setIsLoading(false);
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

            {
                isLoading ? <Loading /> :
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
            }

            <Button 
                title="Create New Store"
                onPress={handleNewStore}
            />

        </Container>
    )
}