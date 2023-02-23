import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {BackButtonBar, TrackProgress} from '../../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function TrackOrder({route}) {
  const insets = useSafeAreaInsets();

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
          <Title>Track Order</Title>
          <OrderInfoWrap>
            <OrderInfoItem>
              <Label>Order Id:</Label>
              <Value>123456</Value>
            </OrderInfoItem>
            <OrderInfoItem>
              <Label>Order Date:</Label>
              <Value>Thur, 03, Feb</Value>
            </OrderInfoItem>
            <OrderInfoItem>
              <Label>Total Amount:</Label>
              <Value>₹ 14,499 ( 1 item)</Value>
            </OrderInfoItem>

            <DownButton>
              <DownText>Download Invoice</DownText>
            </DownButton>
          </OrderInfoWrap>

          <TrackProductWrap>
            <ImageContainer>
              <ImageCard source={route.params.image} resizeMode={'contain'} />
            </ImageContainer>
            <DetailContainer>
              <TopSection>
                <Brand>{route.params.brand}</Brand>

                <ItemTitle>{route.params.title}</ItemTitle>
              </TopSection>
            </DetailContainer>
          </TrackProductWrap>
          <TrackIndicationWrap>
            <TrackStatuswrap>
              <TrackItemTitle>Esimated Delivery</TrackItemTitle>
              <TrackItemDate>dd-mm-yy</TrackItemDate>
            </TrackStatuswrap>
            <TrackProgress
              data={[
                {
                  title: 'Order Placed',
                  details: 'We have recieved your order.',
                  date: 'dd-mm-yy',
                  status: true,
                },
                {
                  title: 'Shipped',
                  details: 'We are shipped your product.',
                  date: 'dd-mm-yy',
                  status: true,
                },
                {
                  title: 'Delivered',
                  details: 'Your product has been delivered.',
                  date: 'dd-mm-yy',
                  status: false,
                },
              ]}
            />
          </TrackIndicationWrap>
        </PageWrapper>
      </ScrollView>
      <BackButtonBar />
    </Wrapper>
  );
}
const Wrapper = styled.View`
  flex: 1;
  position: relative;
  background-color: ${p => p.theme.BACKGROUND};
`;

const PageWrapper = styled.View`
  padding-vertical: 25px;
`;
const Title = styled.Text`
  font-size: 24px;
  font-family: 'Poppins-Bold';
  color: ${props => props.theme.TEXT_COLOR};
  padding-horizontal: 25px;
`;
const OrderInfoWrap = styled.View`
  margin-top: 16px;
  padding-horizontal: 25px;
`;
const OrderInfoItem = styled.View`
  flex-direction: row;
`;
const Label = styled.Text`
  font-family: 'Poppins';
  font-size: 14px;
  opacity: 0.8;
  color: ${p => p.theme.TEXT_COLOR};
  width: ${p => p.theme.sWidth * (97 * p.theme.PX_WIDTH)}px;
`;
const Value = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 14px;
  color: ${p => p.theme.TEXT_COLOR};
`;

const DownButton = styled.TouchableOpacity`
  background-color: ${p => p.theme.DEFAULT};
  width: ${p => p.theme.sWidth * (158 * p.theme.PX_WIDTH)}px;
  padding-vertical: 8px;
  padding-horizontal: 16px;
  border-radius: 10px;
  margin-top: 16px;
`;
const DownText = styled.Text`
  font-family: 'Poppins-SemiBold';
  text-align: center;
  color: ${p => p.theme.DEFAULT_TEXT};
  font-size: 14px;
`;

//trackitem
const TrackProductWrap = styled.View`
  border-color: ${p => p.theme.ITEM_BORDER};
  border-bottom-width: 1px;
  border-top-width: 1px;
  padding-horizontal: 25px;
  padding-vertical: 19px;
  margin-top: 16px;
  flex-direction: row;
`;
const ImageContainer = styled.View`
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

const ItemTitle = styled.Text`
  font-size: 14px;
  line-height: 24px;
  font-family: 'Poppins-SemiBold';

  color: ${p => p.theme.TEXT_COLOR};
`;

const TrackIndicationWrap = styled.View`
  margin-top: 24px;
`;
const TrackStatuswrap = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
  padding-horizontal: 25px;
`;
const TrackItemTitle = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  color: ${p => p.theme.TEXT_COLOR};
  margin-right: 16px;
`;
const TrackItemDate = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 16px;
  color: ${p => p.theme.ACCENT};
`;
