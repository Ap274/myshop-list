import { useState } from "react";
import { Alert, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Caption } from "@components/Caption";
import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";
import { Button } from "@components/Button";
import { Filter } from "@components/Filter";
import { ItemCard } from "@components/ItemCard";
import { ListEmpty } from "@components/ListEmpty";

import { ItemStorageDTO } from "@storage/item/ItemStorageDTO";
import { itemAddByStore } from "@storage/item/itemAddByStore";
import { itemsGetByStore } from "@storage/item/itemsGetByStore";

import { Container, Form, HeaderList, NumberOfItems } from "./styles";
import { AppError } from "@utils/AppError";
import { itemsGetByStoreAndPriority } from "@storage/item/itemsGetByStoreAndPriority";

type RouteParams = {
    store: string;
}

export function Items() {
    const [newItemName, setNewItemName] = useState('');
    
    const [priority, setPriority] = useState("priority");
    const [cartItems, setCartItems] = useState<ItemStorageDTO[]>([]);

    const route = useRoute();
    const { store } = route.params as RouteParams;
    const normalizedStore = store.trim();

    async function handleAddItem() {
        if(newItemName.trim().length === 0) {
            return Alert.alert('New Item', 'Enter the name of the item to add');
        }

        const newItem = {
            name: newItemName,
            priority: priority,
        }

        try {
            await itemAddByStore(newItem, normalizedStore);

        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('New Item', error.message)
            } else {
                console.log(error);
                Alert.alert('New Item', 'Unable to add');
            }
        }
    }

    async function fetchItemsByPriority() {
        try {
            const itemsByPriority = await itemsGetByStoreAndPriority(store, priority);
            setCartItems(itemsByPriority);
        } catch (error) {
            console.log(error);
            Alert.alert('Items', 'Unable to load items of selected priority.')
        }
    }

    return (
        <Container>
           <Header showBackButton/> 

           <Caption 
                title={normalizedStore}
                subtitle="Add the item by category"
           />

           <Form>
                <Input 
                    onChangeText={setNewItemName}
                    placeholder="Item name"
                    autoCorrect={false}
                />

                <ButtonIcon 
                    icon="add-circle"
                    onPress={handleAddItem}
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
                data={newItemName}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <ItemCard 
                        name={item}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => <ListEmpty message="Add an item to your shopping list"/>}
                contentContainerStyle={[{paddingBottom: 20}, newItemName.length === 0 && {flex: 1}]}
            />

           <Button 
                title="Remove store"
                type="RED"
           />
        </Container>
    )
}