import { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import products from 'assets/data/products';
import Constants from '@/constants/Constants';
import SizeSelector from '@/components/SizeSelector';
import Button from '@/components/Button';
import { useCart } from '@/providers/CartProvider';
import { PizzaSize } from '@/types';

export default function ProductDetailsScreen() {
  const [selectedSize, setSelectedSize] = useState<PizzaSize>('M');
  const {id} = useLocalSearchParams();
  const product = products.find(p => p.id.toString() === id);
  const { addItem } = useCart();

  const addToCart = () => {
    if (!product) return;
    addItem(product, selectedSize)
  };

  if(!product) {
    return (
      <View>
        <Stack.Screen options={{ title: 'Item Not Found'}}/>
        <Text>Product not found!</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name}}/>
      <Image
        source={{ uri: product.image || Constants.defaultPizzaImage}}
        style={styles.image}
      />
      <SizeSelector />
      <Text style={styles.price}> ${product.price}</Text>
      <Button onPress={addToCart} text="Add to cart" />
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
