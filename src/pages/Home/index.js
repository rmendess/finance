import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto de água',
    value: '300,90',
    date: '07/08/2024',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'Pix Lucas',
    value: '2.500,00',
    date: '02/10/2024',
    type: 1 // receita / entradas
  },
  {
    id: 3,
    label: 'Salário',
    value: '5.000,00',
    date: '05/09/2024',
    type: 1 // receita / entradas
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name='Romulo Mendes' />

      <Balance saldo='9.250,10' gastos='-527,00' />

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}

      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});