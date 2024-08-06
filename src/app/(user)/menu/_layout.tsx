import Colors from '@/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';
import { Pressable, View } from 'react-native';

export default function MenuLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{
      title: 'Menu',
      headerRight: () => (
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Link href="/cart" asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="shopping-cart"
                  size={25}
                  color={Colors.light.tint}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
          <Link href="/orders" asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="book"
                  size={25}
                  color={Colors.light.tint}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        </View>
      ),
      }}/>
  </Stack>;
};