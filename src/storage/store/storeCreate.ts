import AsyncStorage from "@react-native-async-storage/async-storage";

import { storesGetAll } from "./storesGetAll";
import { STORE_COLLECTION } from "@storage/storageConfig";

export async function storeCreate(newStore: string) {
    try {
        const storedStores = await storesGetAll();

        const storage = JSON.stringify([...storedStores, newStore]);
        await AsyncStorage.setItem(STORE_COLLECTION, storage);
    } catch (error) {
        throw error;
    }
}