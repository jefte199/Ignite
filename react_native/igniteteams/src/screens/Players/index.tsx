import { Container } from './styles';
import { Header } from '@components/Header';
import { Highlith } from '@components/Highlight/inde';

export function Players () {
  return (
    <Container>
      <Header showBackButton={true} />

      <Highlith
      title='Nome da turma'
      subtitle='Adicione uma turma' />

    </Container>
  )
}
