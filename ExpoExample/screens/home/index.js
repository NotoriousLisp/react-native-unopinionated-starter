import React, { useEffect } from 'react';
import { Flex, Button } from 'app/components/primitives';
import ThemePicker from 'app/components/theme.picker';
import { useThemeContext } from '../../state/theme.state';
import { useGlobalContext } from '../../state/global.state';
import { Helpers } from '../../components/primitives';

export default function HomeScreen({ navigation }) {
  const [theme] = useThemeContext();
  const [state, actions] = useGlobalContext();
  useEffect(() => {
    navigation.setOptions({
      title: `Welcome Back ${state.user.firstName} ${state.user.lastName}`,
      headerStyle: {
        backgroundColor: Helpers.tertiary(theme.primary)
      },
      headerTintColor: theme.accent
    });
  }, [theme]);
  return (
    <Flex flex={1} column style={{ backgroundColor: theme.primary }}>
      <Button
        style={{ alignSelf: 'center' }}
        label='Logout'
        onPress={() => actions.updateGlobal({ user: null })}
      />
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
