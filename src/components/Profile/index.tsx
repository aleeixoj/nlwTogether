// eslint-disable-next-line no-use-before-define
import React from 'react';
import { View, Text } from 'react-native';

// eslint-disable-next-line import/extensions
import { Avatar } from '../Avatar';
import { styles } from './styles';

export function Profile(): JSX.Element {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/aleeixoj.png" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>Aleixo</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
