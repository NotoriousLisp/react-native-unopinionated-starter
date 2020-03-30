import React, { useEffect } from 'react';
import { Flex, Button, Text } from 'app/components/primitives';
import ThemePicker from 'app/components/theme.picker';
import { useThemeContext } from '../../state/theme.state';
import { useGlobalContext } from '../../state/global.state';

export default function TabOne({ navigation }) {
  const [theme] = useThemeContext();
  const [state, actions] = useGlobalContext();
  useEffect(() => {
    navigation.setOptions({
      title: `Tab One`
    });
  }, []);

  return (
    <Flex flex={1} column alignItems='center' justifyContent='center'>
      <Text color={theme.accent} size={34}>
        Tab One
      </Text>
      <Flex
        flex={0}
        column
        justifyContent='flex-end'
        alignItems='stretch'
        alignSelf='stretch'
        style={{ paddingVertical: 30 }}
      >
        <ThemePicker />
        <Button
          style={{ alignSelf: 'center', marginTop: 10 }}
          label='Logout'
          onPress={() => actions.signout(navigation)}
        />
      </Flex>
    </Flex>
  );
}
