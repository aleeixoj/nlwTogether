// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Text, View, Image } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

interface IProps extends RectButtonProps {
  title: string;
}

export function Button({ title, ...rest }: IProps): JSX.Element {
  return (
    <RectButton style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}
