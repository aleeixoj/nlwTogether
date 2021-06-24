/* eslint-disable no-unused-expressions */
/* eslint-disable import/extensions */
import { useNavigation } from '@react-navigation/native';
// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import { Appointments } from '../../components/Appointments';
import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';
import { styles } from './styles';

export function Home(): JSX.Element {
  const [category, setCategory] = useState('');
  const navigation = useNavigation();
  function handleAppointmentDetails() {
    navigation.navigate('AppoitmentDetails');
  }
  function handleAppointmentCreate() {
    navigation.navigate('AppoitmentCreate');
  }
  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da MD10',
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da MD10',
    },
  ];

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      <CategorySelect
        hasCheckBox={true}
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <ListHeader title="Partidas agendadas" subTitle="Total 6" />

      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Appointments data={item} onPress={handleAppointmentDetails} />
        )}
        style={styles.matches}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
        contentContainerStyle={{ paddingBottom: 69 }}
      />
    </Background>
  );
}
