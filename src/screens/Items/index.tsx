import { useState, useEffect, useRef } from "react";
import { Alert, FlatList, TextInput } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

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
import { itemsGetByStoreAndPriority } from "@storage/item/itemsGetByStoreAndPriority";
import { itemRemoveByStore } from "@storage/item/itemRemoveByStore";
import { storeRemoveByName } from "@storage/store/storeRemoveByName";

import { Container, Form, HeaderList, NumberOfItems } from "./styles";
import { AppError } from "@utils/AppError";

type RouteParams = {
    store: string;
}

export function Items() {
    const [newItemName, setNewItemName] = useState('');
    const [priority, setPriority] = useState("priority");
    const [cartItems, setCartItems] = useState<ItemStorageDTO[]>([]);

    const navigation = useNavigation();

    const route = useRoute();
    const { store } = route.params as RouteParams;
    const normalizedStore = store.trim();

    const newItemNameInputRef = useRef<TextInput>(null);

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
            newItemNameInputRef.current?.blur();
            
            setNewItemName('');
            fetchItemsByPriority();

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
            const itemsByPriority = await itemsGetByStoreAndPriority(normalizedStore, priority);
            setCartItems(itemsByPriority);
        } catch (error) {
            console.log(error);
            Alert.alert('Items', 'Unable to load items of selected priority.')
        }
    }

    async function handleItemRemove(itemName: string) {
        try {
            await itemRemoveByStore(itemName, normalizedStore);
            fetchItemsByPriority();
        } catch (error) {
            console.log(error);
            Alert.alert('Item remove', 'Unable to remove this item');
        }
    }

    async function storeRemove() {
        try {
            await storeRemoveByName(normalizedStore);
            navigation.navigate('stores');

        } catch (error) {
            console.log(error);
            Alert.alert('Remove store', 'Unable to remove store.')
        }
    }

    async function handleStoreRemove() {
        Alert.alert(
            'Remove',
            'Do you want to remove the store?',
            [
                { text: 'Yes', onPress: () => storeRemove()},
                { text: 'No', style: 'cancel' }
            ]
        )
    }

    useEffect(() => {
        fetchItemsByPriority();
    }, [priority]);

    return (
        <Container>
           <Header showBackButton/> 

           <Caption 
                title={normalizedStore}
                subtitle="Add the item by category"
           />

           <Form>
                <Input 
                    inputRef={newItemNameInputRef}
                    onChangeText={setNewItemName}
                    value={newItemName}
                    placeholder="Item name"
                    autoCorrect={false}
                    onSubmitEditing={handleAddItem}
                    returnKeyType="done"
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
                data={cartItems}
                keyExtractor={item => item.name}
                renderItem={({item}) => (
                    <ItemCard 
                        name={item.name}
                        onRemove={() => handleItemRemove(item.name)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => <ListEmpty message="Add an item to your shopping list"/>}
                contentContainerStyle={[{paddingBottom: 20}, cartItems.length === 0 && {flex: 1}]}
            />

           <Button 
                title="Remove store"
                type="RED"
                onPress={handleStoreRemove}
           />
        </Container>
    )
}