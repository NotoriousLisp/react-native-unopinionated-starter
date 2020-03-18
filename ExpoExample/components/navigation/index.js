import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from 'app/constants/routes';
import SplashScreen from 'app/screens/splash';
import LoginScreen from 'app/screens/login';
import HomeScreen from 'app/screens/home';

const { Screen, Navigator } = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName={ROUTES.Splash}>
        <Screen name={ROUTES.Splash} component={SplashScreen} options={{ headerShown: false }} />
        <Screen name={ROUTES.Login} component={LoginScreen} options={{ headerShown: false }} />
        <Screen name={ROUTES.Home} component={HomeScreen} options={{ title: 'Home' }} />
      </Navigator>
    </NavigationContainer>
  );
}

/*
 * Note: The Stack.Screen component prop accepts a component, not a render function.
 * Don't pass a inline function (e.g. component={() => <HomeScreen />}),
 * or your component will unmount and remount losing all state when the parent component re-renders.
 */
