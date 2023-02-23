import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useStateValue} from '../contextAPI/GlobelState';
import AppBottomTabNav from './AppBottomTabNav';
import Widget from '../screens/Widget';
import ProductSingle from '../screens/Product/ProductSingle';
import Product from '../screens/Product';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';
import Compare from '../screens/Compare';
import Orders from '../screens/Orders';
import Address from '../screens/Profile/Address';
import NewAddress from '../screens/Profile/NewAddress';
import Wishlist from '../screens/Wishlist';
import Login from '../screens/Auth/Login';
import Notification from '../screens/Notification';
import TrackOrder from '../screens/Orders/TrackOrder';
import RateProduct from '../screens/Orders/RateProduct';
import Category from '../screens/Product/Category';
import Sellers from '../screens/Sellers/Sellers';
import SearchProduct from '../screens/Product/SearchProduct';
import Contact from '../screens/Contact/Contact';
import Service from '../screens/Service';
import Store from '../screens/Store';
import SubCategory from '../screens/Product/SubCategory';

const MainStack = createNativeStackNavigator();
const AppNav = () => {
  const horizontalAnimation = {
    gestureDirection: 'horizontal',
    presentation: 'transparentModal',
    headerMode: 'none',
    contentStyle: {backgroundColor: '#40404040'},
    cardStyleInterpolator: ({current, layouts}) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [1, 0],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
  };
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="home">
      <MainStack.Screen name="home" component={AppBottomTabNav} />
      {/* <MainStack.Screen name="home" component={Home} /> */}
      {/* <MainStack.Screen name="search" component={Search} /> */}
      <MainStack.Screen name="cart" component={Cart} />
      {/* <MainStack.Screen name="profile" component={Profile} />  */}
      <MainStack.Screen name="address" component={Address} />
      <MainStack.Screen name="newaddress" component={NewAddress} />
      <MainStack.Screen name="widget" component={Widget} />
      <MainStack.Screen name="product-single" component={ProductSingle} />
      <MainStack.Screen name="product" component={Product} />
      <MainStack.Screen name="search-product" component={SearchProduct} />
      <MainStack.Screen name="compare" component={Compare} />
      <MainStack.Screen name="orders" component={Orders} />
      <MainStack.Screen name="trackorder" component={TrackOrder} />
      <MainStack.Screen name="rateproduct" component={RateProduct} />
      <MainStack.Screen name="category" component={Category} />
      <MainStack.Screen name="seller" component={Sellers} />
      <MainStack.Screen name="contact" component={Contact} />
      <MainStack.Screen name="service" component={Service} />
      <MainStack.Screen name="store" component={Store} />
      <MainStack.Screen name="sub-category" component={SubCategory} />

      <MainStack.Group
        screenOptions={{
          presentation: 'transparentModal',
          headerMode: 'none',
          contentStyle: {backgroundColor: '#40404040'},
        }}>
        <MainStack.Screen name="login" component={Login} />
      </MainStack.Group>
      <MainStack.Group screenOptions={horizontalAnimation}>
        <MainStack.Screen name="wishlist" component={Wishlist} />
        <MainStack.Screen name="notification" component={Notification} />
      </MainStack.Group>
    </MainStack.Navigator>
  );
};
export default function AppNavigation() {
  const [{theme}] = useStateValue();
  return (
    <View style={{flex: 1, backgroundColor: theme.BACKGROUND}}>
      <AppNav />
    </View>
  );
}
