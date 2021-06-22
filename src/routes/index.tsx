import { NavigationContainer } from '@react-navigation/native';

// eslint-disable-next-line no-use-before-define
import React from 'react';

// eslint-disable-next-line import/extensions
import { AuthRoutes } from './auth.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}
