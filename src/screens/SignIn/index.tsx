/* eslint-disable import/extensions */
import { useNavigation } from '@react-navigation/native';
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { View, Text, Image } from 'react-native';

import illustrationImg from '../../assets/illustration.png';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/buttonIcon';
import { styles } from './styles';

export function SignIn(): JSX.Element {
  const navigation = useNavigation();
  function handleSignIn() {
    navigation.navigate('Home');
  }
  return (
    <Background>
      <View style={styles.container}>
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

          <ButtonIcon title="Entre com Discord" onPress={handleSignIn} />
        </View>
      </View>
    </Background>
  );
}
