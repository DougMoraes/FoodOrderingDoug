import { StyleSheet, Text, View, Image } from 'react-native';
import { Product } from '../types';
import Colors from '../constants/Colors';
import Constants from '../constants/Constants';

const ProductListItem = ({ product } : { product: Product }) => {

	return (
    <View style={styles.container}>
      <Image
       source={{ uri: product.image || Constants.defaultPizzaImage}}
       style={styles.image}
       resizeMode="contain"
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price.toFixed(2)}</Text>
    </View>
  )
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    overflow: 'hidden',
    padding: 10,
    borderRadius: 20,
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