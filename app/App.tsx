import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store/store';
import RootStack from './navigation/RootStack';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <RootStack />
        </ReduxProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
