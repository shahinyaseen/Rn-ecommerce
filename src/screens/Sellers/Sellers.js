import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {mobile} from '../../assets';
import styled from 'styled-components/native';
import {
  Button,
  Icon,
  OtherSellerCard,
  QuikViewModal,
  ProductImageModal,
} from '../../components';
import {useStateValue} from '../../contextAPI/GlobelState';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

let data = [
  {
    id: 1,
    sellername: 'Fashionury',
    rating: '4.5',
    ratingcount: '2.142',
    price: '65,800',
  },
  {
    id: 2,
    sellername: 'TheGiftKart',
    rating: '4.5',
    ratingcount: '2.142',
    price: '65,800',
  },
  {
    id: 3,
    sellername: 'Spigen India',
    rating: '4.5',
    ratingcount: '2.142',
    price: '65,800',
  },
  {
    id: 4,
    sellername: 'Spigen India',
    rating: '4.5',
    ratingcount: '2.142',
    price: '65,800',
  },
  {
    id: 5,
    sellername: 'Spigen India',
    rating: '4.5',
    ratingcount: '2.142',
    price: '65,800',
  },
];
export default function Sellers({navigation}) {
  const [toggle, setToggle] = useState(true);
  const [{theme}, dispatch] = useStateValue();
  const insets = useSafeAreaInsets();
  const [isImageShow, setIsImageShow] = useState(false);

  return (
    <Wrapper
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag">
        <TrackProductWrap>
          <ImageContainer onPress={() => setIsImageShow(!isImageShow)}>
            <ImageCard source={mobile} resizeMode={'contain'} />
          </ImageContainer>
          <DetailContainer>
            <TopSection>
              <Brand>{'Apple'.toUpperCase()}</Brand>
              <ItemTitle>Apple iPhone 12 (128GB) - Purple</ItemTitle>
            </TopSection>
          </DetailContainer>
        </TrackProductWrap>
        <SellcardWrap>
          <Subtitle>Seller</Subtitle>
          <TitleText>Appario Retail Private Ltd</TitleText>
          <RatingWrapper>
            <StyledIcon name="star-fill" size={16} />
            <RatingCount>4.5 </RatingCount>
            <RatingText>
              Rating<Text>{'   '}</Text> 6,455 Reviews
            </RatingText>
          </RatingWrapper>
          <Price>₹65,900</Price>
        </SellcardWrap>
        <OtherSellersWrapper>
          <TextHead>Offers From Other Sellers</TextHead>
          {data.map((item, index) => {
            return (
              <OtherSellerCard
                key={index}
                isActive={toggle == item.id}
                sellername={item.sellername}
                rating={item.rating}
                ratingcount={item.ratingcount}
                price={item.price}
                onPress={() => setToggle(item.id)}
              />
            );
          })}
        </OtherSellersWrapper>
      </ScrollView>
      <Footer>
        <FixedRow>
          <AmountWrap>
            <IconLeft
              name="longarrow-left"
              onPress={() => navigation.goBack()}
              size={24}
            />
            <CartTotalDetail>₹12,000</CartTotalDetail>
          </AmountWrap>
          <RecieptWrap>
            <RecieptBtn>
              <RecieptText>Apply Offer</RecieptText>
              <Icon
                name="longarrow-right"
                color={theme.TEXT_COLOR_INVERSE}
                size={20}
              />
            </RecieptBtn>
          </RecieptWrap>
        </FixedRow>
      </Footer>
      <QuikViewModal
        visible={isImageShow}
        close={() => setIsImageShow(!isImageShow)}>
        <ModalContent>
          <ProductImageModal />
        </ModalContent>
      </QuikViewModal>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  flex: 1;
  background-color: ${p => p.theme.BACKGROUND};
`;

const TrackProductWrap = styled.View`
  border-color: ${p => p.theme.ITEM_BORDER};
  border-bottom-width: 1px;
  border-top-width: 1px;
  padding-horizontal: 25px;
  padding-vertical: 19px;
  margin-top: 16px;
  flex-direction: row;
`;
const ImageContainer = styled.TouchableOpacity`
  margin-right: 12px;
  width: ${p => p.theme.sWidth * (45 * p.theme.PX_WIDTH)}px;
`;
const ImageCard = styled.Image`
  width: null;
  height: 70;
`;

const DetailContainer = styled.View`
  width: ${p => p.theme.sWidth * (281 * p.theme.PX_WIDTH)}px;
`;
const TopSection = styled.View``;

const Brand = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-SemiBold';
  color: ${p => p.theme.STRIKE_TEXT};
  margin-right: 16px;
`;

const SellcardWrap = styled.View`
  padding-vertical: 16px;
  padding-horizontal: 24px;
  background-color: ${p => p.theme.ACCENT_LIGHT};
`;
const Subtitle = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-Bold';
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
  margin-bottom: 5px;
`;
const TitleText = styled.Text`
  font-size: 20px;
  font-family: 'Poppins-Regular';
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
`;
const ItemTitle = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 14px;
  color: ${p => p.theme.TEXT_COLOR};
`;
const RatingWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  margin-bottom: 8px;
`;
const RatingCount = styled.Text`
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
  font-size: 14px;
  font-family: 'Poppins-Bold';
  margin-left: 4px;
  margin-right: 4px;
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

const Price = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 16px;
  color: ${p => p.theme.ACCENT};
`;

//Other Sellers

const OtherSellersWrapper = styled.View``;
const TextHead = styled.Text`
  margin-top: 40px;
  margin-bottom: 16px;
  font-size: 24px;
  font-family: 'Poppins-Bold';
  padding-left: 25px;
  line-height: 43px;
  color: ${p => p.theme.TEXT_COLOR};
  width: ${p => p.theme.sWidth * (250 * p.theme.PX_WIDTH)}px;
`;

//positon button

const Footer = styled.View`
  postion: fixed;
  bottom: 0;
  background-color: ${p => p.theme.ACCENT_TEXT};
`;
const FixedRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 24px;
  padding-vertical: 10px;
`;
const AmountWrap = styled.View`
  flex-direction: row;
  align-items: center;
`;
const CartTotalDetail = styled.Text`
  font-size: 18px;
  font-family: 'Poppins-Bold';
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
`;
const RecieptWrap = styled.View``;
const RecieptBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.PRIMARY};
  padding-horizontal: 20px;
  padding-vertical: 9px;
  border-radius: 12px;
`;
const RecieptText = styled.Text`
  color: ${p => p.theme.PRIMARY_TEXT};
  margin-right: 8px;
  font-family: 'Poppins';
`;
const ReceiptButton = styled(Button)``;

const IconLeft = styled(Icon)`
  font-family: 'Poppins-Bold';
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
  margin-right: 28px;
`;

//Modal
const ModalContent = styled.View`
  background-color: ${p => p.theme.BACKGROUND};
  border-radius: 10px;
  flex-direction: column;
  height: ${p => p.theme.sHeight * 0.9}px;
  padding-vertical: 60px;
`;
