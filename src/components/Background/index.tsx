import { LinearGradient } from 'expo-linear-gradient';
// eslint-disable-next-line no-use-before-define
import React, { ReactNode } from 'react';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

interface IProps {
  children: ReactNode;
}

export function Background({ children }: IProps): JSX.Element {
  const { secondary80, secondary100 } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  );
}
