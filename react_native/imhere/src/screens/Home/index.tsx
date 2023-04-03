import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Participant } from '../../Components/Participant';
import { styles } from './styles';

export function Home() {
  const person = ['Jefté', 'Jesse', 'Jairo', 'Jerusa', 'Jefté', 'Jesse', 'Jairo', 'Jerusa', 'Jefté', 'Jesse', 'Jairo', 'Jerusa']
  function handleAdd() {
    console.log("add person")
  }

  function handleRemove(name: string) {
    console.log(`remove ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        My app
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 31 de Março de 2023
      </Text>

      <View
        style={styles.form}
      >
        <TextInput
          style={styles.input}
          placeholder='Name'
          placeholderTextColor='#d1d1d1'
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleAdd}
        >
          <Text
            style={styles.buttonText}
          >
            +
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.buttonText}>
            Nenhum cadastro encontrado
          </Text>
        )}
        data={person}
        keyExtractor={item => item}
        renderItem={({ item }) => {
          return <Participant
            key={item}
            name={item}
            handleRemove={() => handleRemove(item)}
          />
        }}
      />

    </View>
  )
}
