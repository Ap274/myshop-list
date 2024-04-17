import { ButtonIcon } from "@components/ButtonIcon";

import { Container, Name, Icon } from "./styles";

type Props = {
    name: string,
}

export function ItemCard({name}: Props) {
    return (
        <Container>
            <Icon
               name="shopping-bag" 
            />

            <Name>
                {name}
            </Name>

            <ButtonIcon 
                icon="close"
                type="SECONDARY"
            />
        </Container>
    )
}