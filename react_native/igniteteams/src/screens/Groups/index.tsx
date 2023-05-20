import { useState } from "react";
import { FlatList } from "react-native";
import { Container, } from './styles';
import { Header } from '@components/Header';
import { Highlith } from '@components/Highlight/inde';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Groups() {
  const [groups, setGroups] = useState([]);

  return (
    <Container>
      <Header showBackButton={false} />

      <Highlith
        title="Turmas"
        subtitle="Jogue com sua turma" />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <ListEmpty message="Cadastre a primeira Turma" />}
      />

      <Button
        title={'Criar nova turma'}
        type={'PRIMARY'} />
    </Container>
  );
}
