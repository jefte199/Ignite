import { TouchableOpacityProps } from "react-native";
import { Container, Title, FilterStyleProps } from "./styles";

type Props = TouchableOpacityProps & FilterStyleProps & {
  title: string;
  isAction?: boolean;
}

export function Filter({ title, isAction, ...rest }: Props) {
  return (
    <Container
      isAction={true}
      {...rest}>

      <Title>
        {title}
      </Title>
    </Container>
  )
}