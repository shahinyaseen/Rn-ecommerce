import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const BottomTab = createBottomTabNavigator();
import Home from '../screens/Home';
import Search from '../screens/Search';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';
import styled from 'styled-components/native';
import {Icon} from '../components';
import {useStateValue} from '../contextAPI/GlobelState';
export default function AppBottomTabNav() {
  const [{theme}] = useStateValue();
  return (
    <BottomTab.Navigator
      initialRouteName="app-home"
      screenOptions={{
        headerShown: false,
        showLabel: false,
        tabBarStyle: {
          // bottom:20,
          position: 'absolute',
          height: theme.sHeight * 0.07644,
          width: '100%',
          elevation: 0,
          backgroundColor: theme.BACKGROUND,
          borderTopWidth: 0,
          paddingHorizontal: 15,
          paddingBottom: 0,
          paddingTop: 0,
          marginBottom: 0,
          shadowOpacity: 0.1,
          shadowRadius: 4,
          shadowColor: 'black',
          shadowOffset: {width: 0, height: 0},
          elevation: 20,
        },
      }}>
      <BottomTab.Screen
        name="app-home"
        component={Home}
        options={{
          tabBarIcon: ({color, focused, size}) =>
            focused ? (
              <StyledIcon name="home" size={22} />
            ) : (
              <StyledIcon name="home" size={22} focused />
            ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <BottomTab.Screen
        name="search"
        component={Search}
        options={{
          tabBarIcon: ({color, focused, size}) =>
            focused ? (
              <StyledIcon name="search" size={22} />
            ) : (
              <StyledIcon name="search" size={22} focused />
            ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <BottomTab.Screen
        name="cart"
        component={Cart}
        options={{
          tabBarStyle: {
            display: 'none',
          },
          tabBarIcon: ({color, focused, size}) =>
            focused ? (
              <StyledIcon name="cart" size={22} />
            ) : (
              <StyledIcon name="cart" size={22} focused />
            ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <BottomTab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, focused, size}) =>
            focused ? (
              <StyledIcon name="profile" size={22} />
            ) : (
              <StyledIcon name="profile" size={22} focused />
            ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <BottomTab.Screen
        name="nprofile"
        component={Profile}
        options={{
          tabBarIcon: ({color, focused, size}) =>
            focused ? (
              <StyledIcon name="menu" size={22} />
            ) : (
              <StyledIcon name="menu" size={22} focused />
            ),
          tabBarLabel: () => {
            return null;
          },
        }}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.openDrawer();
          },
        })}
      />
    </BottomTab.Navigator>
  );
}
const StyledIcon = styled(Icon)`
  color: ${p => p.theme.PRIMARY};
  opacity: ${p => (p.focused ? 0.5 : 1)};
`;
