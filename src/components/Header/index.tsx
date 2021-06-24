/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
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

export function Header({ title, action }: Props): JSX.Element {
  const { secondary100, secondary40, heading } = theme.colors;
  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary100, secondary40]}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color={heading} />
      </BorderlessButton>
      <Text style={styles.title}> {title}</Text>
      {action ? <View>{action}</View> : <View style={{ width: 24 }} />}
    </LinearGradient>
  );
}
