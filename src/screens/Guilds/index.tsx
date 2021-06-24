/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */

/* eslint-disable no-use-before-define */
import React from 'react';
import { View, FlatList } from 'react-native';

import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { styles } from './styles';

type Props = {
  handleGuildSelected: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelected }: Props): JSX.Element {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true,
    },
    {
      id: '2',
      name: 'Lendários',
      icon: 'image.png',
      owner: true,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelected(item)} />
        )}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
        ItemSeparatorComponent={() => <ListDivider />}
      />
    </View>
  );
}
