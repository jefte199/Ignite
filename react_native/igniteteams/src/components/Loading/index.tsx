import { Container, LoadinfIndicator, Text } from './styles';

export function Loading() {
  return (
    <Container>
      <LoadinfIndicator size="large" color="#fff"/>
      <Text>Carregando...</Text>
    </Container>
  );
}