import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Caption } from "@components/Caption";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { storeCreate } from "@storage/store/storeCreate";

import { Container, Content, Icon } from "./styles";

export function NewStore() {
    const [storeName, setStoreName] = useState('');

    const navigation = useNavigation()

    async function handleNew() {
        try {
            await storeCreate(storeName);
            navigation.navigate('items', {store: storeName});
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    return (
        <Container>
            <Header showBackButton/>

            <Content>
                <Icon />
                <Caption
                    title="New Shopp"
                    subtitle="Add a store to add purchases"
                />

                <Input 
                    placeholder="Store name"
                    onChangeText={setStoreName}
                />

                <Button 
                    title="Create"
                    onPress={handleNew}
                />
            </Content>
            
        </Container>
    )
}