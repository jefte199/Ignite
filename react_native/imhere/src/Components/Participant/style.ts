import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#FFF',
    padding: 16,
    marginRight: 7,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 6,
    backgroundColor: '#C23E44',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
})