import React from 'react';
import ROUTES from '../../constants/routes';
import { Flex } from '../primitives';

export default function LandingScreen({ navigation }) {
  setTimeout(() => navigation.navigate(ROUTES.Home), 3000);
  return <Flex flex={1} style={{ backgroundColor: 'red' }}></Flex>;
}
