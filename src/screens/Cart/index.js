import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState, useRef} from 'react';
import {useStateValue} from '../../contextAPI/GlobelState';
import styled from 'styled-components/native';
import {Button, CartItem, CheckBox, Header, Icon} from '../../components';
import {earphone, mobile, product, ptron} from '../../assets';
export default function Cart({navigation}) {
  const scrollViewRef = useRef();
  const [payNow, setPayNow] = useState(true);
  const [cashOnDelivery, setCashOnDelivery] = useState(false);
  const data = [{value: 'Pay Now'}, {value: 'Cash on Delivery'}];
  const cartitems = [
    {
      id: 1,
      image: mobile,
      brand: 'boAt',
      title:
        'boAt Airdopes 141 TWS Earbuds with 42H Playtime, BEAST Mode, ENx Tech',
      price: '1,299',
      color: 'Black',
    },
    {
      id: 2,
      image: product,
      brand: 'boAt',
      title:
        'boAt Airdopes 141 TWS Earbuds with 42H Playtime, BEAST Mode, ENx Tech',
      price: '1,299',
      color: 'Red',
    },
    {
      id: 3,
      image: ptron,
      brand: 'boAt',
      title:
        'boAt Airdopes 141 TWS Earbuds with 42H Playtime, BEAST Mode, ENx Tech',
      price: '299',
      color: 'Blue',
    },
  ];
  const [{theme}, dispatch] = useStateValue();
  const onPayNowChanged = e => {
    setPayNow(e);
    setCashOnDelivery(false);
  };
  const onCashonDeliveryChanged = e => {
    setCashOnDelivery(e);
    setPayNow(false);
  };
  const onScroll = () => {
    scrollViewRef.current.scrollToEnd({animated: true});
  };
  return (
    <Wrapper>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag"
        ref={scrollViewRef}>
        <PageWrapper>
          <AddressWrapper>
            <AddressTitleText>Delivery to</AddressTitleText>
            <AddressCard>
              <User>
                <Username>Karan Kapoor</Username>
                <Statusbutton>
                  <StatusText>Work</StatusText>
                </Statusbutton>
              </User>
              <AddressDetail>
                <AddressText>
                  5-5-102/1, 1st Floor, Anasuya, Behind Ganji Enterprises,
                  Ranigunj
                </AddressText>
              </AddressDetail>
              <PhoneWrap>
                <Phone>91876543210</Phone>
                <ChangeBtn
                  width={theme.sWidth * theme.BTN_WIDTH}
                  name="Change"
                  isAccentSecondary
                  onPress={() => navigation.navigate('address')}
                />
              </PhoneWrap>
            </AddressCard>
          </AddressWrapper>
          <CartWrapper>
            <TitleCart>Cart</TitleCart>
            <CartContent>
              {cartitems.map((items, index) => {
                return (
                  <CartItemWrapper key={index}>
                    <CartItem
                      image={items.image}
                      brand={items.brand}
                      title={items.title}
                      price={items.price}
                      color={items.color}
                    />
                  </CartItemWrapper>
                );
              })}
            </CartContent>
          </CartWrapper>
          <CheckoutWrapper>
            <TopSection>
              <TopItem>
                <ItemText>Sub Total</ItemText>
                <ItemTextValue>₹17,497</ItemTextValue>
              </TopItem>
              <TopItem>
                <ItemText>Delivery Charges</ItemText>
                <ItemTextValue>₹120</ItemTextValue>
              </TopItem>
              <TopItem>
                <ItemLeft>
                  <TagIcon name="tag" size={18} />
                  <CoupItemText>FRENZY30</CoupItemText>
                  <PercentOff>(5% OFF)</PercentOff>
                </ItemLeft>
                <ItemTextValue>- ₹880</ItemTextValue>
              </TopItem>
            </TopSection>
            <Border />
            <BottomSection>
              <BottomItem>
                <BItemText>Total</BItemText>
                <BItemTextValue>₹16,737</BItemTextValue>
              </BottomItem>
              <CheckMainWrap>
                <CheckWrap>
                  <CheckBox
                    label="Pay Now"
                    checked={payNow}
                    onChange={onPayNowChanged}
                  />
                </CheckWrap>
                <CheckWrap>
                  <CheckBox
                    label="Cash on Delivery"
                    checked={cashOnDelivery}
                    onChange={onCashonDeliveryChanged}
                  />
                </CheckWrap>
              </CheckMainWrap>

              {/* <RadioMainWrapper>
                <RadioWrap>
                  <RadioButton data={data} />
                </RadioWrap>
              </RadioMainWrapper> */}
              <CheckoutBtn>
                <CheckText>Checkout</CheckText>
                <BtnIcon name="longarrow-right" size={18} />
              </CheckoutBtn>
            </BottomSection>
          </CheckoutWrapper>
        </PageWrapper>
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
            <RecieptBtn onPress={onScroll}>
              <RecieptText>View Reciept</RecieptText>
            </RecieptBtn>
          </RecieptWrap>
        </FixedRow>
      </Footer>
    </Wrapper>
  );
}
const Wrapper = styled.View`
  flex-grow: 1;
  background-color: ${p => p.theme.BACKGROUND};
  width: 100%;
  height: 100%;
  position: relative;
`;

const PageWrapper = styled.View`
  margin-vertical: 25px;
`;

const AddressWrapper = styled.View`
  margin: 24px auto 0 auto;
  width: ${p => p.theme.sWidth * 0.8769}px;
`;
const AddressTitleText = styled.Text`
  font-size: 20px;
  font-family: 'Poppins';
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
  margin-bottom: 8px;
`;
const AddressCard = styled.View`
  background-color: ${p => p.theme.ACCENT_LIGHT};
  border-radius: 16px;
  padding: 16px;
  padding-horizontal: 25px;
`;
const User = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  align-items: center;
`;
const Username = styled.Text`
  font-family: 'Poppins';
  font-size: 18px;
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
  margin-right: 8px;
`;
const AddressDetail = styled.View`
  margin-bottom: 15px;
`;
const AddressText = styled.Text`
  font-family: 'Poppins';
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
  line-height: 25;
  font-size: 14px;
`;
const Statusbutton = styled.View`
  background-color: ${p => p.theme.ACCENT_SECONDARY};
  font-size: 12px;
  width: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  padding: 3px 5px;
`;

const StatusText = styled.Text`
  font-family: 'Poppins-SemiBold';
  color: ${p => p.theme.ACCENT_SECONDARY_TEXT};
  font-size: 12px;
`;

const PhoneWrap = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const Phone = styled.Text`
  font-family: 'Poppins';
  font-size: 14px;
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
`;

const ChangeBtn = styled(Button)``;
//CartItems
const CartWrapper = styled.View`
  margin-top: 40px;
`;
const TitleCart = styled.Text`
  font-size: 24px;
  font-family: 'Poppins-Bold';
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
  border-color: ${p => p.theme.WHITE_SMOKE};
  border-bottom-width: 1px;
  padding-horizontal: 25px;
`;

const CartContent = styled.View``;

const CartItemWrapper = styled.View`
  border-color: ${p => p.theme.WHITE_SMOKE};
  border-bottom-width: 1px;
`;

//Bottom
const CheckoutWrapper = styled.View`
  width: ${p => p.theme.sWidth * 0.8769}px;
  height: 325px;
  background-color: ${p => p.theme.WHITE_SMOKE};
  margin: 0 auto;
  margin-top: 40px;
  border-radius: 16px;
  padding: 24px;
`;

const TopSection = styled.View``;
const TopItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;
const ItemText = styled.Text`
  font-size: 14px;
  font-family: 'Poppins';
  color: ${p => p.theme.DEFAULT_TEXT};
`;
const CoupItemText = styled.Text`
  font-size: 14px;
  font-family: 'Poppins';
  color: ${p => p.theme.DEFAULT_TEXT};
  text-decoration-line: underline;
`;
const ItemTextValue = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Regular';
  color: ${p => p.theme.DEFAULT_TEXT};
`;
const ItemLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;
const TagIcon = styled(Icon)`
  margin-right: 5px;
  color: ${p => p.theme.DEFAULT_TEXT};
`;
const PercentOff = styled.Text`
  margin-left: 5px;
  color: ${p => p.theme.ACCENT};
  font-family: 'Poppins-SemiBold';
  font-size: 11px;
`;
const BottomSection = styled.View``;

const Border = styled.View`
  width: ${p => p.theme.sWidth * (294 * p.theme.PX_WIDTH)}px;
  height: 1px;
  background-color: ${p => p.theme.DEFAULT_TEXT};
  margin-vertical: 20px;
`;

const BottomItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const BItemText = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-Bold';
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
`;
const BItemTextValue = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 16px;
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
`;

//RadioButton
const RadioMainWrapper = styled.View``;

const RadioWrap = styled.View``;
const CheckMainWrap = styled.View`
  margin-top: 16px;
  padding-left: 15px;
`;
const CheckWrap = styled.View`
  margin-bottom: 16px;
`;
const CheckoutBtn = styled.TouchableOpacity`
  background-color: ${p => p.theme.ACCENT};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-vertical: 8px;
  border-radius: 12px;
  padding-horizontal: 12px;
`;

const CheckText = styled.Text`
  font-family: 'Poppins-SemiBold';
  margin-right: 8px;
  font-size: 14px;
  color: ${p => p.theme.ACCENT_TEXT};
`;

const BtnIcon = styled(Icon)`
  font-family: 'Poppins-SemiBold';
  color: ${p => p.theme.ACCENT_TEXT};
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
