import { Pressable, StyleSheet, Text, View } from 'react-native'

import Colors from '@/constants/Colors';
import { OrderStatus } from '@/types';

type StatusSelectorProps = {
  onPressSelect: (status: OrderStatus) => void,
  selectedStatus: string
};

export default function StatusSelector({onPressSelect, selectedStatus}: StatusSelectorProps) {
  const statuses : OrderStatus[] = ['New', 'Cooking', 'Delivering', 'Delivered'];

  return (
    <View>
      <Text>Status</Text>
      <View style={styles.statuses}>
      {
        statuses.map(status => (
          <Pressable
            onPress={() => onPressSelect(status)}
            style={[
              styles.status,
              {
                backgroundColor:
                selectedStatus === status
                    ? Colors.light.tint
                    : 'transparent',
              },
            ]}
            key={status}
          >
            <Text
              style={[
                {
                  color: selectedStatus === status ? 'black' : 'gray',
                }
              ]}
            >
              {status}
            </Text>
          </Pressable>
        ))
      }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  statuses: {
    flexDirection: 'row',
    gap: 5,
  },
  status: {
    borderColor: Colors.light.tint,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
});
