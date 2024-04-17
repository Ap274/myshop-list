import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { storesGetAll } from "./storesGetAll";
import { STORE_COLLECTION } from "@storage/storageConfig";

export async function storeCreate(newStore: string) {
    try {
        const storedStores = await storesGetAll();
        const normalizedStores = newStore.trim();

        const storeAlreadyExists = storedStores.map(store => store.trim()).includes(normalizedStores);
        if(storeAlreadyExists) {
            throw new AppError("There's already a store registered with that name")
        }

        const storage = JSON.stringify([...storedStores, normalizedStores]);
        await AsyncStorage.setItem(STORE_COLLECTION, storage);
    } catch (error) {
        throw error;
    }
}