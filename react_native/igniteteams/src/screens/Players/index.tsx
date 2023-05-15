import { useState } from 'react';
import { FlatList } from 'react-native';

import { Container, Form, HeaderList, NumbersOfPlayers } from './styles';

import { Header } from '@components/Header';
import { Highlith } from '@components/Highlight/inde';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { PlayerCard } from '@components/PlayerCard';

export function Players() {
  const [team, setTeam] = useState("Time A")
  const [players, setPlayers] = useState(['Jefté'])
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

        <NumbersOfPlayers>
          {players.length}
        </NumbersOfPlayers>
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
      />
    </Container>
  )
}
