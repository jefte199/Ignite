import React from 'react';
import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from './styles';
const logo = require('../../../assets/Logo.png');

export function Home() {
  const [taskInput, setTaskInput] = React.useState<string>('');
  const addTask = () => {
    return console.log(taskInput)
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Image
          source={logo}
        />

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder='Tarefa'
            placeholderTextColor='#d1d1d1'
            onChangeText={e => { setTaskInput(e) }}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={addTask}
          >
            <Text style={styles.buttonText}>
              <Icon name="pluscircleo" size={20} color="#FFF" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.options}>
          <TouchableOpacity onPress={addTask}>
            <Text style={{ color: '#4EA8DE' }} >
              Criadas
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={addTask}>
            <Text style={{ color: '#5E60CE' }} >
              Concluidas
            </Text>
          </TouchableOpacity>

        </View>

    </View>
  );
}

