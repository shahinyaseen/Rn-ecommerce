import React, {useState, useEffect} from 'react';
import {
  Appearance,
  useWindowDimensions,
  Dimensions,
  Platform,
  StatusBar,
} from 'react-native';
import {darkTheme, lightTheme} from './styles/theme';
import styled, {ThemeProvider} from 'styled-components/native';
import {
  getThemeAsyncStorage,
  setThemeAsyncStorage,
} from './functions/asyncStorage';
import {useStateValue} from './contextAPI/GlobelState';
export default function ThemeWrapper({children}) {
  const [orientation, setOrientation] = useState('PORTRAIT');
  const [swidth, setSWidth] = useState();
  const [statusBarHeight, setStatusBarHeight] = useState();
  const [{theme}, dispatch] = useStateValue();
  const {height, width} = useWindowDimensions();
  useEffect(() => {
    getData();
    // setStatusBarHeight(Platform.OS === 'ios' ?StatusBar.currentHeight:0);
  }, []);
  useEffect(() => {
    // setStatusBarHeight(Platform.OS === 'ios' ?StatusBar.currentHeight:0)
    Dimensions.addEventListener('change', ({window: {width, height}}) => {
      if (width < height) {
        setOrientation('PORTRAIT');
      } else {
        setOrientation('LANDSCAPE');
        if (StatusBar.currentHeight !== 0 && StatusBar.currentHeight !== null&&Platform.OS==='ios') {
          setSWidth(width - StatusBar.currentHeight);
        }
        //StatusBar.currentHeight
      }
    });
    getData();
  }, [width]);
  // console.log("sh",Platform.OS === 'ios'?StatusBar.currentHeight:0);
  // console.log("height, width",height, width,{...lightTheme, sWidth:width, sHeight:height});
  /* width: ${p => p.theme.width*p.width}px; */
  const getData = async () => {
    const colorScheme = Appearance.getColorScheme();

    await getThemeAsyncStorage()
      .then(themeName => {
        let data = JSON.parse(themeName);

        if (themeName == null) {
          if (colorScheme === 'dark') {
            setThemeAsyncStorage(darkTheme);
            dispatch({type: 'setTheme', theme: {...darkTheme,sWidth:width, sHeight:height}});
          } else {
            setThemeAsyncStorage(lightTheme);
            dispatch({type: 'setTheme', theme: {...lightTheme,sWidth:width, sHeight:height}});
          }
        } else {
          if (data.mode === 'light') {
            setThemeAsyncStorage(lightTheme);
            dispatch({type: 'SWITCH_THEME', themeName: {...lightTheme,sWidth:width, sHeight:height}});
          } else {
            setThemeAsyncStorage(darkTheme);
            dispatch({type: 'SWITCH_THEME', themeName: {...darkTheme,sWidth:width, sHeight:height}});
          }
        }
      })
      .catch(err => {
        console.warn(err);
      });
  };
  // let screenD = {width: orientation=="LANDSCAPE"?swidth:width, height: height};
  let screenD = {width:width, height: height};
  return (
    <ThemeProvider theme={{...theme, ...screenD}}>{children}</ThemeProvider>
  );
}
