// eslint-disable-next-line no-use-before-define
import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import discordImg from '../../assets/discord.png';
import { styles } from './styles';

interface IProps extends TouchableOpacityProps {
  title: string;
}

export function ButtonIcon({ title, ...rest }: IProps): JSX.Element {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image style={styles.icon} source={discordImg} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
