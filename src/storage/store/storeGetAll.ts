import AsyncStorage from "@react-native-async-storage/async-storage";

import { STORE_COLLECTION } from "@storage/storageConfig";

export async function storeGetAll() {
    try {
        const storage = await AsyncStorage.getItem(STORE_COLLECTION);
        const stores: string[] = storage ? JSON.parse(storage) : [];
        
        return stores;
    } catch (error) {
        throw error;
    }
}