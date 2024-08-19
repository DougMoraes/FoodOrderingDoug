import { forwardRef } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/Colors';

type ButtonProps = {
  text: string;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

const ButtonBase = (
  ({ text, ...pressableProps }: ButtonProps, ref: React.ForwardedRef<View | null>) => {
    return (
      <Pressable ref={ref} {...pressableProps} style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    );
  }
);

const Button = forwardRef(ButtonBase);

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.tint,
    padding: 15,
    alignItems: 'center',
    borderRadius: 100,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});
