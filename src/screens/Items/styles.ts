import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme}) => theme.colors.gray_600};
    padding: 24px;
`;

export const Form = styled.View` 
    width: 100%;
    background-color: ${({theme}) => theme.colors.gray_700};

    flex-direction: row;
    justify-content: center;

    border-radius: 6px;
`;

export const HeaderList = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;

    margin: 29px 0 18px;
`;

export const NumberOfItems = styled.Text`
    ${({theme}) => css`
        color: ${theme.colors.gray_200};
        font-family: ${theme.font_family.bold};
        font-size: ${theme.font_size.sm}px;
    `}

    margin-left: 10px
`;
