import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store/store';
import RootStack from './navigation/RootStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import styled, { theme } from './styles';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import useCustomFonts from './hooks/useCustomFonts';
import useIconFont from './hooks/useIconFont';
import { AuthProvider } from './hooks/useAuth';

import 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await useCustomFonts();
        await useIconFont();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <AuthProvider>
            <Container onLayout={onLayoutRootView}>
              <RootStack />
            </Container>
          </AuthProvider>
        </ReduxProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const Container = styled.View`
  flex: 1;
`;
