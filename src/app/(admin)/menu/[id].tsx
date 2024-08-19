import FontAwesome from '@expo/vector-icons/FontAwesome';
import products from 'assets/data/products';
import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import Colors from '@/constants/Colors';
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
      <Stack.Screen
        options={{
        title: 'Menu',
        headerRight: () => (
          <Link href={`/(admin)/menu/create?id=${id}`} asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="pencil"
                  size={25}
                  color={Colors.light.tint}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        ),
        }}
      />
      <Image
        source={{ uri: product.image || Constants.defaultPizzaImage}}
        style={styles.image}
      />
      <Text style={styles.price}> ${product.name}</Text>
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
