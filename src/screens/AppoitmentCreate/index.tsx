/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */

import { Feather } from '@expo/vector-icons';
// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Background } from '../../components/Background';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildIcon } from '../../components/GuildIcon';
import { Header } from '../../components/Header';
import { SmallInput } from '../../components/SmallInput';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function AppoitmentCreate(): JSX.Element {
  const [category, setCategory] = useState('');
  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }
  return (
    <Background>
      <Header title="Agendar partida" />
      <Text
        style={[
          styles.label,
          { marginLeft: 24, marginTop: 36, marginBottom: 18 },
        ]}
      >
        Categorias
      </Text>
      <CategorySelect
        hasCheckBox
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
      <View style={styles.form}>
        <RectButton>
          <View style={styles.select}>
            {
              // <View style={styles.image} />
              <GuildIcon />
            }
            <View style={styles.selectBody}>
              <Text style={styles.label}>Selecione um servidor</Text>
            </View>
            <Feather
              name="chevron-right"
              color={theme.colors.heading}
              size={28}
            />
          </View>
        </RectButton>

        <SmallInput />
      </View>
    </Background>
  );
}
