import React from 'react';
import { Flex, Text } from 'app/components/primitives';
import { useThemeContext } from 'app/state/theme.state';

export default function Drawer(props) {
  const [theme] = useThemeContext();
  return (
    <Flex
      flex={1}
      column
      alignItems='center'
      justifyContent='center'
      style={{ backgroundColor: theme.secondary }}
    >
      <Text color={theme.accent} size={34}>
        DRAWER
      </Text>
    </Flex>
  );
}
