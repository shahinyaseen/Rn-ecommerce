import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {useStateValue} from '../../contextAPI/GlobelState';
import styled from 'styled-components/native';
import Widget from '../Widget';
import Cart from '../Cart/index';
import {Button, ButtonIcon, Icon, SearchBar} from '../../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BookData from './Data.json';

export default function Search({navigation}) {
  const [{theme}, dispatch] = useStateValue();
  const insets = useSafeAreaInsets();
  return (
    <Wrapper
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag">
        <SearchBar placeholder="Search" data={BookData} />
      </ScrollView>
      <CatagoriesWrapper>
        <AllCategoriesBtn onPress={() => navigation.navigate('category')}>
          <CategorBtnText>All Categories</CategorBtnText>
          <StyledIcon name="longarrow-right" size={18} />
        </AllCategoriesBtn>
      </CatagoriesWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.View`
  flex-grow: 1;
  background-color: ${p => p.theme.BACKGROUND};
  width: 100%;
  position: relative;
`;
const CatagoriesWrapper = styled.View`
  align-items: center;
`;
const AllCategoriesBtn = styled.TouchableOpacity`
  position: absolute;
  bottom: 70px;
  padding-horizontal: 16px;
  padding-vertical: 10px;
  background-color: ${p => p.theme.PRIMARY};
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CategorBtnText = styled.Text`
  color: ${p => p.theme.PRIMARY_TEXT};
  font-size: 14px;
  font-family: 'Poppins-Medium';
  margin-right: 8px;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  color: ${p => p.theme.PRIMARY_TEXT};
`;
