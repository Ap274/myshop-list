import { itemsGetByStore } from "./itemsGetByStore";

export async function itemsGetByStoreAndPriority(store: string, priority: string) {
    try {   
        const storage = await itemsGetByStore(store);

        const items = storage.filter(item => item.priority === priority);

        return items;        
    } catch (error) {
        throw error;
    }
}