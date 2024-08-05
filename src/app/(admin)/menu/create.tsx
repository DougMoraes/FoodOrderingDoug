import { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import Button from '@/components/Button';
import Colors from '@/constants/Colors';
import Constants from '@/constants/Constants';
import { Stack } from 'expo-router';

export default function CreateProductScreen() {
  const [image, setImage] = useState('');
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

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Create Product' }}/>
      <Image
        source={{ uri: image || Constants.defaultPizzaImage}}
        style={styles.image}
      />
      <Text
        style={styles.textButton}
        onPress={pickImage}
      >
        Select an image
      </Text>
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
        text='Create'
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
  },
  image: {
    width: '50%',
    aspectRatio: 1,
    alignSelf: 'center'
  },
  textButton: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.light.tint,
    marginVertical: 10,
  },
})