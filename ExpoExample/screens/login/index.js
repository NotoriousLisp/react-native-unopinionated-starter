import React, { useState, useRef } from 'react';
import tinycolor from 'tinycolor2';
import { View, Image, ScrollView } from 'react-native';
import ROUTES from 'app/constants/routes';
import IMAGES from 'app/assets/images';
import { Button, BTN_CLASSES, Flex, Input, Helpers } from 'app/components/primitives';
import ThemePicker from 'app/components/theme.picker';
import { useGlobalContext } from 'app/state/global.state';
import styles from './styles';

const simulateAuthenticationCheck = async actions => {
  await new Promise(resolve => setTimeout(resolve, 2000));
};

export default function SplashScreen({ navigation }) {
  const { actions, state } = useGlobalContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let passwordInput = useRef(null);
  const focusPasswordInput = () => {
    console.log(passwordInput);
    if (passwordInput.current) {
      passwordInput.current.focus();
    }
  };
  const { theme } = state;
  console.log('rendering ', username, password);
  return (
    <Flex flex={1} column alignItems='stretch' style={{ backgroundColor: theme.primary }}>
      <View style={[styles.backgroundCircle, { backgroundColor: theme.secondary }]} />
      <View style={[styles.tinyCircle, { backgroundColor: theme.secondary }]} />
      <Flex justifyContent='center' alignItems='center'>
        <Image style={styles.logo} source={IMAGES.logo} />
      </Flex>
      <ScrollView
        keyboardDismissMode='on-drag'
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
          style={[styles.innerContainer, { backgroundColor: Helpers.tertiary(theme.primary) }]}
        >
          <Input
            color={theme.accent}
            onChangeText={setUsername}
            value={username}
            onSubmitEditing={focusPasswordInput}
            returnKeyType='next'
            autoCapitalize='none'
            autoCorrect={false}
            textContentType='username'
            autoCompleteType='username'
            placeholder='Username'
          />
          <Input
            forwardRef={passwordInput}
            style={{ marginVertical: 10 }}
            secureTextEntry
            color={theme.accent}
            onChangeText={setPassword}
            value={password}
            textContentType='password'
            placeholder='Password'
          />
          <Flex alignItems='center' style={{ marginTop: 10 }}>
            <Button
              className={BTN_CLASSES.secondary}
              label='Signup'
              onPress={() => navigation.navigate(ROUTES.Signup)}
              style={{ flex: 1, marginRight: 10 }}
            />
            <Button className={BTN_CLASSES.primary} label='Login' style={{ flex: 1 }} />
          </Flex>
        </Flex>
        <Button
          className={BTN_CLASSES.accent}
          label='Forgot Password'
          style={{ marginVertical: 10 }}
        />
      </ScrollView>
      <Flex
        flex={1}
        column
        justifyContent='flex-end'
        alignItems='stretch'
        style={{ paddingBottom: 30 }}
      >
        <ThemePicker />
      </Flex>
    </Flex>
  );
}
