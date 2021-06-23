/* eslint-disable import/extensions */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import CalendarSvg from '../../assets/calendar.svg';
import PlayerSvg from '../../assets/player.svg';
import { theme } from '../../global/styles/theme';
import { categories } from '../../utils/categories';
import { GuildIcon } from '../GuildIcon';
import { styles } from './styles';

export interface IGuildProps {
  id: string;
  name: string;
  icon: null;
  owner: boolean;
}

export interface IAppointmentsProps {
  id: string;
  guild: IGuildProps;
  category: string;
  date: string;
  description: string;
}

interface IProps extends RectButtonProps {
  data: IAppointmentsProps;
}

export function Appointments({ data, ...rest }: IProps): JSX.Element {
  const [category] = categories.filter((item) => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on } = theme.colors;
  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon />
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>
            <Text style={styles.category}>{category.title}</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />
              <Text style={styles.date}>{data.date}</Text>
            </View>

            <View style={styles.playersInfo}>
              <PlayerSvg fill={owner ? primary : on} />
              <Text style={[styles.player, { color: owner ? primary : on }]}>
                {' '}
                {owner ? 'Anfitrião' : 'Visitante'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
}
