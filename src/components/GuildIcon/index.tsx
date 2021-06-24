// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon(): JSX.Element {
  const uri = 'https://github.com/aleeixoj.png';
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
