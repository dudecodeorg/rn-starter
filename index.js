import { registerRootComponent } from 'expo';
import * as SplashScreen from 'expo-splash-screen';

import App from './app/App';

SplashScreen.preventAutoHideAsync();

function RNApp() {
  return <App hideSplashScreen={SplashScreen.hideAsync} />;
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(RNApp);

export default RNApp;
