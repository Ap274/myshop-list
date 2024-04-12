import { ThemeProvider } from 'styled-components';
import { useFonts, Quicksand_400Regular, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import { StatusBar } from 'react-native';

import theme from 'src/theme';

import { Stores } from '@screens/Stores';

import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Quicksand_400Regular, Quicksand_700Bold });


  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      { fontsLoaded ? <Stores/> : <Loading /> }
    </ThemeProvider>
  );
}
