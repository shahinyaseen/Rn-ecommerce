import {View, Image} from 'react-native';
import React, {useState} from 'react';
import {product} from '../../assets/';
import styled from 'styled-components/native';
import {WishBtn, Button, Icon} from '../';
import {useStateValue} from '../../contextAPI/GlobelState';
export default function ProductOffer({
  percentage,
  image,
  offprice,
  rprice,
  content,
}) {
  const [wishBtn, setWishBtn] = useState(false);
  const [{theme}] = useStateValue();
  return (
    <Wrapper>
      <ImageBox source={image} />
      <OfferWrapper>
        <Offer>{percentage}%</Offer>
      </OfferWrapper>
      <WishWrapper>
        <WishBtn isActive={wishBtn} onPress={() => setWishBtn(!wishBtn)} />
      </WishWrapper>
      <Details>
        <Save>
          <SaveText>Save</SaveText>
          <Off>₹ {offprice}</Off>
        </Save>
        <Rprice>₹ {rprice}</Rprice>
        <Name numberOfLines={3}>{content}</Name>
      </Details>
    </Wrapper>
  );
}
const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${p => p.theme.sWidth * 0.4179}px;
`;
const ImageBox = styled.Image`
  resize-mode: contain;
  width: 163px;
  height: 188px;
`;
const OfferWrapper = styled.View`
  position: absolute;
  right: 0;
  top: 0;
  background-color: ${p => p.theme.RED};
  border-radius: 100px;
  padding-horizontal: 7px;
  padding-vertical: 3px;
`;
const Offer = styled.Text`
  color: ${p => p.theme.RED_TEXT};
  font-family: 'Poppins-Regular';
  font-size: 12px;
`;
const WishWrapper = styled.View`
  position: absolute;
  right: 0;
`;
const Details = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-vertical: 5px;
`;
const Off = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-Bold';
  color: ${p => p.theme.ACCENT};
  line-height: 22.4px;
`;
const Save = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const SaveText = styled.Text`
  font-size: 14px;
  line-height: 28.8px;
  font-family: 'Poppins-Regular';
  color: ${p => p.theme.TEXT_COLOR};
  margin-right: 4px;
`;
const Rprice = styled.Text`
  font-size: 14px;
  line-height: 22.4px;
  opacity: 0.5;
  font-family: 'Poppins-SemiBold';
  color: ${p => p.theme.TEXT_COLOR};
`;
const Name = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Regular';
  color: ${p => p.theme.TEXT_COLOR};
  line-height: 24px;
`;
