import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {Icon} from '../Icon';
import {useStateValue} from '../../contextAPI/GlobelState';

export default function WishItem({image, brand, title, price}) {
  const [{theme}, dispatch] = useStateValue();

  return (
    <Wrapper>
      <ImageContainer>
        <ImageCard source={image} resizeMode={'contain'} />
      </ImageContainer>
      <DetailContainer>
        <TopSection>
          <Brand>{brand}</Brand>
          <Title>{title}</Title>
          <PriceArea>₹{price}</PriceArea>
        </TopSection>
        <BottomSection>
          <ActionSection>
            <Addtocart>
              <AddtocartText>Add To Cart</AddtocartText>
            </Addtocart>
            <Delete>
              <Icon
                name="close"
                color={theme.ACCENT_SECONDARY_TEXT}
                size={20}
              />
            </Delete>
          </ActionSection>
        </BottomSection>
      </DetailContainer>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  flex-grow: 1;
  background-color: ${p => p.theme.BACKGROUND};
  display: flex;
  flex-direction: row;
  margin: 16px auto;
  padding-horizontal: ${p => p.theme.sWidth * (24 * p.theme.PX_WIDTH)}px;
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

const Brand = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-SemiBold';
  color: ${p => p.theme.STRIKE_TEXT};
`;

const Title = styled.Text`
  font-size: 14px;
  line-height: 24px;
  font-family: 'Poppins-SemiBold';

  color: ${p => p.theme.TEXT_COLOR};
`;

const PriceArea = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 16px;
  color: ${p => p.theme.TEXT_COLOR};
`;

const BottomSection = styled.View``;
const ActionSection = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  padding-horizontal: 25px;
`;

const Addtocart = styled.TouchableOpacity`
  padding: 4px 15px;
  width: ${p => p.theme.sWidth * (115 * p.theme.PX_WIDTH)};
  height: 32px;
  background-color: ${p => p.theme.ACCENT};
  border-radius: 10px;
  align-item: center;
  justify-content: center;
`;
const AddtocartText = styled.Text`
  text-align: center;
  color: ${p => p.theme.ACCENT_TEXT};
`;
const Delete = styled.TouchableOpacity`
  width: ${p => p.theme.sWidth * (55 * p.theme.PX_WIDTH)};
  height: 32px;
  padding: 4px 16px;
  margin-left: 16px;
  background-color: ${p => p.theme.ACCENT_SECONDARY};
  border-radius: 10px;
  align-item: center;
  justify-content: center;
`;
