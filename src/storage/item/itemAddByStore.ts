import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { ItemStorageDTO } from "./ItemStorageDTO";
import { ITEM_COLLECTION } from "@storage/storageConfig";
import { itemsGetByStore } from "./itemsGetByStore";

export async function itemAddByStore(newItem: ItemStorageDTO, store: string) {
    try {
        const storedItems = await itemsGetByStore(store);

        const itemAlreadyExists = storedItems.filter(item => item.name === newItem.name);

        if (itemAlreadyExists.length > 0) {
            throw new AppError('This item has already been added at a priority level');
        }

        const storage = JSON.stringify([...storedItems, newItem]);

        await AsyncStorage.setItem(`${ITEM_COLLECTION}-${store}`, storage);

    } catch (error) {
        throw error;
    }
}