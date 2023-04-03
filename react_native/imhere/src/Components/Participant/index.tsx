import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

interface props {
  name: string;
  handleRemove: () => void;
}

export function Participant ({ name, handleRemove }: props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>

      <TouchableOpacity
          style={styles.button}
          onPress={handleRemove}
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