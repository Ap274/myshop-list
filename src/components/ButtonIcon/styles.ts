import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons"

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = { 
    type: ButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
    width: 56px;
    height: 56px;

    justify-content: center;
    align-items: center;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type}) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.colors.green_700 : theme.colors.red
}))``;