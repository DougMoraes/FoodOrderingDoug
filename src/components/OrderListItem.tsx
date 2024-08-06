import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Order } from '../types';
import { Link, useSegments } from 'expo-router';
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";

const OrderListItem = ({ order } : { order: Order }) => {
  const segments = useSegments()

  dayjs.extend(relativeTime)

	return (
    <Link href={`/${segments[0]}/orders/${order.id}`} asChild>
      <Pressable style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{`Order #${order.id}`}</Text>
          <Text style={styles.time}>{dayjs(order.created_at).fromNow()}</Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.status}>{order.status}</Text>
        </View>
      </Pressable>
    </Link>
  )
}

export default OrderListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    flexDirection: 'row',
  },
  innerContainer: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  time: {
    color: 'gray',
  },
  status: {
    alignSelf: 'flex-end',
    fontWeight: '500',
  },

});