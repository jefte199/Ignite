import { Container, Content, Icon, } from './styles';
import { Header } from '@components/Header';
import { Highlith } from '@components/Highlight/inde';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

export function NewGroup() {

  return (
    <Container>
      <Header showBackButton={true} />

      <Content>
        <Icon />

        <Highlith
          title="Nova Turma"
          subtitle="Crie a Turma" />

        <Input
         placeholder='Nome da turma' /> 

        <Button
          title=" Criar"
          type='PRIMARY' 
          style={{ marginTop: 20 }} />

      </Content>
    </Container>
  );
}
