import { Text, View } from 'react-native';
import styles from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        My app
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 31 de Março de 2023 
      </Text>
    </View>
  )
}
