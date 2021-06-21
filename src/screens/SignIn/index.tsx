// eslint-disable-next-line no-use-before-define
import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';

import illustrationImg from '../../assets/illustration.png';
// eslint-disable-next-line import/extensions
import { ButtonIcon } from '../../components/buttonIcon';
import { styles } from './styles';

export function SignIn(): JSX.Element {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image
        source={illustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {`\n`}e organize {`\n`}
          suas jogatinas
        </Text>
        <Text style={styles.subTitle}>
          Crie grupos para jogar seus games {`\n`}favoritos com seus amigos
        </Text>

        <ButtonIcon title="Entre com Discord" activeOpacity={0.8} />
      </View>
    </View>
  );
}
