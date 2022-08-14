import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/Profile';
import { RootStackParamList, Screen } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function NavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Screen.Profile} component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default NavigationStack;
