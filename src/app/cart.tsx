import { StatusBar } from 'expo-status-bar';
import { Platform, FlatList, Text } from 'react-native';
import { View } from '@/components/Themed';
import Button from '@/components/Button';
import CartListItem from '@/components/CartListItem';
import { useCart } from '@/providers/CartProvider';

export default function CartScreen() {
  const {items, total} = useCart();

  return (
    <View >
      <FlatList
        data={items}
        renderItem={({item}) => <CartListItem cartItem={item}/>}
        contentContainerStyle={{padding: 10, gap: 10}}
      />
      <Text>Total: ${total}</Text>
      <Button text="Checkout"/>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}