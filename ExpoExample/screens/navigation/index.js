import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from 'app/constants/routes';
import SplashScreen from 'app/screens/splash';
import LoginScreen from 'app/screens/login';
import SignupScreen from 'app/screens/signup';
import HomeScreen from 'app/screens/home';
import styles from './styles';

const Main = createStackNavigator();
const Auth = createStackNavigator();
const NoAuth = createStackNavigator();

export default function Navigation() {
  const NoAuthNavigation = () => {
    return (
      <NoAuth.Navigator mode='modal' screenOptions={{ headerShown: false }}>
        <NoAuth.Screen name={ROUTES.Login} component={LoginScreen} />
        <NoAuth.Screen
          name={ROUTES.Signup}
          component={SignupScreen}
          options={{ cardStyle: styles.modal }}
        />
      </NoAuth.Navigator>
    );
  };

  const AuthNavigation = () => {
    return (
      <Auth.Navigator>
        <Auth.Screen name={ROUTES.Home} component={HomeScreen} />
      </Auth.Navigator>
    );
  };

  return (
    <NavigationContainer mode='modal'>
      <Main.Navigator initialRouteName={ROUTES.Splash} screenOptions={{ headerShown: false }}>
        <Main.Screen
          name={ROUTES.Splash}
          component={SplashScreen}
          options={{ headerShown: false, animationTypeForReplace: 'pop' }}
        />
        <Main.Screen
          name={ROUTES.NoAuth}
          component={NoAuthNavigation}
          options={{ gestureEnabled: false }}
        />
        <Main.Screen
          name={ROUTES.Auth}
          component={AuthNavigation}
          options={{
            title: 'Welcome',
            gestureEnabled: false
          }}
        />
      </Main.Navigator>
    </NavigationContainer>
  );
}

/*
 * Note: The Stack.Screen component prop accepts a component, not a render function.
 * Don't pass a inline function (e.g. component={() => <HomeScreen />}),
 * or your component will unmount and remount losing all state when the parent component re-renders.
 */
