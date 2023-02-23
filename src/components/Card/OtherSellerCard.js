import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {Icon} from '../Icon';

export default function OtherSellerCard({
  isActive,
  sellername,
  rating,
  ratingcount,
  price,
  ...rest
}) {
  return (
    <Wrapper {...rest}>
      <SellcardWrap isActive={isActive}>
        <TitleText isActive={isActive}>{sellername}</TitleText>
        <RatingWrapper>
          <StyledIcon isActive={isActive} name="star-fill" size={16} />
          <RatingCount isActive={isActive}>{rating} </RatingCount>
          <RatingText isActive={isActive}>
            Rating {'   '}
            {ratingcount} Reviews
          </RatingText>
        </RatingWrapper>
        <Price isActive={isActive}>₹{price}</Price>
      </SellcardWrap>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  flex: 1;
`;

const SellcardWrap = styled.View`
  padding-vertical: 16px;
  padding-horizontal: 24px;

  background-color: ${p => (p.isActive ? p.theme.ACCENT : p.theme.BACKGROUND)};
  border-bottom-width: 1px;
  border-bottom-color: ${p => p.theme.ITEM_BORDER};
`;
const TitleText = styled.Text`
  font-size: 20px;
  font-family: 'Poppins-Regular';
  color: ${p => (p.isActive ? p.theme.ACCENT_TEXT : p.theme.ACCENT_LIGHT_TEXT)};
`;
const RatingWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  margin-bottom: 8px;
`;
const RatingCount = styled.Text`
  color: ${p => (p.isActive ? p.theme.ACCENT_TEXT : p.theme.ACCENT_LIGHT_TEXT)};
  font-size: 14px;
  font-family: 'Poppins-Bold';
  margin-left: 4px;
  margin-right: 4px;
`;
const RatingText = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Light';
  color: ${p => (p.isActive ? p.theme.ACCENT_TEXT : p.theme.ACCENT_LIGHT_TEXT)};
`;
const StyledIcon = styled(Icon)`
  color: ${p => (p.isActive ? p.theme.ACCENT_TEXT : p.theme.ACCENT_LIGHT_TEXT)};
`;

const Price = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 16px;
  color: ${p => (p.isActive ? p.theme.ACCENT_TEXT : p.theme.ACCENT)};
`;
