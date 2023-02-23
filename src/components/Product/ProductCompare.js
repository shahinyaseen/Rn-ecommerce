import {View, Text, Image} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {Icon} from '../Icon';
import {useStateValue} from '../../contextAPI/GlobelState';

export default function ProductCompare({
  image,
  title,
  offerPrice,
  count,
  rating,
}) {
  const [{theme}] = useStateValue();

  return (
    <Pcard>
      <PcardImage source={image} resizeMode={'contain'} />
      <PcardInfo>
        <PcardTitle>{title}</PcardTitle>
        <PcardRatingContainer>
          <Icon name="star-fill" color={theme.GOLD} size={18} />
          <Rating> {rating}</Rating>
          <ReviewCount>{count}</ReviewCount>
        </PcardRatingContainer>
        <PcardOfferPrice>₹ {offerPrice}</PcardOfferPrice>
      </PcardInfo>
    </Pcard>
  );
}

const Pcard = styled.View`
  background-color: ${p => p.theme.BACKGROUND};
  flex-direction: column;
  justify-content: center;
  padding: 8px;
  width: ${p => p.theme.sWidth * (125 * p.theme.PX_WIDTH)}px;
  border-right-width: 1px;
  border-right-color: ${p => p.theme.ITEM_BORDER};
`;

const PcardImage = styled.Image`
  justify-content: center;
  align-items: center;
  width: ${p => p.theme.sWidth * (100 * p.theme.PX_WIDTH)}px;
  height: 150px;
  margin-bottom: 16px;
`;

const PcardInfo = styled.View``;

const PcardTitle = styled.Text`
  font-family: 'Poppins-Regular';
  line-height: 24px;
  font-size: 14px;
  color: ${p => p.theme.TEXT_COLOR};
`;
const PcardRatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ReviewCount = styled.Text`
  font-family: 'Poppins';
  font-size: 12px;
  opacity: 0.7px;
  color: ${p => p.theme.TEXT_COLOR};
`;

const PcardOfferPrice = styled.Text`
  color: ${p => p.theme.TEXT_COLOR};
  font-size: 16px;
  font-family: 'Poppins-Bold';
`;

const Rating = styled.Text`
  color: ${p => p.theme.TEXT_COLOR};
  font-family: 'Poppins-Bold';
  font-size: 16px;
  margin: 0 8px;
`;
