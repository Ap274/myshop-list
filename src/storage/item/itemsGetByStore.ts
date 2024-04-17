import AsyncStorage from "@react-native-async-storage/async-storage";
import { ITEM_COLLECTION } from "@storage/storageConfig";
import { ItemStorageDTO } from "./ItemStorageDTO";

export async function itemsGetByStore(store: string) {
    try {
        const storage = await AsyncStorage.getItem(`${ITEM_COLLECTION}-${store}`);

        const items: ItemStorageDTO[] = storage ? JSON.parse(storage) : []; 

        return items;
    } catch (error) {
        throw error;
    }
}