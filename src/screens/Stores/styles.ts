import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.gray_600};
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.blue};
`