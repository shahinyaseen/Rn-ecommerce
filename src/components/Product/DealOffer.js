import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {product} from '../../assets/';
import styled from 'styled-components/native';
import {Button, Icon} from '../';
import {useStateValue} from '../../contextAPI/GlobelState';
export default function DealOffer({
  percentage,
  image,
  offprice,
  rprice,
  content,
  onPress,
}) {
  const [{theme}] = useStateValue();
  return (
    <Wrapper>
      <TouchableOpacity onPress={onPress}>
        <ImageBox source={image} />
      </TouchableOpacity>
      <OfferWrapper>
        <Offer>{percentage}%</Offer>
      </OfferWrapper>
      <Details onPress={onPress}>
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
  width: ${p => p.theme.sWidth * 0.59743}px;
  margin-right: 24px;
`;
const ImageBox = styled.Image`
  resize-mode: contain;
  width: 180px;
  height: 215px;
  margin-vertical: 24px;
`;
const OfferWrapper = styled.View`
  position: absolute;
  right: 15px;
  top: 15px;
  background-color: ${p => p.theme.RED};
  border-radius: 100px;
  padding-horizontal: 5px;
  padding-vertical: 7px;
`;
const Offer = styled.Text`
  color: ${p => p.theme.RED_TEXT};
  font-family: 'Poppins-Regular';
  font-size: 12px;
`;

const Details = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
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
