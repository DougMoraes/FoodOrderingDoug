import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import products from 'assets/data/products';
import Constants from '@/constants/Constants';

export default function ProductDetailsScreen() {
  const {id} = useLocalSearchParams();
  const product = products.find(p => p.id.toString() === id);

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
      <Text style={styles.price}> ${product.price}</Text>
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
