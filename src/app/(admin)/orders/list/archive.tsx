import { View, FlatList } from 'react-native';
import { Stack } from 'expo-router';
import OrderListItem from '../../../../components/OrderListItem';
import orders from 'assets/data/orders';

export default function OrdersArchiveScreen() {
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
