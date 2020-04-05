import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { Flex, Text, Helpers, Icon, ICON_TYPES } from 'app/components/primitives';
import { useThemeContext } from 'app/state/theme.state';
import { useGlobalContext } from 'app/state/global.state';
import ROUTES from 'app/constants/routes';
import PUG from './pug.jpeg';
import styles from './styles';

export default function Drawer({ navigation }) {
  const [theme] = useThemeContext();
  const [state, actions] = useGlobalContext();
  const user = state.user || {};
  return (
    <Flex
      flex={1}
      column
      alignItems='stretch'
      justifyContent='space-between'
      style={[styles.drawer, { backgroundColor: Helpers.inverse(theme.primary) }]}
    >
      <View style={[styles.backgroundCircle, { backgroundColor: theme.secondary }]} />
      <View style={[styles.tinyCircle, { backgroundColor: theme.secondary }]} />
      <Flex flex={1} column alignItems='stretch'>
        <Flex flex={0} column alignItems='center' style={styles.profile}>
          <Image source={PUG} style={styles.avatar} />
          <Text color={theme.accent}>
            Welcome {user.firstName} {user.lastName}
          </Text>
        </Flex>
        <TouchableOpacity activeOpacity={0.7} onPress={navigation.toggleDrawer} style={styles.link}>
          <Icon type={ICON_TYPES.feather} name='home' color={theme.accent} size={24} />
          <Text color={theme.accent} size={18} style={{ marginLeft: 10 }}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate(ROUTES.UserSettings)}
          style={styles.link}
        >
          <Icon type={ICON_TYPES.feather} name='settings' color={theme.accent} size={24} />
          <Text color={theme.accent} size={18} style={{ marginLeft: 10 }}>
            Settings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => actions.signout(navigation)}
          style={styles.link}
        >
          <Icon type={ICON_TYPES.feather} name='log-out' color={theme.accent} size={24} />
          <Text color={theme.accent} size={18} style={{ marginLeft: 10 }}>
            Log Out
          </Text>
        </TouchableOpacity>
      </Flex>
    </Flex>
  );
}
