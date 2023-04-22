import { useState } from "react";
import { FlatList } from "react-native";
import { Container, } from './styles';
import { Header } from '@components/Header';
import { Highlith } from '@components/Highlight/inde';
import { GroupCard } from '@components/GroupCard';

export function Group() {
  const [group, setGroup] = useState(['Jogador']);

  return (
    <Container>
      <Header showBackButton={false} />

      <Highlith
        title='Turmas'
        subtitle='Jogue com sua turma' />

      <FlatList
        data={group}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
          />
        )}
      />
    </Container>
  );
}
