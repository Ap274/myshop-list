import AsyncStorage from "@react-native-async-storage/async-storage";

import { STORE_COLLECTION, ITEM_COLLECTION } from "@storage/storageConfig";

import { storesGetAll } from "./storesGetAll";

export async function storeRemoveByName(storeDeleted: string) {
    try {
        const storedStores = await storesGetAll();
        const stores = storedStores.filter(store => store !== storeDeleted)

        await AsyncStorage.setItem(STORE_COLLECTION, JSON.stringify(stores))
    } catch (error) {
        throw error;
    }
} 