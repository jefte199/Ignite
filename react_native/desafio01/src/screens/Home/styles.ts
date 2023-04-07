import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#191919',
    alignItems: 'center',
  },
  containerTop: {
    width: '100%',
    height: '20%',
    position: 'relative',
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 38,
  },
  input: {
    backgroundColor: '#262626',
    height: 56,
    width: '50%',
    borderRadius: 5,
    color: '#FFF',
    padding: 16,
    fontSize: 16,
    marginRight: 7,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 6,
    backgroundColor: '#32cf67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    transform: [{ translateY: 25 }],
    width: '100%',
    flexDirection: 'row',
  },
  options: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
    bottom: 0,
    transform: [{ translateY: 25 }],
    width: '100%',
    flexDirection: 'row',
  }
});
