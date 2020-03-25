import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import ROUTES from 'app/constants/routes';
import { Flex, Text, Helpers } from 'app/components/primitives';
import { useThemeContext } from 'app/state/theme.state';
import { useGlobalContext } from 'app/state/global.state';

import styles from './styles';

const SIMULATE_USER = { id: '12345', firstName: 'Bob', lastName: 'Smith' };

const simulateAuthenticationCheck = async actions => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const SIMULATE_IS_AUTHENTICATED = true;
  if (SIMULATE_IS_AUTHENTICATED) {
    actions.updateGlobal({ user: SIMULATE_USER });
    return SIMULATE_USER;
  }
  return null;
};

export default function SplashScreen({ navigation }) {
  const [state, actions] = useGlobalContext();
  const [theme] = useThemeContext();
  const checkAuthAndNavigate = async () => {
    try {
      const user = await simulateAuthenticationCheck(actions);
      navigation.navigate(user ? ROUTES.Auth : ROUTES.NoAuth);
    } catch (err) {
      console.error(err);
      navigation.navigate(ROUTES.NoAuth);
    }
  };
  useEffect(() => {
    checkAuthAndNavigate();
  }, []);
  return (
    <Flex flex={1} column justifyContent='center' style={{ backgroundColor: theme.primary }}>
      <Flex
        flex={0}
        column
        justifyContent='center'
        alignItems='center'
        alignSelf='center'
        style={[styles.innerContainer, { backgroundColor: Helpers.tertiary(theme.primary) }]}
      >
        <ActivityIndicator color={theme.accent} />
        <Text h1 color={theme.accent}>
          Loading
        </Text>
      </Flex>
    </Flex>
  );
}
