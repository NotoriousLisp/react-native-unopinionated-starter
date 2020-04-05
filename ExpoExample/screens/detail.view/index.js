import React from 'react';
import { Flex, Text } from 'app/components/primitives';
import { useThemeContext } from '../../state/theme.state';

export default function DetailView({ navigation, route }) {
  const { params } = route;
  if (params) {
    navigation.setOptions(params);
  }
  const [theme] = useThemeContext();
  return (
    <Flex
      style={{ backgroundColor: theme.primary, paddingBottom: 50 }}
      flex={1}
      justifyContent='center'
      alignItems='center'
    >
      <Text color={theme.accent} size={34}>
        Detail View
      </Text>
    </Flex>
  );
}
