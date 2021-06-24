/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */

import { Feather } from '@expo/vector-icons';
// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildProps } from '../../components/Guild';
import { GuildIcon } from '../../components/GuildIcon';
import { Header } from '../../components/Header';
import { ModalView } from '../../components/ModalView';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { theme } from '../../global/styles/theme';
import { Guilds } from '../Guilds';
import { styles } from './styles';

export function AppoitmentCreate(): JSX.Element {
  const [category, setCategory] = useState('');
  const [modal, setModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);
  function handleOpenModal() {
    setModal(true);
  }
  function handleGuildSelect(guildSelect: GuildProps) {
    setGuild(guildSelect);
    setModal(false);
  }
  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
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
            <RectButton onPress={handleOpenModal}>
              <View style={styles.select}>
                {guild.icon ? <GuildIcon /> : <View style={styles.image} />}
                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild.name ? guild.name : 'Selecione um servidor'}
                  </Text>
                </View>
                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={28}
                />
              </View>
            </RectButton>
            <View style={styles.field}>
              <View>
                <Text style={styles.label}>Dia e Mês</Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={styles.label}>Hora e Minuto</Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>

            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
            </View>
            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />
            <View style={styles.footer}>
              <Button title="Agendar" />
            </View>
          </View>
        </Background>
      </ScrollView>
      <ModalView visible={modal}>
        <Guilds handleGuildSelected={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
