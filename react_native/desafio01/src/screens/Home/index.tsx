import React from 'react';
import { Text, TextInput, View, Image, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Task } from '../../Components/Task';
import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from './styles';
const logo = require('../../../assets/Logo.png');

export function Home() {
  const [taskInput, setTaskInput] = React.useState<string>('');
  const [myTasks, setMyTasks] = React.useState<string[]>([]);
  const [CountCreate, setCountCreate] = React.useState<number>(0);
  const [CountCheck, setCountCheck] = React.useState<number>(0);

  const addTask = () => {
    if (myTasks && myTasks.includes(taskInput)) {
      return Alert.alert("Tarefa já cadastrada", "Escolha outra tarefa")
    }
    setMyTasks(preState => [...preState, taskInput])
    setCountCreate(CountCreate + 1)
    //    setTaskInput('');
  }

  const removeTask = (task: string) => {
    setMyTasks(preStatus => myTasks.filter(item => item !== task))
    setCountCreate(CountCreate - 1)
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
            placeholderTextColor='#737373'
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
        <TouchableOpacity>
          <Text style={{ color: '#4EA8DE' }} >
            Criadas <Text style={{ color: '#FFF' }} >{CountCreate}</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{ color: '#5E60CE' }} >
            Concluidas <Text style={{ color: '#FFF' }} >{CountCheck}</Text>
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={myTasks}
        keyExtractor={(item, index) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Task
            key={item}
            tasks={item}
            CountCheck={CountCheck}
            setCountCheck={setCountCheck}
            removeTask={() => removeTask(item)}
          />
        }}
        ListEmptyComponent={() => (
          <Text style={styles.buttonText} >
            Ainda não a Tarefas
          </Text>
        )}
      />
    </View>
  );
}

