import { TouchableOpacityProps } from "react-native";
import { Container, Title, FilterStyleProps } from "./styles";

type Props = TouchableOpacityProps & FilterStyleProps & {
  title: string;
}

export function Filter({ title, isAction = false, ...rest }: Props) {
  return (
    <Container
      isAction={isAction}
      {...rest}>

      <Title>
        {title}
      </Title>
    </Container>
  )
}