import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import useAuth from '../hooks/useAuth';
import { useEffect } from 'react';
import NavigationStack from './NavigationStack';
import { Flows, RootStackParamList, Screen } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  const { checkLoginStatus, isAuthorized } = useAuth();

  useEffect(() => {
    checkLoginStatus().catch(console.error);
  }, [checkLoginStatus]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isAuthorized && (
          <Stack.Screen
            options={{ headerShown: false }}
            name={Screen.Home}
            component={HomeScreen}
          />
        )}
        {isAuthorized && (
          <Stack.Screen
            options={{ headerShown: false }}
            name={Flows.Authorized}
            component={NavigationStack}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
