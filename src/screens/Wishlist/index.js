import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {
  Icon,
  TextBox,
  Button,
  TextBoxBtn,
  WishItem,
  TextBoxIcon,
} from '../../components';
import {useStateValue} from '../../contextAPI/GlobelState';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {earphone, ptron, product} from '../../assets';
import Product from '../../components/Product/Product';
const wishitems = [
  {
    id: 1,
    image: earphone,
    brand: 'boAt',
    title:
      'boAt Airdopes 141 TWS Earbuds with 42H Playtime, BEAST Mode, ENx Tech',
    price: '1,299',
  },
  {
    id: 2,
    image: ptron,
    brand: 'boAt',
    title:
      'boAt Airdopes 141 TWS Earbuds with 42H Playtime, BEAST Mode, ENx Tech',
    price: '1,299',
  },
  {
    id: 3,
    image: product,
    brand: 'boAt',
    title:
      'boAt Airdopes 141 TWS Earbuds with 42H Playtime, BEAST Mode, ENx Tech',
    price: '299',
  },
];
export default function Wishlist({navigation}) {
  const insets = useSafeAreaInsets();
  const [{theme}] = useStateValue();

  return (
    <Wrapper>
      <StatusBar animated={true} backgroundColor={theme.BACKGROUND} />
      <Inner
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        }}>
        <Header>
          <Title>My Wishlist</Title>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Icon name="close" size={22} color={theme.TEXT_COLOR} />
          </TouchableOpacity>
        </Header>
        <FormGroup>
          <TextBoxIcon
            placeholder="Search"
            width={theme.sWidth * 0.8}
            icon="search"
            color={theme.TEXT_COLOR}
          />
        </FormGroup>
        <WishContent>
          {wishitems.map((items, index) => {
            return (
              <WishItemWrapper key={index}>
                <WishItem
                  image={items.image}
                  brand={items.brand}
                  title={items.title}
                  price={items.price}
                />
              </WishItemWrapper>
            );
          })}
        </WishContent>
      </Inner>
    </Wrapper>
  );
}
const Wrapper = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`;
const Inner = styled.View`
  height: 100%;
  margin-left: 8%;
  background-color: ${p => p.theme.BACKGROUND};
  ${
    '' /* padding-horizontal: ${p => p.theme.sWidth * (24 * p.theme.PX_WIDTH)}px; */
  }
`;
const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding-horizontal: ${p => p.theme.sWidth * (24 * p.theme.PX_WIDTH)}px;
`;
const Title = styled.Text`
  color: ${props => props.theme.TEXT_COLOR};
  font-size: 20px;
  font-family: 'Poppins-Bold';
`;

const FormGroup = styled.View`
  margin-vertical: 24px;
  padding-horizontal: ${p => p.theme.sWidth * (24 * p.theme.PX_WIDTH)}px;
`;
const WishContent = styled.View`
  border-color: ${p => p.theme.WHITE_SMOKE};
  border-top-width: 1px;
`;

const WishItemWrapper = styled.View`
  border-color: ${p => p.theme.WHITE_SMOKE};
  border-bottom-width: 1px;
`;
