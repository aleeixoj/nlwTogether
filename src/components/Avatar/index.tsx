import { LinearGradient } from 'expo-linear-gradient';
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Image } from 'react-native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

interface IProps {
  urlImage: string;
}

export function Avatar({ urlImage }: IProps): JSX.Element {
  const { secondary50, secondary70 } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <Image source={{ uri: urlImage }} style={styles.avatar} />
    </LinearGradient>
  );
}
