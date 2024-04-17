import { useState } from "react";
import { FlatList } from "react-native";

import { Header } from "@components/Header";
import { Caption } from "@components/Caption";
import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";
import { Button } from "@components/Button";
import { Filter } from "@components/Filter";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

export function Items() {
    const [priority, setPriority] = useState("priority");

    return (
        <Container>
           <Header showBackButton/> 

           <Caption 
                title="Item name"
                subtitle="Add the item by category"
           />

           <Form>
                <Input 
                    placeholder="Item name"
                />

                <ButtonIcon 
                    icon="add-circle"
                />
           </Form>

            <HeaderList>
                <FlatList 
                    data={["priority", "not priority"]}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                        <Filter 
                            title={item}
                            isActive={item === priority} 
                            onPress={() => setPriority(item)} 
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

                <NumberOfPlayers>
                    {priority.length}
                    {/* Change after to Items */}
                </NumberOfPlayers>
            </HeaderList>

           <Button 
                title="Remove item"
                type="RED"
           />
        </Container>
    )
}