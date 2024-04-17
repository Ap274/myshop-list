import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

import { Header } from "@components/Header";
import { Caption } from "@components/Caption";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { storeCreate } from "@storage/store/storeCreate";
import { AppError } from "@utils/AppError";

import { Container, Content, Icon } from "./styles";

export function NewStore() {
    const [storeName, setStoreName] = useState('');

    const navigation = useNavigation()

    async function handleNew() {
        try {
            if (storeName.trim().length === 0) {
                return Alert.alert('New Store', 'Enter the name of the store')
            }

            await storeCreate(storeName);
            navigation.navigate('items', {store: storeName});
        } catch (error) {
            if(error instanceof AppError) {
                Alert.alert('New Store', error.message);
            } else {
                Alert.alert('New Store', 'Unable to create a new store');
                console.log(error);
            }
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