import { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Button from '@/components/Button';
import Colors from '@/constants/Colors';
import { Stack } from 'expo-router';

export default function SignIScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const getText = (isSignUp: boolean)=> isSignUp ? 'Create account' : 'Sign in';

  const onCreateAccountPress = () => {
    if (!validateInputs()) {
      return false;
    }

    console.warn(`Creating account with email: ${email} password: ${password}`);
    resetFields();
  };

  const onSignIn = () => {
    if (!validateInputs()) {
      return false;
    }

    console.warn(`Sign In with email: ${email} password: ${password}`);
    resetFields();
  };

  const onSubmit = () => {
    return isSignUp ? onCreateAccountPress(): onSignIn();
  };

  const resetFields = () => {
    setEmail('');
    setPassword('');
    setError('');
  }

  const validateInputs = () => {
    if(email.length === 0) {
      setError('Missing email!')
    } else if (password.length === 0) {
      setError('Missing password!')
    } else {
      return true;
    }

    return false;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `${getText(isSignUp)}` }}/>
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        placeholder='doug@gmail.com'
        onChangeText={setEmail}
      />
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Text style={{color: 'red'}}>{error}</Text>
      <Button
        text={getText(isSignUp)}
        onPress={onSubmit}
      />
      <Text
        style={styles.textButton}
        onPress={() => setIsSignUp(!isSignUp)}
      >
        {getText(!isSignUp)}
      </Text>
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
  textButton: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.light.tint,
    marginVertical: 10,
  },
})