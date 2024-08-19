import { Pressable, StyleSheet, Text, View } from 'react-native'

import { PizzaSize } from '@/types';

type SizeSelectorProps = {
  onPressSelect: (size: PizzaSize) => void,
  selectedSize: string
};

export default function SizeSelector({onPressSelect, selectedSize}: SizeSelectorProps) {
  const sizes : PizzaSize[] = ['S', 'M', 'L', 'XL'];

  return (
    <View>
      <Text>Select size</Text>
      <View style={styles.sizes}>
      {
        sizes.map(size => (
          <Pressable
            onPress={() => onPressSelect(size)}
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
