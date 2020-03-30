import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ROUTES from 'app/constants/routes';
import SplashScreen from 'app/screens/splash';
import LoginScreen from 'app/screens/login';
import SignupScreen from 'app/screens/signup';
import HomeScreen from 'app/screens/home';
import Drawer from 'app/screens/drawer';
import styles from './styles';

const Main = createStackNavigator();
const Auth = createDrawerNavigator();
const NoAuth = createStackNavigator();
const HomeStack = createStackNavigator();

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

  const HomeStackNavigation = () => (
    <HomeStack.Navigator initialRouteName={ROUTES.Home}>
      <HomeStack.Screen name={ROUTES.Home} component={HomeScreen} />
    </HomeStack.Navigator>
  );

  const AuthNavigation = () => {
    return (
      <Auth.Navigator
        initialRouteName={ROUTES.HomeStack}
        drawerContent={props => <Drawer {...props} />}
      >
        <Auth.Screen name={ROUTES.HomeStack} component={HomeStackNavigation} />
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
