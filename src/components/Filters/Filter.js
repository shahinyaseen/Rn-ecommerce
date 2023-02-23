import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import BrandFilter from './BrandFilter';
import PriceFilter from './PriceFilter';
import {useStateValue} from '../../contextAPI/GlobelState';
import Button from '../Button/Button';
import {Icon} from '../Icon';
import ReviewFilter from './ReviewFilter';
import OfferFilter from './OfferFilter';
import {useNavigation} from '@react-navigation/native';

export default function Filter({
  closeFilter,
  brandFilterData,
  isBrand,
  setIsBrand,
  priceFilterData,
  isPrice,
  setIsPrice,
  isReview,
  setIsReview,
  reviewFilterData,
  isOffer,
  setIsOffer,
  offerFilterData,
  isMenu,
  setIsMenu,
  menuFilterData,
  clearAll,
}) {
  const [{theme}] = useStateValue();
  const navigation = useNavigation();
  return (
    <Wrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag">
        <TitleWrapper>
          <TitleText> Filter </TitleText>

          <CountProducts>
            <Count>11,263</Count>
            <SubText> Products</SubText>
          </CountProducts>
        </TitleWrapper>

        <AccordionWrap>
          <PriceFilter
            name="Price"
            data={priceFilterData}
            isPrice={isPrice}
            setIsPrice={setIsPrice}
          />
        </AccordionWrap>
        <AccordionWrap>
          <ReviewFilter
            name="Customer Review"
            data={reviewFilterData}
            isReview={isReview}
            setIsReview={setIsReview}
          />
        </AccordionWrap>
        <AccordionWrap>
          <BrandFilter
            name="Brand"
            data={brandFilterData}
            isBrand={isBrand}
            setIsBrand={setIsBrand}
          />
        </AccordionWrap>
        <AccordionWrap>
          <OfferFilter
            name="Offers"
            data={offerFilterData}
            isOffer={isOffer}
            setIsOffer={setIsOffer}
          />
        </AccordionWrap>
        <AccordionWrap>
          <BrandFilter
            name="Menu Item"
            data={menuFilterData}
            isBrand={isMenu}
            setIsBrand={setIsMenu}
          />
        </AccordionWrap>
      </ScrollView>
      <Footer>
        <FixedRow>
          <TouchableOpacity onPress={closeFilter}>
            <Icon name="longarrow-left" size={25} color={theme.TEXT_COLOR} />
          </TouchableOpacity>
          <DeafaultClear
            isDefault
            name="Clear"
            width={theme.sWidth * (133 * theme.PX_WIDTH)}
            onPress={clearAll}
          />
          <ApplyButton
            isPrimary
            name="Apply"
            width={theme.sWidth * (133 * theme.PX_WIDTH)}
          />
        </FixedRow>
      </Footer>
    </Wrapper>
  );
}
const Wrapper = styled.View`
  flex-grow: 1;
  position: relative;
  height: 100%;
`;
const AccordionWrap = styled.View``;
const TitleWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 16px;
  padding-top: 16px;
  padding-bottom: 8px;

  ${
    '' /* border-color: ${p => p.theme.ITEM_BORDER};
  border-width: 1.5px; */
  }
  background-color: ${p => p.theme.PRIMARY};
`;
const TitleText = styled.Text`
  font-family: 'Poppins-Bold';
  color: ${p => p.theme.PRIMARY_TEXT};
  font-size: 24px;
`;
const CountProducts = styled.View`
  justify-content: flex-end;
`;
const Count = styled.Text`
  text-align: right;
  font-family: 'Poppins-Bold';
  color: ${p => p.theme.PRIMARY_TEXT};
`;

const SubText = styled.Text`
  font-family: 'Poppins';
  color: ${p => p.theme.PRIMARY_TEXT};
  font-size: 14px;
`;

const Footer = styled.View`
  padding: 8px 24px;
  background-color: ${p => p.theme.BACKGROUND};
  position: absolute;
  bottom: 0px;
  width: 100%;
`;
const FixedRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const DeafaultClear = styled(Button)``;
const ApplyButton = styled(Button)``;
