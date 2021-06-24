/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */

/* eslint-disable no-use-before-define */

import React, { ReactNode } from 'react';
import {
  View,
  Text,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
} from 'react-native';

import { theme } from '../../global/styles/theme';
import { Background } from '../Background';
import { styles } from './styles';

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
};

export function ModalView({
  children,
  closeModal,
  ...rest
}: Props): JSX.Element {
  return (
    <Modal transparent animationType="slide" {...rest} statusBarTranslucent>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar} />
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
