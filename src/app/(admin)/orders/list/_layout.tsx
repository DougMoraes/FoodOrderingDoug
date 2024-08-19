import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tabs = withLayoutContext(createMaterialTopTabNavigator().Navigator);

export default function OrdersListLayout() {
  return (
    <SafeAreaView edges={['top']} style={{flex: 1, backgroundColor: 'white'}}>
      <Tabs>
        <Tabs.Screen name="index" options={{title: 'Active'}}/>
      </Tabs>
    </SafeAreaView>
  );
};
