import { ThemeProvider } from 'styled-components';

import { Stores } from '@screens/Stores';

import theme from 'src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stores />
    </ThemeProvider>
  );
}
