import {View, Image} from 'react-native';
import React, {useState} from 'react';
import {product} from '../../assets/';
import styled from 'styled-components/native';
import {WishBtn, Button, Icon, EyeBtn} from '../';
import {useStateValue} from '../../contextAPI/GlobelState';
export default function ProductRow({
  image,
  brand,
  description,
  rating,
  ratingcount,
  price,
  rprice,
}) {
  const [wishBtn, setWishBtn] = useState(false);
  const [{theme}] = useStateValue();
  return (
    <Wrapper>
      <First>
        <ImageBox source={image} />
        <QuickBtnWrapper>
          <WishBtn isActive={wishBtn} onPress={() => setWishBtn(!wishBtn)} />
          <EyeBtn style={{marginLeft: 14}} />
        </QuickBtnWrapper>
      </First>
      <Second>
        <Brand>{brand.toUpperCase()}</Brand>
        <Name numberOfLines={3}>{description}</Name>
        <RatingWrapper>
          <StyledIcon name="star-fill" size={17} />
          <RatingText>{rating}</RatingText>
          <RatingCount>{ratingcount}</RatingCount>
        </RatingWrapper>
        <PriceWrapper>
          <Price>₹ {price}</Price>
          <Rprice>₹ {rprice}</Rprice>
        </PriceWrapper>
      </Second>
    </Wrapper>
  );
}
const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: ${p => p.theme.sWidth * 0.8769}px;
  margin-bottom: 24px;
`;
const First = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${p => p.theme.sWidth * (108 * p.theme.PX_WIDTH)}px;
`;
const Second = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: ${p => p.theme.sWidth * (226 * p.theme.PX_WIDTH)}px;
`;

const ImageBox = styled.Image`
  resize-mode: contain;
  width: 108px;
  height: 125px;
`;
const QuickBtnWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100%;
`;
const Brand = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-Medium';
  color: ${p => p.theme.ACCENT};
  line-height: 20.4px;
`;
const Name = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Regular';
  color: ${p => p.theme.TEXT_COLOR};
  line-height: 24px;
`;
const RatingWrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin-vertical: 3px;
  align-items: center;
`;
const RatingText = styled.Text`
  font-size: 16px;
  line-height: 22.4px;
  font-family: 'Poppins-SemiBold';
  color: ${p => p.theme.TEXT_COLOR};
`;
const RatingCount = styled.Text`
  font-size: 12px;
  line-height: 22.4px;
  opacity: 0.5;
  font-family: 'Poppins-Regular';
  color: ${p => p.theme.TEXT_COLOR};
  margin-left: 4px;
`;
const PriceWrapper = styled.View`
  display: flex;
  flex-direction: row;
`;
const Price = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-Bold';
  color: ${p => p.theme.TEXT_COLOR};
  line-height: 22.4px;
  margin-right: 10px;
`;
const Rprice = styled.Text`
  font-size: 16px;
  line-height: 22.4px;
  opacity: 0.5;
  font-family: 'Poppins-SemiBold';
  color: ${p => p.theme.TEXT_COLOR};
`;
const StyledIcon = styled(Icon)`
  color: ${p => p.theme.GOLD};
`;
