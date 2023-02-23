import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useStateValue} from '../../contextAPI/GlobelState';
import styled from 'styled-components/native';
import {Icon, ModalSelect, OrderItem, TextBoxIcon} from '../../components';
import {earphone, product, ptron, mobile} from '../../assets';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

let orderstatus = [
  {
    label: 'All',
    value: 'All',
  },
  {
    label: 'Delivered',
    value: 'Delivered',
  },
  {
    label: 'Shipped',
    value: 'Shipped',
  },
  {
    label: 'Cancelled',
    value: 'Cancelled',
  },
];
let ordertime = [
  {
    label: 'Last 30 Days',
    value: 'Last 30 Days',
  },
  {
    label: 'Last 6 Months',
    value: 'Last 6 Months',
  },
  {
    label: '2022',
    value: '2022',
  },
  {
    label: '2021',
    value: '2021',
  },
];
const orderitems = [
  {
    id: 1,
    image: earphone,
    brand: 'boAt',
    itemstatus: 'Delivered',
    title:
      'boAt Airdopes 141 TWS Earbuds with 42H Playtime, BEAST Mode, ENx Tech',
  },
  {
    id: 2,
    image: product,
    brand: 'boAt',
    itemstatus: 'Cancelled',
    title:
      'boAt Airdopes 141 TWS Earbuds with 42H Playtime, BEAST Mode, ENx Tech',
  },
  {
    id: 3,
    image: ptron,
    brand: 'boAt',
    itemstatus: 'Shipped',
    title:
      'boAt Airdopes 141 TWS Earbuds with 42H Playtime, BEAST Mode, ENx Tech',
  },
  {
    id: 4,
    image: mobile,
    brand: 'boAt',
    itemstatus: 'Shipped',
    title:
      'boAt Airdopes 141 TWS Earbuds with 42H Playtime, BEAST Mode, ENx Tech',
  },
];
export default function Orders({navigation}) {
  const [{theme}, dispatch] = useStateValue();
  const insets = useSafeAreaInsets();
  const [dropdown, setDropdown] = useState(null);
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
        <PageWrapper>
          <TopSection>
            <Title>My Orders</Title>
            <TextBoxIcon
              placeholder="Search"
              icon="search"
              width={theme.sWidth * 0.876}
            />
            <DropdownWrap>
              <ModalSelect
                title="Order Status"
                label="Order Status"
                placeholder="All"
                width={theme.sWidth * (163 * theme.PX_WIDTH)}
                data={orderstatus}
                selected={dropdown}
                onSelect={value => setDropdown(value)}
              />
              <ModalSelect
                title="Order Time"
                label="Order Time"
                placeholder="Last 30 Days"
                width={theme.sWidth * (163 * theme.PX_WIDTH)}
                data={ordertime}
                selected={dropdown}
                onSelect={value => setDropdown(value)}
              />
            </DropdownWrap>
          </TopSection>
          <OrderItemWrap>
            <OrderContent>
              {orderitems.map((items, index) => {
                return (
                  <OrderItemWrapper key={index}>
                    <OrderItem
                      image={items.image}
                      brand={items.brand}
                      itemstatus={items.itemstatus}
                      title={items.title}
                      onPress={() => navigation.navigate('trackorder', items)}
                    />
                  </OrderItemWrapper>
                );
              })}
            </OrderContent>
          </OrderItemWrap>
        </PageWrapper>
      </ScrollView>
      <Footer>
        <FixedRow>
          <IconLeft
            name="longarrow-left"
            onPress={() => navigation.goBack()}
            size={22}
          />
        </FixedRow>
      </Footer>
    </Wrapper>
  );
}
const Wrapper = styled.View`
  flex: 1;
  background-color: ${p => p.theme.BACKGROUND};
  width: 100%;
  position: relative;
`;
const PageWrapper = styled.View``;
const TopSection = styled.View`
  padding-vertical: 25px;
  padding-horizontal: 25px;
  border-color: ${p => p.theme.ITEM_BORDER};
  border-bottom-width: 1px;
`;
const Title = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 24px;
  color: ${p => p.theme.TEXT_COLOR};
  margin-bottom: 24px;
`;
//drop down

const DropdownWrap = styled.View`
  margin-top: 32px;
  flex-direction: row;
  justify-content: space-between;
`;

//Order Item

const OrderItemWrap = styled.View``;

const OrderContent = styled.View``;

const OrderItemWrapper = styled.View`
  border-color: ${p => p.theme.ITEM_BORDER};
  border-bottom-width: 1px;
`;

//Footer

const Footer = styled.View`
  postion: fixed;
  bottom: 0;
  background-color: ${p => p.theme.ACCENT_TEXT};
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  shadow-color: black;
  shadow-offset: 1px -1px;
  elevation: 10;
  z-index: 1;
`;
const FixedRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 24px;
  padding-vertical: 15px;
`;
const IconLeft = styled(Icon)`
  font-family: 'Poppins-Bold';
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
  margin-right: 28px;
`;
