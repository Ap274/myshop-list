import { useNavigation } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Caption } from "@components/Caption";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { Container, Content, Icon } from "./styles";

export function NewStore() {
    const navigation = useNavigation()

    function handleNew() {
        navigation.navigate('items', {store: 'Mercadinho'})
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
                />

                <Button 
                    title="Create"
                    onPress={handleNew}
                />
            </Content>
            
        </Container>
    )
}