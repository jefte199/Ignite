import { Text, View, TextInput } from 'react-native';
import styles from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        My app
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 31 de Março de 2023
      </Text>

      <TextInput
       style={styles.input}
       placeholder='Name'
       placeholderTextColor='#d1d1d1'
       />
    </View>
  )
}
