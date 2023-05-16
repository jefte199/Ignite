import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';
import theme from './src/themes';
//import { Groups } from '@screens/Groups';
//import { NewGroup } from '@screens/NewGroup';
import { Players } from '@screens/Players';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Players /> : <Loading /> }
      <StatusBar 
      style="light" 
      backgroundColor="transparent"
      translucent={true}/>
    </ThemeProvider>
  );
}
