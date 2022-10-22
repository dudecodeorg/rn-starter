import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RootTabsStack from './RootTabsStack';
import { AppStackParamsList, Screen } from './index';

const Stack = createNativeStackNavigator<AppStackParamsList>();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name={Screen.RootTabs}
        component={RootTabsStack}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
