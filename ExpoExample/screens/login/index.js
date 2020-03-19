import React, { useState } from 'react';
import { View, Image, ScrollView } from 'react-native';
import ROUTES from 'app/constants/routes';
import IMAGES from 'app/assets/images';
import { Flex, Input } from 'app/components/primitives';
import { useGlobalContext } from 'app/state/global.state';
import styles from './styles';

const simulateAuthenticationCheck = async actions => {
  await new Promise(resolve => setTimeout(resolve, 2000));
};

export default function SplashScreen({ navigation }) {
  const { actions, state } = useGlobalContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { theme } = state;
  return (
    <Flex flex={1} column alignItems='stretch' style={{ backgroundColor: theme.primary }}>
      <View style={[styles.backgroundCircle, { backgroundColor: theme.secondary }]} />
      <Flex justifyContent='center' alignItems='center'>
        <Image style={styles.logo} source={IMAGES.logo} />
      </Flex>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
        horizontal={false}
      >
        <Flex
          flex={0}
          column
          justifyContent='center'
          alignItems='stretch'
          alignSelf='center'
          px={10}
          py={10}
          style={[styles.innerContainer, { backgroundColor: theme.tertiary }]}
        >
          <Input
            color={theme.accent}
            onChangeText={setUsername}
            value={username}
            placeholder='Username'
          />
          <Input
            style={{ marginVertical: 10 }}
            onChangeText={setPassword}
            value={password}
            placeholder='Password'
          />
        </Flex>
      </ScrollView>
    </Flex>
  );
}
