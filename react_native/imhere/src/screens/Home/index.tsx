import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Participant } from '../../Components/Participant';
import { styles } from './styles';

export function Home() {
  const person = ['Jefté', 'Jesse', 'Jairo', 'Jerusa', 'Joana', 'Jadi', 'Miriam', 'Raimundo', 'Samara', 'Saulo', 'Jeú', 'Maquir']
  function handleAdd() {
    if (person.includes("Jefté")){
      return Alert.alert("Participante", "Já Existe esse participante")
    }
    console.log("add person")
  }

  function handleRemove(name: string) {
    return Alert.alert("Remove", `Deseja Remover ${name}?`, [
      {
        text: 'sim',
        onPress: () => Alert.alert('Deletado!', `Usuario ${name} foi removido`)
      },
      {
        text: 'não',
        style: 'cancel'
      }
    ])
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
        data={person}
        keyExtractor={item => item}
        renderItem={({ item }) => {
          return <Participant
            key={item}
            name={item}
            handleRemove={() => handleRemove(`${item}`)}
          />
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.buttonText} >
            Ainda não a person
          </Text>
        )}
      />
    </View>
  )
}
