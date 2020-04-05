import React, { Fragment } from 'react';
import { TouchableOpacity, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ROUTES from 'app/constants/routes';
import SplashScreen from 'app/screens/splash';
import LoginScreen from 'app/screens/login';
import SignupScreen from 'app/screens/signup';
import HomeScreen from 'app/screens/home';
import Drawer from 'app/screens/drawer';
import SettingScreen from 'app/screens/settings';
import DetailScreen from 'app/screens/detail.view';
import { useThemeContext } from 'app/state/theme.state';
import { Helpers, Icon, ICON_TYPES } from 'app/components/primitives';
import styles from './styles';

const Main = createStackNavigator();
const Auth = createDrawerNavigator();
const NoAuth = createStackNavigator();
const HomeStack = createStackNavigator();

export default function Navigation() {
  const NoAuthNavigation = () => {
    const [theme] = useThemeContext();
    return (
      <Fragment>
        <StatusBar barStyle={theme.isDark ? 'light-content' : 'dark-content'} />
        <NoAuth.Navigator mode='modal' screenOptions={{ headerShown: false }}>
          <NoAuth.Screen name={ROUTES.Login} component={LoginScreen} />
          <NoAuth.Screen
            name={ROUTES.Signup}
            component={SignupScreen}
            options={{ cardStyle: styles.modal }}
          />
        </NoAuth.Navigator>
      </Fragment>
    );
  };

  const HomeStackNavigation = ({ navigation }) => {
    const [theme] = useThemeContext();
    const renderDrawerToggle = () => (
      <TouchableOpacity
        style={{ marginLeft: 15 }}
        activeOpacity={0.7}
        onPress={() => navigation.toggleDrawer()}
      >
        <Icon type={ICON_TYPES.feather} name='menu' size={30} color={theme.accent} />
      </TouchableOpacity>
    );
    const options = {
      headerShown: true,
      headerTintColor: theme.accent,
      headerStyle: {
        backgroundColor: Helpers.contrast(theme.primary),
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
        },
      },
    };
    return (
      <Fragment>
        <StatusBar barStyle={theme.isDark ? 'light-content' : 'dark-content'} />
        <HomeStack.Navigator screenOptions={options} initialRouteName={ROUTES.Home}>
          <HomeStack.Screen
            options={{ headerLeft: renderDrawerToggle }}
            name={ROUTES.Home}
            component={HomeScreen}
          />
          <HomeStack.Screen
            options={{ title: 'Detail View', headerBackTitle: ' ' }}
            name={ROUTES.DetailView}
            component={DetailScreen}
          />
          <HomeStack.Screen
            options={{ title: 'User Settings', headerBackTitle: 'Back' }}
            name={ROUTES.UserSettings}
            component={SettingScreen}
          />
        </HomeStack.Navigator>
      </Fragment>
    );
  };

  const AuthNavigation = () => {
    return (
      <Auth.Navigator
        initialRouteName={ROUTES.HomeStack}
        drawerContent={(props) => <Drawer {...props} />}
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
            gestureEnabled: false,
          }}
        />
      </Main.Navigator>
    </NavigationContainer>
  );
}
