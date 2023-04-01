import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

interface props {
  name: string
}

export function Participant ({ name }: props) {
  function handleAdd() {
    console.log("Click")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>

      <TouchableOpacity
          style={styles.button}
          onPress={handleAdd}
        >
          <Text
            style={styles.buttonText}
          >
            -
          </Text>
        </TouchableOpacity>
    </View>
  )
}