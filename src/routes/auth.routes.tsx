/* eslint-disable import/extensions */
import { createStackNavigator } from '@react-navigation/stack';
// eslint-disable-next-line no-use-before-define
import React from 'react';

import { theme } from '../global/styles/theme';
import { AppoitmentCreate } from '../screens/AppoitmentCreate';
import { AppoitmentDetails } from '../screens/AppoitmentDetails';
import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100,
        },
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
      <Screen name="AppoitmentDetails" component={AppoitmentDetails} />
      <Screen name="AppoitmentCreate" component={AppoitmentCreate} />
    </Navigator>
  );
}
