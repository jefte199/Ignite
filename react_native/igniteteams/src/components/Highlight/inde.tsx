import { Container, Title, SubTitle } from "./stiles";

type Props = {
  title: string;
  subtitle: string;
}

export function Highlith({ title, subtitle }: Props) {
  return (
    <Container>
      <Title>
        {title}
      </Title>

      <SubTitle>
        {subtitle}
      </SubTitle>
    </Container>
  )
}