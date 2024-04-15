import { useState } from "react";
import { FlatList } from "react-native";

import { Header } from "@components/Header";
import { Caption } from "@components/Caption";
import { ShopCard } from "@components/ShopCard";

import { Container } from "./styles";
import { ListEmpty } from "@components/ListEmpty";

export function Stores() {
    const [stores, setStores] = useState<string[]>(["Angeloni", "Giassi", "Fort Atacadista", "Hortifruti João Colin", "Especiarias Chilli", "Rango True", "Rancho Casa Mexicana", "Feng Cheng", "Mr Shawarma"])

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
                    />
                )}     
                contentContainerStyle={stores.length === 0 && { flex: 1 }}
                ListEmptyComponent={() => <ListEmpty message={"There are no items from any store to buy!"}/>}
                showsVerticalScrollIndicator={false}
            />

        </Container>
    )
}