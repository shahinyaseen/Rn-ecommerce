import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {logo} from '../../assets';
import {Icon} from '../Icon/index';
import {useNavigation} from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();
  return (
    <Wrapper
      style={{
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        shadowColor: '#000',
        shadowOffset: {height: 0, width: 0},
      }}>
      <Logo>
        <Image source={logo} />
      </Logo>
      <HeaderActions>
        <ActionBtn
          activeOpacity={0.7}
          onPress={() => navigation.navigate('store')}>
          <Location name="location" />
        </ActionBtn>
        <ActionBtn
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate('notification');
          }}>
          <Notify name="notification" />
          <Badge />
        </ActionBtn>
        <ActionBtn
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate('wishlist');
          }}>
          <Wish name="wishlist" />
          <Badge />
        </ActionBtn>
      </HeaderActions>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 24px;
  height: 100px;
  borderbottomwidth: 2px;
  background-color: ${p => p.theme.PRIMARY_TEXT};
  elevation: 4;
`;
const Logo = styled.View``;
const HeaderActions = styled.View`
  flex-direction: row;
  align-items: center;
  justifycontent: space-between;
`;

const Location = styled(Icon)`
  font-size: 28px;
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
`;
const ActionBtn = styled.TouchableOpacity`
  margin-right: 8px;
`;
const Badge = styled.View`
  position: absolute;
  right: 0;
  top: 0;
  background-color: ${p => p.theme.RED};
  border-radius: 100px;
  padding-horizontal: 5px;
  padding-vertical: 5px;
`;
const Notify = styled(Icon)`
  font-size: 28px;
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
`;

const Wish = styled(Icon)`
  font-size: 28px;
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
`;
