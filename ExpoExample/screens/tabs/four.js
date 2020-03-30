import React, { useEffect } from 'react';
import { Flex, Text } from 'app/components/primitives';
import { useThemeContext } from '../../state/theme.state';

export default function TabFour({ navigation }) {
  const [theme] = useThemeContext();
  useEffect(() => {
    navigation.setOptions({
      title: `Tab Four`
    });
  }, []);

  return (
    <Flex flex={1} column alignItems='center' justifyContent='center'>
      <Text color={theme.accent} size={34}>
        Tab Four
      </Text>
    </Flex>
  );
}
