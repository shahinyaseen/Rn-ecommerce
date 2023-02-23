import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Button from '../Button/Button';
import styled from 'styled-components/native';
import {useStateValue} from '../../contextAPI/GlobelState';
import {Icon} from '../Icon';
import {useNavigation} from '@react-navigation/native';

export default function OrderItem({image, brand, itemstatus, title, onPress}) {
  const [{theme}, dispatch] = useStateValue();
  const navigation = useNavigation();
  return (
    <Wrapper>
      <ImageContainer>
        <ImageCard source={image} resizeMode={'contain'} />
      </ImageContainer>
      <DetailContainer>
        <TopSection>
          <FlexItem onPress={onPress}>
            <Brand>{brand}</Brand>
            <Status>{itemstatus.toUpperCase()}</Status>
          </FlexItem>
          <Title>{title}</Title>
        </TopSection>
        <BottomSection>
          <ActionSection>
            <Button
              name="Write Review"
              width={theme.sWidth * (122 * theme.PX_WIDTH)}
              isDefault
              style={{marginRight: 24}}
              onPress={() => navigation.navigate('rateproduct')}
            />
            <BuyWrap>
              <BuyText>Buy Again</BuyText>
              <RightArrow name="longarrow-right" size={22} />
            </BuyWrap>
          </ActionSection>
        </BottomSection>
      </DetailContainer>
    </Wrapper>
  );
}
const Wrapper = styled.View`
  width: ${p => p.theme.sWidth * 0.8769}px;
  flex-direction: row;
  margin: 16px auto;
`;
const ImageContainer = styled.View`
  margin-right: 12px;
  padding-vertical: 19px;
  width: ${p => p.theme.sWidth * (75 * p.theme.PX_WIDTH)}px;
`;
const ImageCard = styled.Image`
  width: null;
  height: 70;
`;

const DetailContainer = styled.View`
  width: ${p => p.theme.sWidth * (260 * p.theme.PX_WIDTH)}px;
`;

const TopSection = styled.View``;

const FlexItem = styled.TouchableOpacity`
  flex-direction: row;
`;
const Brand = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-SemiBold';
  color: ${p => p.theme.STRIKE_TEXT};
  margin-right: 16px;
`;
const Status = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-SemiBold';
  color: ${p => p.theme.ACCENT};
`;
const Title = styled.Text`
  font-size: 14px;
  line-height: 24px;
  font-family: 'Poppins-SemiBold';

  color: ${p => p.theme.TEXT_COLOR};
`;

const BottomSection = styled.View``;
const ActionSection = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  margin: 5px 0 0 29px;
`;

const BuyWrap = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
const BuyText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: ${p => p.theme.TEXT_COLOR};
`;
const RightArrow = styled(Icon)`
  margin-left: 6px;
`;
