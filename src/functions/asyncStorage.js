import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
//get theme data from async
export const getThemeAsyncStorage = async () => {
  let theme = await AsyncStorage.getItem('themeName');
  return theme;
};
// set theme data to async
export const setThemeAsyncStorage = async data => {
  await AsyncStorage.setItem('themeName', JSON.stringify(data));
  return true;
};

//check user is login
export const IsUserLogin = async () => {
  const userAccessToken = async () => {
    return await AsyncStorage.getItem('userToken');
  };
  const userAccess = userAccessToken().then(token => {
    return token ? JSON.parse(token) : null;
  });
  return userAccess;
};

export const setUserAsyncStorage = async data => {
  await AsyncStorage.setItem('userToken', JSON.stringify(data));
  return true;
}


export const currentPermission = async () => {
  const croute = async () => {
    return await AsyncStorage.getItem('permissions');
  };
  const currenRoute = croute().then(res => {
    return res ? JSON.parse(res) : [];
  });
  return currenRoute;
};