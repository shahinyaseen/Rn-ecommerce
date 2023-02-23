import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Orders from '../screens/Orders';
import {useStateValue} from '../contextAPI/GlobelState';
import AppNavigation from './AppNavigation';
import {DrawerContent} from '../components';

const Drawer = createDrawerNavigator();
export default function DrawerNav() {
  const [{theme}, dispatch] = useStateValue();
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: theme.BACKGROUND,
          width: theme.sWidth * 0.9,
        },
      }}>
      <Drawer.Screen name="home" component={AppNavigation} />
    </Drawer.Navigator>
  );
}
