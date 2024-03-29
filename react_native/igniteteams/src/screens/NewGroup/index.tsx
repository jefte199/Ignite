import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Content, Icon, } from './styles';
import { Header } from '@components/Header';
import { Highlith } from '@components/Highlight/inde';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

export function NewGroup() {
  const [group, setGroup] = useState('');
  const navigation = useNavigation();

  function handleNew() {
    navigation.navigate('players', { group })
  }

  return (
    <Container>
      <Header showBackButton={true} />

      <Content>
        <Icon />

        <Highlith
          title="Nova Turma"
          subtitle="Crie a Turma" />

        <Input
          placeholder='Nome da turma'
          onChangeText={setGroup} />

        <Button
          title=" Criar"
          type='PRIMARY'
          onPress={handleNew}
          style={{ marginTop: 20 }} />

      </Content>
    </Container>
  );
}
