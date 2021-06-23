/* eslint-disable import/extensions */

import { LinearGradient } from 'expo-linear-gradient';
// eslint-disable-next-line no-use-before-define
import React, { ReactNode } from 'react';
import { View, Text, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type Props = {
  title: string;
  action?: ReactNode;
};

export function AppoitmentDetails({ title, action }: Props): JSX.Element {
  const { secondary100, secondary40 } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary100, secondary40]}
    ></LinearGradient>
  );
}
