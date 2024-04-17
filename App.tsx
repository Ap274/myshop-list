import { ThemeProvider } from 'styled-components/native';
import { useFonts, Quicksand_400Regular, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import { StatusBar } from 'react-native';

import theme from 'src/theme';

import { Loading } from '@components/Loading';

import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({ Quicksand_400Regular, Quicksand_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      { fontsLoaded ? <Routes/> : <Loading /> }
    </ThemeProvider>
  );
}
