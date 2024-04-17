import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons"

export const Container = styled.View`
    width: 100%;
    height: 56px;

    background-color: ${({theme}) => theme.colors.gray_450};
    border-radius: 6px;

    flex-direction: row;
    align-items: center;
    
    margin-bottom: 14px;
`;

export const Name = styled.Text`
    flex: 1;

    ${({theme}) => css`
        font-size: ${theme.font_size.md}px;
        font-family: ${theme.font_family.regular};
        color: ${theme.colors.gray_200};
    `}

    text-transform: capitalize;
`;

export const Icon = styled(Feather).attrs(({theme}) => ({
    size: 21,
    color: theme.colors.gray_200,
}))`
    margin-left: 16px;
    margin-right: 10px;
`; 