import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {Icon} from '../';
import {useNavigation} from '@react-navigation/native';

export default function SellerCard() {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <Title>Seller</Title>
      <Name>Appario Retail Private Ltd</Name>
      <RatingWrapper>
        <StyledIcon name="star" size={18} />
        <RatingCount>4.5 </RatingCount>
        <RatingText>Rating 6,455 Reviews</RatingText>
      </RatingWrapper>
      <OtherButton onPress={() => navigation.navigate('seller')}>
        <BtnText>Other Sellers And Offers </BtnText>
        <StyledIcon name="longarrow-right" size={18} />
      </OtherButton>
    </Wrapper>
  );
}
const Wrapper = styled.View`
  padding-horizontal: 24px;
  padding-vertical: 16px;
  background-color: ${p => p.theme.ACCENT_LIGHT};
`;
const Title = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-Bold';
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
  margin-bottom: 5px;
`;
const Name = styled.Text`
  font-size: 20px;
  font-family: 'Poppins-Light';
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
`;
const RatingWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  padding-bottom: 54px;
`;
const RatingCount = styled.Text`
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
  font-size: 14px;
  font-family: 'Poppins-Bold';
  margin-left: 4px;
`;
const RatingText = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Light'
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
  ;
`;
const StyledIcon = styled(Icon)`
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
`;
const OtherButton = styled.TouchableOpacity`
  background-color: ${p => p.theme.ACCENT_SECONDARY};
  border-radius: 10px;
  padding-horizontal: 16px;
  padding-vertical: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  right: 24px;
  bottom: 16px;
`;
const BtnText = styled.Text`
  color: ${p => p.theme.ACCENT_SECONDARY_TEXT};
  font-size: 14px;
  font-family: 'Poppins-Medium';
`;
