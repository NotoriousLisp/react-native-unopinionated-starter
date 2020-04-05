import React, { useEffect } from 'react';
import { Flex, Text, Button } from 'app/components/primitives';
import ThemePicker from 'app/components/theme.picker';
import ROUTES from 'app/constants/routes';
import { useThemeContext } from 'app/state/theme.state';

export default function TabOne({ navigation }) {
  const [theme] = useThemeContext();
  useEffect(() => {
    navigation.setOptions({
      title: `Tab One`,
    });
  }, []);

  return (
    <Flex flex={1} column alignItems='center' justifyContent='center'>
      <Flex flex={1} column justifyContent='center' alignItems='center'>
        <Button
          label='Show Detail View'
          onPress={() => navigation.push(ROUTES.DetailView, { headerBackTitle: 'Home' })}
        />
      </Flex>
      <Flex
        flex={0}
        column
        justifyContent='flex-end'
        alignItems='stretch'
        alignSelf='stretch'
        style={{ paddingVertical: 30 }}
      >
        <ThemePicker />
      </Flex>
    </Flex>
  );
}
