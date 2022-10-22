import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from './hooks/useAuth';
import AppRoot from './navigation/AppRoot';
import { store } from './store/store';
import { theme } from './styles';
import 'react-native-gesture-handler';
import { fontsToLoad, iconsToLoad } from './styles/themes/default';

type Props = {
  hideSplashScreen: () => Promise<void>;
};

function App({ hideSplashScreen }: Props) {
  const [fontsLoaded] = useFonts(fontsToLoad);
  const [iconsLoaded] = useFonts(iconsToLoad);

  useEffect(() => {
    if (fontsLoaded && iconsLoaded) {
      setTimeout(hideSplashScreen, 500);
    }
  }, [fontsLoaded, iconsLoaded]);

  if (!fontsLoaded || !iconsLoaded) return null;

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <AuthProvider>
            <AppRoot />
          </AuthProvider>
        </ReduxProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
