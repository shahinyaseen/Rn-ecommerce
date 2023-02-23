import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {GlobelState} from './src/contextAPI/GlobelState';
import ThemeWrapper from './src/ThemeWrapper';
import {reducer, initialState} from './src/contextAPI/Reducer';
import {NavigationContainer} from '@react-navigation/native';
import Cart from './src/screens/Cart/index';
import Widget from './src/screens/Widget';
import AppNavigation from './src/Navigation/AppNavigation';
import DrawerNav from './src/Navigation/DrawerNav';
import Orders from './src/screens/Orders';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  const {height, width} = useWindowDimensions();
  const newInitialState = {
    ...initialState,
    theme: {...initialState.theme, sWidth: width, sHeight: height},
  };
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <GlobelState initialState={newInitialState} reducer={reducer}>
      <ThemeWrapper>
        {/* <View style={{flex: 1, backgroundColor: 'white'}} > */}
        <StatusBar barStyle={'dark-content'} />
        <SafeAreaProvider>
          <NavigationContainer>
            <DrawerNav />
          </NavigationContainer>
        </SafeAreaProvider>

        {/* <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text>test</Text>
            <Widget />
          </View>
        </ScrollView> */}
        {/* </View> */}
      </ThemeWrapper>
    </GlobelState>
  );
};

export default App;
