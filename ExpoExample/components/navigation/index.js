// In App.js in a new project

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from '../../constants/routes';
import LandingScreen from '../landing.screen';
import LoginScreen from '../login.screen';
import HomeScreen from '../home.screen';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTES.Landing}>
        <Stack.Screen
          name={ROUTES.Landing}
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={ROUTES.Login} component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name={ROUTES.Home} component={HomeScreen} options={{ title: 'Home' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*
 * Note: The Stack.Screen component prop accepts a component, not a render function.
 * Don't pass a inline function (e.g. component={() => <HomeScreen />}),
 * or your component will unmount and remount losing all state when the parent component re-renders.
 */
