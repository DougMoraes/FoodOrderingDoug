import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import orders from 'assets/data/orders';
import OrderItem from '@/components/OrderItem';
import OrderListItem from '@/components/OrderListItem';
import StatusSelector from '@/components/StatusSelector';
import { useState } from 'react';


export default function ProductDetailsScreen() {
  const {id} = useLocalSearchParams();
  const order = orders.find(o => o.id.toString() === id);
  const [selectedStatus, setSelectedStatus] = useState('New');

  if(!order) {
    return (
      <View>
        <Stack.Screen options={{ title: 'Order Not Found'}}/>
        <Text>Order not found!</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `Order #${order.id}`}}/>
      <FlatList
        data={order.order_items}
        renderItem={({item}) => <OrderItem item={item}/>}
        contentContainerStyle={{gap: 10, padding: 10}}
        ListHeaderComponent={<OrderListItem order={order}/>}
        ListFooterComponent={<StatusSelector selectedStatus={selectedStatus} onPressSelect={(s) => {setSelectedStatus(s)}}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
