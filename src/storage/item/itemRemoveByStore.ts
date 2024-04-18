import AsyncStorage from "@react-native-async-storage/async-storage";

import { ITEM_COLLECTION } from "@storage/storageConfig";
import { itemsGetByStore } from "./itemsGetByStore";

export async function itemRemoveByStore(itemName: string, store: string) {
    try {
        const storage = await itemsGetByStore(store);

        const filtered = storage.filter(item => item.name !== itemName);
        const items = JSON.stringify(filtered);

        await AsyncStorage.setItem(`${ITEM_COLLECTION}-${store}`, items);

    } catch (error) {
        throw error;
    }
}