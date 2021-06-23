import { LinearGradient } from 'expo-linear-gradient';
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

interface IProps extends RectButtonProps {
  title: string;
  icon: React.FC<SvgProps>;
  hasCheckBox?: boolean;
  checked?: boolean;
}

export function Category({
  title,
  icon: Icon,
  checked = false,
  hasCheckBox = false,
  ...rest
}: IProps): JSX.Element {
  const { secondary40, secondary50, secondary70, secondary85 } = theme.colors;
  return (
    <RectButton style={styles.container} {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <LinearGradient
          colors={[checked ? secondary85 : secondary50, secondary40]}
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
        >
          {hasCheckBox && (
            <View style={checked ? styles.checked : styles.check} />
          )}

          <Icon width={48} height={48} />
          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  );
}
