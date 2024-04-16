import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = 'GREEN' | 'RED';

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
    flex: 1;

    min-height: 56px;
    max-height: 56px;

    background-color: ${({theme, type}) => type === "GREEN" ? theme.colors.green_700 : theme.colors.red_dark};
    border-radius: 6px;

    justify-content: center;
    align-items: center;

    margin-top: 16px;
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.font_size.md}px;
        font-family: ${theme.font_family.bold};
        color: ${theme.colors.white};
    `}
`;