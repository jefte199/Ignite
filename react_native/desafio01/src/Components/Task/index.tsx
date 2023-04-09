import React from 'react';  
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { task } from '../Types';
const checkIcon = require('../../../assets/check.png');
const noCheckIcon = require('../../../assets/noCheck.png');
const logo = require('../../../assets/Logo.png');

export function Task({ tasks, removeTask, CountCheck, setCountCheck }: task) {
  const [statusTask, setStatusTask] = React.useState<boolean>(false);

  const Check = () => {
    setStatusTask(!statusTask)
    if (statusTask) {
      setCountCheck(CountCheck - 1)
    } else {
      setCountCheck(CountCheck + 1)
    }
  }

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={Check}>
          <Image
            style={styles.image}
            source={statusTask ? checkIcon : noCheckIcon}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <Text style={[styles.text, { flex: 1 }, {textDecorationLine: `${statusTask ? 'line-through' : 'none'}`}]}>
          {tasks}
        </Text>

        <TouchableOpacity onPress={removeTask}>
          <Text>
            <Icon name="trash-2" size={20} color="#737373" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}