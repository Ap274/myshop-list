import { Header } from "@components/Header";
import { Caption } from "@components/Caption";
import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";
import { Button } from "@components/Button";

import { Container, Form } from "./styles";

export function Items() {
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


           <Button 
                title="Remove item"
                type="RED"
           />
        </Container>
    )
}