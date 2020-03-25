import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Button, BTN_CLASSES, Helpers, Flex, Input, Text } from 'app/components/primitives';
import { useThemeContext } from 'app/state/theme.state';
import { useGlobalContext } from 'app/state/global.state';
import ROUTES from 'app/constants/routes';
import styles from './styles';

const INITIAL_FORM = {
  firstName: '',
  lastName: '',
  username: '',
  password: '',
  confirmPassword: ''
};

export default function Signup({ navigation }) {
  const [theme] = useThemeContext();
  const [state, actions] = useGlobalContext();
  const [form, setForm] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);

  const signup = async () => {
    setLoading(true);
    await actions.signup(form);
    setLoading(false);
  };

  const updateForm = changes => setForm({ ...form, ...changes });
  const isValid =
    form.firstName &&
    form.lastName &&
    form.username &&
    form.password &&
    form.password === form.confirmPassword &&
    form.password.length > 6;
  return (
    <Flex
      flex={1}
      column
      alignItems='center'
      style={[
        styles.container,
        { backgroundColor: Helpers.tertiary(theme.primary), borderColor: theme.accent }
      ]}
    >
      <Text className='h1' color={theme.accent}>
        Signup
      </Text>
      <Input
        style={styles.input}
        color={theme.accent}
        onChangeText={firstName => updateForm({ firstName })}
        value={form.firstName}
        returnKeyType='next'
        autoCorrect={false}
        placeholder='First Name'
      />
      <Input
        style={styles.input}
        color={theme.accent}
        onChangeText={lastName => updateForm({ lastName })}
        value={form.lastName}
        returnKeyType='next'
        autoCorrect={false}
        placeholder='Last Name'
      />
      <Input
        style={styles.input}
        color={theme.accent}
        onChangeText={username => updateForm({ username })}
        value={form.username}
        returnKeyType='next'
        autoCapitalize='none'
        autoCorrect={false}
        textContentType='username'
        autoCompleteType='username'
        placeholder='Username'
      />
      <Input
        style={styles.input}
        secureTextEntry
        color={theme.accent}
        onChangeText={password => updateForm({ password })}
        value={form.password}
        textContentType='password'
        placeholder='Password'
      />
      <Input
        style={styles.input}
        secureTextEntry
        color={theme.accent}
        onChangeText={confirmPassword => updateForm({ confirmPassword })}
        value={form.confirmPassword}
        textContentType='password'
        placeholder='Confirm Password'
      />
      <View style={{ flex: 1 }} />
      {loading && <ActivityIndicator size='large' style={{ marginBottom: 30 }} />}
      {!loading && (
        <Button
          big
          disabled={!isValid}
          className={BTN_CLASSES.primary}
          label='Create Your Account'
          style={{ alignSelf: 'stretch', marginBottom: 30 }}
          onPress={signup}
        />
      )}
    </Flex>
  );
}
