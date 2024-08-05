import Button from '@/components/Button';
import { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default function CreateProductScreen() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');


  const onCreatePress = () => {
    if (!validateInputs()) {
      return false;
    }

    console.warn(`Creating ${name} pizza that costs ${price}`);
    resetFields();
  };

  const resetFields = () => {
    setName('');
    setPrice('');
    setError('');
  }

  const validateInputs = () => {
    if(name.length === 0) {
      setError('Missing name!')
    } else if (price.length === 0) {
      setError('Missing price!')
    } else if (isNaN(parseFloat(price))) {
      setError('Price is not a number!')
    } else {
      return true;
    }

    return false;
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
      <Text style={{color: 'red'}}>{error}</Text>
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