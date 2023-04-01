import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export function Home() {
  function handleAdd() {
    console.log("Click")
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
    </View>
  )
}
