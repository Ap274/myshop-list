import { TextInputProps, TextInput } from "react-native";
import { Container } from "./styles";
import theme from "src/theme";

type Props = TextInputProps & {
    inputRef?: React.RefObject<TextInput>;
}

export function Input({inputRef, ...rest}: Props) {
    return (
        <Container
            ref={inputRef}
            {...rest}
            placeholderTextColor={theme.colors.gray_300}
        />
    )
}