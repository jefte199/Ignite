import { TouchableOpacityProps } from "react-native";
import { Container, Title, ButtonTypeStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type:  ButtonTypeStyleProps;
}

export function Button ({ title, type, ...res }: Props) {
  return (
    <Container type={type} {...res} >
      <Title>{title}</Title>
    </Container>
  )
}