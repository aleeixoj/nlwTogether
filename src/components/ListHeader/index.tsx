// eslint-disable-next-line no-use-before-define
import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

interface IProps {
  title: string;
  subTitle: string;
}

export function ListHeader({ title, subTitle }: IProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subTitle}</Text>
    </View>
  );
}
