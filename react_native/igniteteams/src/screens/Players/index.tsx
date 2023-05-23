import { useState } from 'react';
import { FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { Container, Form, HeaderList, NumberOfPlayers } from './styles';

import { Header } from '@components/Header';
import { Highlith } from '@components/Highlight/inde';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

type RouteParams = {
  group: string;
}

export function Players() {
  const [team, setTeam] = useState("Time A")
  const [players, setPlayers] = useState([])
  const route = useRoute();
  const { group } = route.params as RouteParams;
  return (
    <Container>
      <Header showBackButton={true} />

      <Highlith
        title={group}
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

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isAction={item === team} />
          )}
          horizontal={true}
        />

        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard
            name={item}
            onRemove={() => { }}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty
            message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 }
        ]}
      />
      <Button
        title="Remover Turma"
        type="SECONDARY"
      />
    </Container>
  )
}
