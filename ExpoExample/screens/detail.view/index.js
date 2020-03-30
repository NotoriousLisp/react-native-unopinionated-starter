import React from 'react';
import { Flex, Text } from 'app/components/primitives';
import { useThemeContext } from '../../state/theme.state';

export default function DetailView({ navigation }) {
  const [theme] = useThemeContext();
  return (
    <Flex flex={1} justifyContent='center' alignItems='center'>
      <Text color={theme.accent} size={34}>
        Detail View
      </Text>
    </Flex>
  );
}
