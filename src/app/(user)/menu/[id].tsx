import products from 'assets/data/products';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Button from '@/components/Button';
import SizeSelector from '@/components/SizeSelector';
import Constants from '@/constants/Constants';
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
      <SizeSelector onPressSelect={size => setSelectedSize(size)} selectedSize={selectedSize}/>
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
