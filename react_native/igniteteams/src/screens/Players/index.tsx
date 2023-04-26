import { Container, Form } from './styles';
import { Header } from '@components/Header';
import { Highlith } from '@components/Highlight/inde';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';

export function Players() {
  return (
    <Container>
      <Header showBackButton={true} />

      <Highlith
        title='Nome da turma'
        subtitle='Adicione uma turma' />

      <Form>
        <Input
          placeholder='Nome da turma'
          autoCorrect={false} />

        <ButtonIcon
          icon='add'
          type='PRIMARY'
        />
      </Form>
    </Container>
  )
}
