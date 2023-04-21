import { Container, } from './styles';
import { Header } from '@components/Header';
import { Highlith } from '@components/Highlight/inde';
import { GroupCard } from '@components/GroupCard';

export function Group() {
  return (
    <Container>
      <Header showBackButton={false} />

      <Highlith
        title='Turmas'
        subtitle='Jogue com sua turma' />

        <GroupCard title="Jogador" /> 
    </Container>
  );
}
