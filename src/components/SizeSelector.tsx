import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useState } from 'react';

export default function SizeSelector() {
  const sizes = ['S', 'M', 'L', 'XL'];
  const [selectedSize, setSelectedSize] = useState('M');

  return (
    <View>
      <Text>Select size</Text>
      <View style={styles.sizes}>
      {
        sizes.map(size => (
          <Pressable
            onPress={() => setSelectedSize(size)}
            style={[
              styles.size,
              {
                backgroundColor: selectedSize === size ? 'gainsboro' : 'white',
              }
            ]}
            key={size}
          >
            <Text
              style={[
                styles.sizeText,
                {
                  color: selectedSize === size ? 'black' : 'gray',
                }
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))
      }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  size: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sizeText: {
    fontSize: 20,
    fontWeight: '500',
  }
});