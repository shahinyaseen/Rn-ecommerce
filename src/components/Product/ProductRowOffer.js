import {View, Image} from 'react-native';
import React, {useState} from 'react';
import {product} from '../../assets/';
import styled from 'styled-components/native';
import {WishBtn, Button, Icon, EyeBtn} from '../';
import {useStateValue} from '../../contextAPI/GlobelState';
export default function ProductRowOffer() {
  const [wishBtn, setWishBtn] = useState(false);
  const [{theme}] = useStateValue();
  return (
    <Wrapper>
      <First>
        <ImageBox source={product} />
        <QuickBtnWrapper>
          <WishBtn isActive={wishBtn} onPress={() => setWishBtn(!wishBtn)} />
          <EyeBtn style={{marginLeft: 14}} />
        </QuickBtnWrapper>
      </First>
      <Second>
        <Save>
          <OfferWrapper>
            <Offer>25%</Offer>
          </OfferWrapper>
          <SaveText>Save</SaveText>
          <Off>₹ 12,999</Off>
        </Save>
        <Rprice>₹ 13,999</Rprice>
        <Name numberOfLines={3}>
          Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm
          Processor | True 48 MP Quad Camera | 90Hz Refresh Rate
        </Name>
      </Second>
    </Wrapper>
  );
}
const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: ${p => p.theme.sWidth * 0.8769}px;
`;
const First = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${p => p.theme.sWidth * 0.3076}px;
`;
const Second = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: ${p => p.theme.sWidth * 0.5384}px;
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
const OfferWrapper = styled.View`
  background-color: ${p => p.theme.RED};
  border-radius: 100px;
  padding-horizontal:7px;
  padding-vertical:3px;
  margin-right:4px;
`;
const Offer = styled.Text`
  color: ${p => p.theme.RED_TEXT};
  font-family: 'Poppins-Regular';
  font-size: 12px;
`;
const SaveText = styled.Text`
  font-size: 14px;
  line-height: 28.8px;
  font-family: 'Poppins-Regular';
  color: ${p => p.theme.TEXT_COLOR};
  margin-right: 4px;
`;
const Name = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Regular';
  color: ${p => p.theme.TEXT_COLOR};
  line-height: 24px;
`;
const Rprice = styled.Text`
  font-size: 14px;
  line-height: 22.4px;
  opacity: 0.5;
  font-family: 'Poppins-SemiBold';
  color: ${p => p.theme.TEXT_COLOR};
`;
