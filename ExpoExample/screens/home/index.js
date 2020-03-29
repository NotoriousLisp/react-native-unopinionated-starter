import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Flex, Button, Text } from 'app/components/primitives';
import ThemePicker from 'app/components/theme.picker';
import { useThemeContext } from '../../state/theme.state';
import { useGlobalContext } from '../../state/global.state';
import { Helpers } from '../../components/primitives';
import styles from './styles';

export default function HomeScreen({ navigation }) {
  const [theme] = useThemeContext();
  const [state, actions] = useGlobalContext();
  useEffect(() => {
    navigation.setOptions({
      title: `Welcome Back ${state.user.firstName} ${state.user.lastName}`,
      headerStyle: {
        backgroundColor: Helpers.tertiary(theme.primary),
        shadowRadius: 0,
        shadowOffset: {
          height: 0
        }
      },
      headerTintColor: theme.accent
    });
  }, [theme]);
  return (
    <Flex
      flex={1}
      column
      alignItems='stretch'
      justifyContent='flex-end'
      style={{ backgroundColor: theme.primary }}
    >
      <Flex
        flex={1}
        column
        justifyContent='flex-end'
        alignItems='stretch'
        alignSelf='stretch'
        style={{ paddingBottom: 30 }}
      >
        <ThemePicker />
        <Button
          style={{ alignSelf: 'center', marginTop: 10 }}
          label='Logout'
          onPress={() => actions.signout(navigation)}
        />
      </Flex>
      <Flex
        alignItems='center'
        flex={0}
        style={[styles.tabBarContainer, { backgroundColor: Helpers.tertiary(theme.primary) }]}
      >
        <TouchableOpacity activeOpacity={0.7} onPress={() => null} style={styles.tab}>
          <Text>Tab One</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={() => null} style={styles.tab}>
          <Text>Tab Two</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={() => null} style={styles.tab}>
          <Text>Tab Three</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={() => null} style={styles.tab}>
          <Text>Tab Four</Text>
        </TouchableOpacity>
      </Flex>
    </Flex>
  );
}
