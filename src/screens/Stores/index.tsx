import { Header } from "@components/Header";

import { Container } from "./styles";
import { Caption } from "@components/Caption";
import { ShopCard } from "@components/ShopCard";

export function Stores() {
    return (
        <Container>
            <Header />

            <Caption 
                title="Shopping"
                subtitle="Things to buy :D"
            />

            <ShopCard 
                title="Angeloni"
            />
            <ShopCard 
                title="Giassi"
            />
            <ShopCard 
                title="Hortifruti"
            />
        </Container>
    )
}