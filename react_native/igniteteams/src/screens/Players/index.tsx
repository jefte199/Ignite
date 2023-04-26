import { Container } from './styles';
import { Header } from '@components/Header';
import { Highlith } from '@components/Highlight/inde';
import { ButtonIcon } from '@components/ButtonIcon';

export function Players() {
  return (
    <Container>
      <Header showBackButton={true} />

      <Highlith
        title='Nome da turma'
        subtitle='Adicione uma turma' />

      <ButtonIcon />
    </Container>
  )
}
