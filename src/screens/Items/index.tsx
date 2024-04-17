import { useState } from "react";
import { FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Caption } from "@components/Caption";
import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";
import { Button } from "@components/Button";
import { Filter } from "@components/Filter";
import { ItemCard } from "@components/ItemCard";
import { ListEmpty } from "@components/ListEmpty";

import { Container, Form, HeaderList, NumberOfItems } from "./styles";

type RouteParams = {
    store: string;
}

export function Items() {
    const [priority, setPriority] = useState("priority");
    const [cartItems, setCartItems] = useState([]);

    const route = useRoute();
    const { store } = route.params as RouteParams;

    return (
        <Container>
           <Header showBackButton/> 

           <Caption 
                title={store}
                subtitle="Add the item by category"
           />

           <Form>
                <Input 
                    placeholder="Item name"
                />

                <ButtonIcon 
                    icon="add-circle"
                />
           </Form>

            <HeaderList>
                <FlatList 
                    data={["priority", "not priority"]}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                        <Filter 
                            title={item}
                            isActive={item === priority} 
                            onPress={() => setPriority(item)} 
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

                <NumberOfItems>
                    {cartItems.length}
                </NumberOfItems>
            </HeaderList>

            <FlatList 
                data={cartItems}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <ItemCard 
                        name={item}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => <ListEmpty message="Add an item to your shopping list"/>}
                contentContainerStyle={[{paddingBottom: 20}, cartItems.length === 0 && {flex: 1}]}
            />

           <Button 
                title="Remove store"
                type="RED"
           />
        </Container>
    )
}