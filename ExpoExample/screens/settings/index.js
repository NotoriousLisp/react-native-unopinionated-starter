import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';
import {
  Button,
  BTN_CLASSES,
  Helpers,
  Flex,
  Input,
  Text,
  Icon,
  ICON_TYPES,
} from 'app/components/primitives';
import { useThemeContext } from 'app/state/theme.state';
import { useGlobalContext } from 'app/state/global.state';
import ROUTES from 'app/constants/routes';
import styles from './styles';

export default function Settings({ navigation }) {
  const [theme] = useThemeContext();
  const [state, actions] = useGlobalContext();
  const itemStyles = [styles.item, { backgroundColor: Helpers.contrast(theme.primary) }];
  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.primary }]}>
      <Text style={styles.title} color={Helpers.inverse(theme.accent)}>
        General
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate(ROUTES.DetailView)}
        style={itemStyles}
      >
        <Icon type={ICON_TYPES.feather} name='bell' color={theme.accent} style={styles.itemIcon} />
        <Text color={theme.accent} size={18}>
          Notifications
        </Text>
        <Flex flex={1} justifyContent='flex-end'>
          <Icon type={ICON_TYPES.feather} name='chevron-right' color={theme.accent} size={20} />
        </Flex>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate(ROUTES.DetailView)}
        style={itemStyles}
      >
        <Icon type={ICON_TYPES.feather} name='edit' color={theme.accent} style={styles.itemIcon} />
        <Text color={theme.accent} size={18}>
          Personal Information
        </Text>
        <Flex flex={1} justifyContent='flex-end'>
          <Icon type={ICON_TYPES.feather} name='chevron-right' color={theme.accent} size={20} />
        </Flex>
      </TouchableOpacity>

      <Text style={styles.title} color={Helpers.inverse(theme.accent)}>
        Security {'&'} Privacy
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate(ROUTES.DetailView)}
        style={itemStyles}
      >
        <Icon type={ICON_TYPES.feather} name='lock' color={theme.accent} style={styles.itemIcon} />
        <Text color={theme.accent} size={18}>
          Account Credentials
        </Text>
        <Flex flex={1} justifyContent='flex-end'>
          <Icon type={ICON_TYPES.feather} name='chevron-right' color={theme.accent} size={20} />
        </Flex>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate(ROUTES.DetailView)}
        style={itemStyles}
      >
        <Icon
          type={ICON_TYPES.feather}
          name='database'
          color={theme.accent}
          style={styles.itemIcon}
        />
        <Text color={theme.accent} size={18}>
          Download Private Data
        </Text>
        <Flex flex={1} justifyContent='flex-end'>
          <Icon type={ICON_TYPES.feather} name='chevron-right' color={theme.accent} size={20} />
        </Flex>
      </TouchableOpacity>
    </ScrollView>
  );
}
