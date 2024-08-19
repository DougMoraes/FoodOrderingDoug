import { Link, useSegments } from 'expo-router';
import { Image, Pressable, StyleSheet, Text } from 'react-native';

import Colors from '@/constants/Colors';
import Constants from '@/constants/Constants';

import { Product } from '../types';

const ProductListItem = ({ product } : { product: Product }) => {
  const segments = useSegments()

	return (
    <Link href={`/${segments[0]}/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
        source={{ uri: product.image || Constants.defaultPizzaImage}}
        style={styles.image}
        resizeMode='contain'
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>{product.price.toFixed(2)}</Text>
      </Pressable>
    </Link>
  )
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: '50%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image:{
    width: '100%',
    aspectRatio: 1,
    alignSelf: 'center'
  },
  price: {
    color: Colors.light.tint
  }
});
