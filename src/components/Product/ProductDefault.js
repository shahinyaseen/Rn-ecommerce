import {View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {product} from '../../assets/';
import styled from 'styled-components/native';
import {Button, Icon} from '../';
import {useStateValue} from '../../contextAPI/GlobelState';
export default function ProductDefault({
  image,
  brand,
  content,
  rating,
  ratingcount,
  price,
  rprice,
  count,
  onPress,
}) {
  const [{theme}] = useStateValue();
  return (
    <Wrapper>
      <TouchableOpacity onPress={onPress}>
        <ImageBox source={image} />
      </TouchableOpacity>
      <Details onPress={onPress}>
        <Brand>{brand.toUpperCase()}</Brand>
        <Name numberOfLines={2}>{content}</Name>
        <RatingWrapper>
          {/* <StyledIcon name="star-fill" size={18} /> */}
          <StarWrapper>
            {[...Array(5)].map((_, i) => {
              return (
                <StyledIcon
                  key={i}
                  name={i < count ? 'star' : 'star-fill'}
                  size={12}
                />
              );
            })}
          </StarWrapper>
          <RatingText>{rating}</RatingText>
          <RatingCount>{ratingcount}</RatingCount>
        </RatingWrapper>
        <Price>₹ {price}</Price>
        <Rprice>₹ {rprice}</Rprice>
      </Details>
    </Wrapper>
  );
}
const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${p => p.theme.sWidth * 0.59743}px;
  margin-right: 24px;

  padding: 8px;
`;
const ImageBox = styled.Image`
  resize-mode: contain;
  width: 163px;
  height: 188px;
`;

const Details = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-vertical: 5px;
`;
const Brand = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-SemiBold';
  color: ${p => p.theme.ACCENT};
  line-height: 20.4px;
`;
const Name = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-Regular';
  color: ${p => p.theme.TEXT_COLOR};
  line-height: 24px;
`;
const RatingWrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin-vertical: 3px;
`;
const RatingText = styled.Text`
  font-size: 16px;
  line-height: 22.4px;
  font-family: 'Poppins-SemiBold';
  color: ${p => p.theme.TEXT_COLOR};
  margin-right: 16px;
`;
const RatingCount = styled.Text`
  font-size: 16px;
  line-height: 22.4px;
  opacity: 0.5;
  font-family: 'Poppins-Regular';
  color: ${p => p.theme.TEXT_COLOR};
  margin-left: 4px;
`;
const Price = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-Bold';
  color: ${p => p.theme.TEXT_COLOR};
  line-height: 22.4px;
`;
const Rprice = styled.Text`
  font-size: 16px;
  line-height: 22.4px;
  font-family: 'Poppins-Bold';
  color: ' ${p => p.theme.STRIKE_TEXT}';
`;
const StarWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;
const StyledIcon = styled(Icon)`
  color: ${p => p.theme.GOLD};
  margin: 1px;
`;
