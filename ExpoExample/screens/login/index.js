import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import ROUTES from 'app/constants/routes';
import IMAGES from 'app/assets/images';
import { Flex, Text } from 'app/components/primitives';
import { useGlobalContext } from 'app/state/global.state';
import styles from './styles';

const simulateAuthenticationCheck = async actions => {
  await new Promise(resolve => setTimeout(resolve, 2000));
};

export default function SplashScreen({ navigation }) {
  const { actions, state } = useGlobalContext();
  const { theme } = state;
  return (
    <Flex flex={1} column alignItems='stretch' style={{ backgroundColor: theme.primary }}>
      <View style={[styles.backgroundCircle, { backgroundColor: theme.secondary }]} />
      <Flex flex={0} justifyContent='center' alignItems='center'>
        <Image style={styles.logo} source={IMAGES.logo} />
      </Flex>
      <Flex
        flex={0}
        column
        justifyContent='center'
        alignItems='center'
        style={[styles.innerContainer, { backgroundColor: theme.tertiary }]}
      >
        <Text h1>Login</Text>
      </Flex>
    </Flex>
  );
}
