import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useCart } from '@/providers/CartProvider';

export default function CartScreen() {

  const {items} = useCart();

  return (
    <View >
      <Text>Cart: {items.length}</Text>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}