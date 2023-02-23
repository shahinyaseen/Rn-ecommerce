import React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {useStateValue} from '../../contextAPI/GlobelState';
import {Icon} from '../Icon/index';
import {useNavigation} from '@react-navigation/native';

const menuItems = [
  {
    category: 'Mobiles',
    icon: 'mobile',
    submenu: [
      {name: 'Apple'},
      {name: 'Samsung'},
      {name: 'Oppo'},
      {name: 'Mi'},
      {name: 'Vivo'},
      {name: 'Asus'},
      {name: 'Realme'},
      {name: 'Xiaomi'},
    ],
  },
  {
    category: 'Electronics',
    icon: 'laptop',
    submenu: [{name: 'Dell'}, {name: 'Mac'}, {name: 'Hp'}, {name: 'Lenova'}],
  },
  {
    category: 'Tablet',
    icon: 'tablet',
    submenu: [
      {name: 'Lenova'},
      {name: 'Samsung'},
      {name: 'RealMi'},
      {name: 'Mi'},
    ],
  },
  {
    category: 'Desktop',
    icon: 'desktop',
    submenu: [
      {name: 'Lenova'},
      {name: 'Dell'},
      {name: 'Compaq'},
      {name: 'Samsung'},
    ],
  },
  {
    category: 'Acsessories',
    icon: 'headphone',
    submenu: [],
  },
];

function Menu() {
  const [{theme}] = useStateValue();
  const navigation = useNavigation();

  const Menuitems = ({items, index, onPress}) => {
    return (
      <CategoryItemMobile key={index} onPress={onPress}>
        <CategoryIcon style={{fontWeight: '900'}} name={items.icon} />
        <CategoryTitle>{items.category}</CategoryTitle>
      </CategoryItemMobile>
    );
  };
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
      <MobileMenuContainer>
        {menuItems.map((menu, index) => {
          return (
            <Menuitems
              items={menu}
              key={index}
              onPress={() => navigation.navigate('sub-category', menu)}
            />
          );
        })}
      </MobileMenuContainer>
    </ScrollView>
  );
}

export default Menu;
const CategoryTitle = styled.Text`
  font-size: 16px;
  color: ${p => p.theme.PRIMARY};
  font-family: 'Poppins';
`;

const MobileMenuContainer = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 18px 0;
`;

const CategoryItemMobile = styled.TouchableOpacity`
  display: flex;
  alignitems: center;
  flex-direction: row;
  color: ${p => p.theme.PRIMARY};
  background-color: ${p => p.theme.WHITE_SMOKE};
  padding: 17px 16px;
  border-radius: 16px;
  margin: 0 15px;
  font-weight: 400;
`;

const CategoryIcon = styled(Icon)`
  font-size: 24px;
  margin: 0 4px;
  color: ${p => p.theme.TEXT_COLOR};
`;
