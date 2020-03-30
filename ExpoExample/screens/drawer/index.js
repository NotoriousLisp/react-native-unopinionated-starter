import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Flex, Text, Helpers, Icon, ICON_TYPES } from 'app/components/primitives';
import { useThemeContext } from 'app/state/theme.state';
import { useGlobalContext } from '../../state/global.state';
import styles from './styles';

export default function Drawer(props) {
  const [theme] = useThemeContext();
  const [state, actions] = useGlobalContext();
  return (
    <Flex
      flex={1}
      column
      alignItems='stretch'
      justifyContent='space-between'
      style={[styles.drawer, { backgroundColor: Helpers.tertiary(theme.primary) }]}
    >
      <Flex flex={1} column alignItems='stretch'>
        <TouchableOpacity activeOpacity={0.7} onPress={() => null} style={styles.link}>
          <Icon type={ICON_TYPES.feather} name='home' color={theme.accent} size={24} />
          <Text color={theme.accent} size={18} style={{ marginLeft: 10 }}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={() => null} style={styles.link}>
          <Icon type={ICON_TYPES.feather} name='settings' color={theme.accent} size={24} />
          <Text color={theme.accent} size={18} style={{ marginLeft: 10 }}>
            My Profile
          </Text>
        </TouchableOpacity>
      </Flex>
      <Flex flex={0}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => actions.signout(props.navigation)}
          style={styles.link}
        >
          <Text color={theme.text} size={18}>
            Log Out
          </Text>
        </TouchableOpacity>
      </Flex>
    </Flex>
  );
}
