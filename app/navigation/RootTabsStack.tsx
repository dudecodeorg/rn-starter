import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CalendarTab from '../screens/RootTabs/CalendarTab';
import ClientsTab from '../screens/RootTabs/ClientsTab';
import ServicesTab from '../screens/RootTabs/ServicesTab';
import SettingsTab from '../screens/RootTabs/SettingsTab';
import { Tab, TabsStackParamList } from './index';

const TabStack = createBottomTabNavigator<TabsStackParamList>();

function RootTabsStack() {
  return (
    <TabStack.Navigator screenOptions={{ headerShown: false }}>
      <TabStack.Screen name={Tab.Calendar} component={CalendarTab} />
      <TabStack.Screen name={Tab.Services} component={ServicesTab} />
      <TabStack.Screen name={Tab.Clients} component={ClientsTab} />
      <TabStack.Screen name={Tab.Settings} component={SettingsTab} />
    </TabStack.Navigator>
  );
}

export default RootTabsStack;
