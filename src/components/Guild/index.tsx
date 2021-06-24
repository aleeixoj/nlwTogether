/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */

/* eslint-disable no-use-before-define */
import { Feather } from '@expo/vector-icons';
import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
} from 'react-native';

import { theme } from '../../global/styles/theme';
import { GuildIcon } from '../GuildIcon';
import { styles } from './styles';

export type GuildProps = {
  id: string;
  icon: string | null;
  name: string;
  owner: boolean;
};

type Props = TouchableOpacityProps & {
  data: GuildProps;
};

export function Guild({ data, ...rest }: Props): JSX.Element {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <GuildIcon />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{data.name}</Text>

          <Text style={styles.type}>
            {data.owner ? 'Administrador' : 'Convidado'}
          </Text>
        </View>
      </View>
      <Feather name="chevron-right" color={theme.colors.heading} size={24} />
    </TouchableOpacity>
  );
}
