import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useStateValue} from '../../contextAPI/GlobelState';
import styled from 'styled-components/native';
import {Icon} from '../';
export default function DrawerContent(props) {
  const [{theme}] = useStateValue();
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: theme.BACKGROUND,
          height: '100%',
        }}>
        <Wrapper>
          <Header>
            <Title>Menu</Title>
            <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
              <Icon name="close" size={19} color={theme.TEXT_COLOR} />
            </TouchableOpacity>
          </Header>
          <ItemWrapper>
            <Item
              onPress={() => {
                props.navigation.navigate('orders');
              }}>
              <Icon
                name="orders"
                size={25}
                color={theme.TEXT_COLOR}
                style={{marginRight: 10}}
              />
              <ItemText>Orders</ItemText>
            </Item>
            <Item
              onPress={() => {
                props.navigation.navigate('wishlist');
              }}>
              <Icon
                name="wishlist"
                size={25}
                color={theme.TEXT_COLOR}
                style={{marginRight: 10}}
              />
              <ItemText>My Wishlist</ItemText>
            </Item>
            <Item
              onPress={() => {
                props.navigation.navigate('wishlist');
              }}>
              <Icon
                name="tag"
                size={25}
                color={theme.TEXT_COLOR}
                style={{marginRight: 10}}
              />
              <ItemText>Offer</ItemText>
            </Item>
          </ItemWrapper>
          <Item
            onPress={() => {
              props.navigation.navigate('wishlist');
            }}>
            <ItemText>EMI Facilities</ItemText>
          </Item>
          <Item
            onPress={() => {
              props.navigation.navigate('wishlist');
            }}>
            <ItemText>Terms & Conditions</ItemText>
          </Item>
          <Item
            onPress={() => {
              props.navigation.navigate('wishlist');
            }}>
            <ItemText>Return / Exchange</ItemText>
          </Item>
          <Item
            onPress={() => {
              props.navigation.navigate('wishlist');
            }}>
            <ItemText>Privacy Policy</ItemText>
          </Item>

          <Item
            onPress={() => {
              props.navigation.navigate('wishlist');
            }}>
            <ItemText>FAQs</ItemText>
          </Item>
          <Item
            onPress={() => {
              props.navigation.navigate('wishlist');
            }}>
            <ItemText>Contact</ItemText>
          </Item>
        </Wrapper>
        <Footer>
          <FooterItemWrapper>
            <Item
              onPress={() => {
                props.navigation.navigate('profile');
              }}>
              <Icon
                name="profile"
                size={25}
                color={theme.TEXT_COLOR}
                style={{marginRight: 10}}
              />
              <ItemText>Accout Settings</ItemText>
            </Item>
            <Item
              onPress={() => {
                props.navigation.navigate('orders');
              }}>
              <Icon
                name="login"
                size={25}
                color={theme.TEXT_COLOR}
                style={{marginRight: 10}}
              />
              <ItemText>Login</ItemText>
            </Item>
          </FooterItemWrapper>
        </Footer>
      </DrawerContentScrollView>
    </View>
  );
}
const Wrapper = styled.View`
  padding-horizontal: 24px;
  padding-top: 20px;
`;
const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.Text`
  color: ${props => props.theme.TEXT_COLOR};
  font-size: 20px;
  font-family: 'Poppins-Bold';
`;
const ItemWrapper = styled.View`
  margin-top: 33px;
  margin-bottom: 16px;
  padding-bottom: 26px;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.ITEM_BORDER};
`;
const Item = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;
const ItemText = styled.Text`
  color: ${props => props.theme.TEXT_COLOR};
  font-size: 16px;
  font-family: 'Poppins-Light';
`;
const Footer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${p => p.theme.ACCENT_SECONDARY};
  width: 100%;
`;
const FooterItemWrapper = styled.View`
  padding-top: 16px;
  padding-horizontal: 24px;
  padding-bottom: 16px;
`;
