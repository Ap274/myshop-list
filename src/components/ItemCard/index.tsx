import { ButtonIcon } from "@components/ButtonIcon";

import { Container, Name, Icon } from "./styles";

type Props = {
    name: string,
    onRemove: () => void;
}

export function ItemCard({name, onRemove}: Props) {
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
                onPress={onRemove}
            />
        </Container>
    )
}