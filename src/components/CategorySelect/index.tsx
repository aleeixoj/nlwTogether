/* eslint-disable import/extensions */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { ScrollView } from 'react-native';

import { categories } from '../../utils/categories';
import { Category } from '../Category';
import { styles } from './styles';

interface IProps {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
}

export function CategorySelect({
  categorySelected,
  setCategory,
}: IProps): JSX.Element {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
}
