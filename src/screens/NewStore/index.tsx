import { Header } from "@components/Header";
import { Caption } from "@components/Caption";
import { Button } from "@components/Button";

import { Container, Content, Icon } from "./styles";

export function NewStore() {
    return (
        <Container>
            <Header showBackButton/>

            <Content>
                <Icon />
                <Caption
                    title="New Shopp"
                    subtitle="Add a store to add purchases"
                />


                <Button 
                    title="Create"
                />
            </Content>
            
        </Container>
    )
}