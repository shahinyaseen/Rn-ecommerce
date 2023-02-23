import {View, Image, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {WishBtn, Button, Icon} from '../';
import {useStateValue} from '../../contextAPI/GlobelState';
import QuikViewModal from '../Modal/QuikViewModal';
import ProductQuikView from './ProductQuikView';
export default function ProductItem({
  image,
  brand,
  description,
  rating,
  ratingcount,
  price,
  rprice,
  onPress,
}) {
  const [wishBtn, setWishBtn] = useState(false);
  const [{theme}, dispatch] = useStateValue();
  const [isQuikView, setIsQuikView] = useState(false);

  return (
    <Wrapper>
      <TouchableOpacity onPress={onPress}>
        <ImageBox source={image} />
      </TouchableOpacity>
      <QuickBtnWrapper>
        <WishBtn isActive={wishBtn} onPress={() => setWishBtn(!wishBtn)} />
        <Button
          isDefault
          name="Quick View"
          width={theme.sWidth * theme.BTN_WIDTH}
          isRound
          onPress={() => setIsQuikView(!isQuikView)}
        />
      </QuickBtnWrapper>
      <Details onPress={onPress}>
        <Brand>{brand.toUpperCase()}</Brand>
        <Name numberOfLines={2}>{description}</Name>
        <RatingWrapper>
          <StyledIcon name="star-fill" size={17} />
          <RatingText>{rating}</RatingText>
          <RatingCount>{ratingcount}</RatingCount>
        </RatingWrapper>
        <Price>₹ {price}</Price>
        <Rprice>₹ {rprice}</Rprice>
      </Details>
      <QuikViewModal
        visible={isQuikView}
        close={() => setIsQuikView(!isQuikView)}>
        <ModalContent>
          <ProductQuikView />
        </ModalContent>
      </QuikViewModal>
    </Wrapper>
  );
}
const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${p => p.theme.sWidth * 0.4179}px;
  margin-bottom: 24px;
`;
const ImageBox = styled.Image`
  resize-mode: contain;
  width: ${p => p.theme.sWidth * 0.3435}px;
  height: 188px;
`;
const QuickBtnWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 17px;
  width: 100%;
`;
const Details = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-vertical: 5px;
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
  font-family: 'Poppins';
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
  opacity: 0.5;
  font-family: 'Poppins-SemiBold';
  color: ${p => p.theme.TEXT_COLOR};
`;
const StyledIcon = styled(Icon)`
  color: ${p => p.theme.GOLD};
  margin-right: 4px;
`;
//Modal
const ModalContent = styled.View`
  background-color: ${p => p.theme.BACKGROUND};
  border-radius: 10px;
  flex-direction: column;
  height: ${p => p.theme.sHeight * 0.9}px;
  padding-vertical: 60px;
`;
