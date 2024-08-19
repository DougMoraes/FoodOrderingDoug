import orders from 'assets/data/orders';
import { Stack } from 'expo-router';
import { FlatList, View } from 'react-native';

import OrderListItem from '../../../../components/OrderListItem';

export default function OrdersScreen() {
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }}/>
      <FlatList
        data={orders}
        renderItem={({item}) => <OrderListItem order={item}/>}
        contentContainerStyle={{gap: 10, padding: 10}}
      />
    </View>
  );
}
