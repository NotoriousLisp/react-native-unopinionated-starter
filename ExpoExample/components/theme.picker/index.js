import React, { useState, Fragment } from 'react';
import { ScrollView, View } from 'react-native';
import { values } from 'lodash';
import THEMES from 'app/constants/themes';
import { useThemeContext } from 'app/state/theme.state';
import { Flex, Button, BTN_CLASSES, Text } from '../primitives';
import styles from './styles.js';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ThemePicker({ startOpen }) {
  const [currentTheme, setTheme] = useThemeContext();
  const [isOpen, setIsOpen] = useState(startOpen);
  if (!isOpen) {
    return (
      <Button
        className={BTN_CLASSES.accent}
        label='Change Theme'
        onPress={() => setIsOpen(true)}
        style={{ alignSelf: 'center' }}
      />
    );
  }
  return (
    <Flex flex={0} column alignItems='stretch'>
      <ScrollView
        horizontal
        style={styles.scrollView}
        contentContainerStyle={{ alignItems: 'center' }}
        showsHorizontalScrollIndicator={false}
      >
        {values(THEMES).map(theme => {
          const isSelected = currentTheme.label === theme.label;
          return (
            <TouchableOpacity onPress={() => setTheme(theme)} activeOpacity={0.7}>
              <Flex
                flex={0}
                column
                style={[
                  styles.themeItem,
                  isSelected ? styles.selected : null,
                  isSelected ? { borderColor: theme.accent } : null
                ]}
                alignItems='center'
                key={theme.label}
              >
                <Flex stye={{ marginBottom: 4 }}>
                  <View style={[styles.swatch, { backgroundColor: theme.primary }]} />
                  <View style={[styles.swatch, { backgroundColor: theme.secondary }]} />
                  <View style={[styles.swatch, { backgroundColor: theme.accent }]} />
                </Flex>
                <Text style={{ fontSize: 10 }}>{theme.label}</Text>
              </Flex>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <Button
        label='Cancel'
        onPress={() => setIsOpen(false)}
        className={BTN_CLASSES.accent}
        style={{ alignSelf: 'center' }}
      />
    </Flex>
  );
}
