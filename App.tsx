import { ThemeProvider } from 'styled-components';
import { useFonts, Quicksand_400Regular, Quicksand_700Bold } from '@expo-google-fonts/quicksand';

import { Stores } from '@screens/Stores';

import theme from 'src/theme';
import { ActivityIndicator } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({ Quicksand_400Regular, Quicksand_700Bold });


  return (
    <ThemeProvider theme={theme}>
      { fontsLoaded ? <Stores/> : <ActivityIndicator /> }
    </ThemeProvider>
  );
}
