import { useState } from "react";
import { FlatList } from "react-native";

import { Header } from "@components/Header";
import { Caption } from "@components/Caption";
import { ShopCard } from "@components/ShopCard";

import { Container } from "./styles";

export function Stores() {
    const [stores, setStores] = useState<string[]>(["Angeloni", "Giassi", "Fort Atacadista", "Hortifruti João Colin", "Especiarias Chilli"])

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
            />

        </Container>
    )
}