import {View, Text, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import styled from 'styled-components/native';
import {Icon} from '../Icon';
import {useNavigation, useScrollToTop} from '@react-navigation/native';
import {useStateValue} from '../../contextAPI/GlobelState';

export default function PButtonBar({onScrollBtn, ...rest}) {
  const [{theme}, dispatch] = useStateValue();
  const navigation = useNavigation();

  return (
    <Footer>
      <FixedRow>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconLeft name="longarrow-left" size={22} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('search')}>
          <IconSearch name="search" size={22} color={theme.TEXT_COLOR} />
        </TouchableOpacity>
        <CartWrap onPress={() => navigation.navigate('cart')}>
          <IconCart name="cart" size={22} color={theme.TEXT_COLOR} />
          <Badge />
        </CartWrap>
        <TouchableOpacity>
          <IconArrowTop
            name="longarrow-up"
            size={22}
            color={theme.TEXT_COLOR}
            onPress={onScrollBtn}
          />
        </TouchableOpacity>
      </FixedRow>
    </Footer>
  );
}

//Footer

const Footer = styled.View`
  postion: fixed;
  bottom: 0;
  background-color: ${p => p.theme.ACCENT_TEXT};
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  shadow-color: black;
  shadow-offset: 1px -1px;
  elevation: 10;
  z-index: 1;
`;
const FixedRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 24px;
  padding-vertical: 15px;
`;
const IconLeft = styled(Icon)`
  font-family: 'Poppins-Bold';
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
`;

const IconSearch = styled(Icon)``;
const IconCart = styled(Icon)``;

const IconArrowTop = styled(Icon)``;

const CartWrap = styled.TouchableOpacity``;

const Badge = styled.View`
  position: absolute;
  right: 0;
  top: 1;
  background-color: ${p => p.theme.RED};
  border-radius: 100px;
  padding-horizontal: 5px;
  padding-vertical: 5px;
`;
