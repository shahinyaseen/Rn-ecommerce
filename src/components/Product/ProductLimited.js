import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {ptron} from '../../assets';

export default function ProductLimited({image, brand, mrp, offerPrice}) {
  return (
    <Pcard>
      <CardTitle>Limited Deals</CardTitle>
      <CountDownContainer>
        <CountTitle>Ends in kfjkdfdsjfkdsfhsdkfj</CountTitle>
      </CountDownContainer>
      <PcardImageContainer>
        <PcardImage source={image} alt="image" resizeMode="contain" />
      </PcardImageContainer>
      <PcardInfo>
        <PcardOfferPrice>₹ {offerPrice}</PcardOfferPrice>
        <PcardMrp>₹ {mrp}</PcardMrp>
      </PcardInfo>
      <PcardBrand>{brand}</PcardBrand>
    </Pcard>
  );
}

const CardTitle = styled.Text`
  font-size: 32px;
  font-family: 'Poppins-Bold';
`;
const CountDownContainer = styled.View``;
const CountTitle = styled.Text`
  color: ${p => p.theme.GOLD_TEXT};
  font-family: 'Poppins-SemiBold';
  font-size: 14px;
`;
const Pcard = styled.View`
  width: ${p => p.theme.sWidth * 0.8769}px;
  height: auto;
  background-color: ${p => p.theme.GOLD};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const PcardImage = styled(Image)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PcardInfo = styled.View`
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const PcardBrand = styled.Text`
  font-size: 20px;
  color: ${p => p.theme.GOLD_TEXT};
`;

const PcardMrp = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 18px;
  color: ${p => p.theme.GOLD_TEXT};
  text-decoration-line: line-through;
`;

const PcardOfferPrice = styled.Text`
  color: ${p => p.theme.GOLD_TEXT};
  font-size: 32px;
  font-family: 'Poppins-Bold';
  margin: 0 23px 0 0;
`;

const PcardImageContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 27px 0 31px 0;
`;
