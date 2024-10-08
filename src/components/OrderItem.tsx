import { Image, StyleSheet, Text, View } from 'react-native';

import Colors from '@/constants/Colors';
import Constants from '@/constants/Constants';

import { OrderItemType } from '../types';

const OrderItem = ({ item } : { item: OrderItemType }) => {
	return (
    <View style={styles.container}>
      <View style={styles.imageInnerContainer}>
        <Image source={{uri: item.product.image || Constants.defaultPizzaImage}} style={styles.image}/>
      </View>
      <View style={{flexDirection: 'column'}}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{item.product.name}</Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.price}>{`$${item.product.price}`}</Text>
          <Text style={styles.title}>{`Size: ${item.size}`}</Text>
        </View>
      </View>
      <View style={{...styles.innerContainer, justifyContent: 'flex-end'}}>
        <Text style={styles.quantity}>{`Qtd: ${item.quantity}`}</Text>
      </View>
    </View>
  )
}

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 20,
    flex: 1,
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 1
  },
  innerContainer: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
  },
  imageInnerContainer: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    marginRight: 10,
    maxWidth: 80
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.light.tint,
    marginRight: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  quantity: {
    fontWeight: '500',
  },
});
