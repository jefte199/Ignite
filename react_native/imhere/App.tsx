import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#131016',
      padding: 24,
    }}>
      <Text style={{
        color: '#fdfcfe', 
        marginTop: 30, 
        fontSize: 24,
        fontWeight: 'bold',
      }}>My app</Text>

      <Text style={{
        color: '#6b6b6b',
        fontSize: 16,
      }}>Para testes de aplicação</Text>
    </View>
  )
}