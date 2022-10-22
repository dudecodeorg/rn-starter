import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/Welcome';
import { GuestStackParamsList, Screen } from './index';

const Stack = createNativeStackNavigator<GuestStackParamsList>();

function GuestStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Screen.Welcome} component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

export default GuestStack;
