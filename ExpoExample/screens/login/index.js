import React, { useState, useRef } from 'react';
import { View, Image, ScrollView, ActivityIndicator } from 'react-native';
import ROUTES from 'app/constants/routes';
import IMAGES from 'app/assets/images';
import { Button, BTN_CLASSES, Flex, Input, Helpers, Text } from 'app/components/primitives';
import ThemePicker from 'app/components/theme.picker';
import { useThemeContext } from 'app/state/theme.state';
import { useGlobalContext } from 'app/state/global.state';
import styles from './styles';

const simulateAuthenticationCheck = async actions => {
  await new Promise(resolve => setTimeout(resolve, 2000));
};

export default function LoginScreen({ navigation }) {
  const [theme] = useThemeContext();
  const [state, actions] = useGlobalContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  let passwordInput = useRef(null);
  const focusPasswordInput = () => {
    console.log(passwordInput);
    if (passwordInput.current) {
      passwordInput.current.focus();
    }
  };
  const submitLogin = async () => {
    setLoading(true);
    const error = await actions.login({ username, password }, navigation);
    if (error) {
      setError(error);
      setLoading(false);
    }
  };
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
          {!!error && (
            <Flex justifyContent='center' style={styles.errorContainer}>
              <Text style={{ color: theme.accent }}>{error}</Text>
            </Flex>
          )}
          <Flex alignItems='center' style={{ marginTop: 10 }}>
            <Button
              className={BTN_CLASSES.secondary}
              label='Signup'
              onPress={() => navigation.navigate(ROUTES.Signup)}
              style={{ flex: 1, marginRight: 10 }}
            />
            <Button
              isLoading={isLoading}
              className={BTN_CLASSES.primary}
              label='Login'
              style={{ flex: 1 }}
              onPress={submitLogin}
            />
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
