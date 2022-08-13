import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store/store';
import RootStack from './navigation/RootStack';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles';
import { useFonts } from 'expo-font';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Gilroy-Regular': require('./assets/fonts/Gilroy-Regular.ttf'),
    'Gilroy-SemiBold': require('./assets/fonts/Gilroy-SemiBold.ttf'),
    'Gilroy-Medium': require('./assets/fonts/Gilroy-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <></>;
  }

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
