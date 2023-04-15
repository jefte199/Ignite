import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import theme from './src/themes';
import { Group } from '@screens/Groups';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Group />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
