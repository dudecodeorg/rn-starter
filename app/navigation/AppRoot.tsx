import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppStack from './AppStack';
import GuestStack from './GuestStack';
import { RootStackParamsList, Screen } from './index';

const Stack = createNativeStackNavigator<RootStackParamsList>();

function AppRoot() {
  const navRef = useNavigationContainerRef();
  const isAuth = true;

  return (
    <NavigationContainer ref={navRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuth ? (
          <Stack.Screen name={Screen.Root} component={AppStack} />
        ) : (
          <Stack.Screen name={Screen.Guest} component={GuestStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRoot;
