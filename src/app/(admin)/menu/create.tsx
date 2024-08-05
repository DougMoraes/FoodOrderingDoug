import Button from '@/components/Button';
import { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default function CreateProductScreen() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const onCreatePress = () => {
    console.warn(`Creating ${name} pizza that costs ${price}`)

    resetFields()
  };

  const resetFields = () => {
    setName('')
    setPrice('')
  }

  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        placeholder='name'
        onChangeText={setName}
      />
      <Text>Price</Text>
      <TextInput
        style={styles.input}
        value={price}
        placeholder='9.99'
        keyboardType='numeric'
        onChangeText={setPrice}
      />
      <Button
        text={'Create'}
        onPress={onCreatePress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 6,
    marginTop: 10,
    marginBottom: 20,
  }
})