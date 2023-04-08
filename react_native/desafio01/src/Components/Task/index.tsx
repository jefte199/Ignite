import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Feather';
const checkIcon = require('../../../assets/check.png');
const noCheckIcon = require('../../../assets/noCheck.png');
const logo = require('../../../assets/Logo.png');

export function Task() {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            style={styles.image}
            source={checkIcon}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <Text style={styles.text}>Lorem ipsum dolor sit amet, conse etur adip isi cing elit. Quib usdam, eveniet?</Text>

        <TouchableOpacity>
          <Text>
            <Icon name="trash-2" size={20} color="#737373" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}