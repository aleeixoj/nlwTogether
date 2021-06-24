/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */

import { Fontisto } from '@expo/vector-icons';
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { View, Text, ImageBackground, FlatList } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import BannerImg from '../../assets/banner.png';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/buttonIcon';
import { Header } from '../../components/Header';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Member } from '../../components/Member';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function AppoitmentDetails(): JSX.Element {
  const members = [
    {
      id: '1',
      username: 'Aleixo',
      avatar_url: 'https://github.com/aleeixoj.png',
      status: 'online',
    },
    {
      id: '2',
      username: 'Kmiecik',
      avatar_url: 'https://github.com/aleeixoj.png',
      status: 'Offline',
    },
    {
      id: '3',
      username: 'Junior',
      avatar_url: 'https://github.com/aleeixoj.png',
      status: 'online',
    },
  ];
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />
      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subTitle}>É hoje</Text>
        </View>
      </ImageBackground>
      <ListHeader title="Jogadores" subTitle="Total 3" />
      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />
      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}
