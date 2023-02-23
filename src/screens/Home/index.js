import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {useStateValue} from '../../contextAPI/GlobelState';
import styled from 'styled-components/native';

import {
  Banner,
  DealOffer,
  Icon,
  Menu,
  ProductOffer,
  ProductDefault,
  OfferSlider,
  ProductLimited,
  LimitedDeals,
  Header,
} from '../../components';
import {
  newarrivals,
  hotdeals,
  product,
  adimg1,
  adimg2,
  adimg3,
  adimg4,
  camera,
  offimage1,
  offimage2,
  mobile,
  serviceimag,
} from '../../assets/index';
import ProductTab from '../../components/Product/ProductTab';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

let offimage = [
  {
    id: 1,
    image: newarrivals,
  },
  {
    id: 2,
    image: hotdeals,
  },
];

let offerproduct = [
  {
    id: 1,
    image: product,
    content: 'Redmi 9 Active (Coral Green, 4GB RAM, 64GB Storage)',
    percent: '25',
    offerPrice: '1000',
    mrp: '2000',
    rating: '4.4',
    ratingcount: '29,274',
  },
  {
    id: 1,
    image: product,
    content: 'Redmi 9 Active (Coral Green, 4GB RAM, 64GB Storage)',
    percent: '25',
    offerPrice: '1000',
    mrp: '2000',
    rating: '4.4',
    ratingcount: '29,274',
  },
  {
    id: 1,
    image: product,
    content: 'Redmi 9 Active (Coral Green, 4GB RAM, 64GB Storage)',
    percent: '25',
    offerPrice: '1000',
    mrp: '2000',
    rating: '4.4',
    ratingcount: '29,274',
  },
  {
    id: 1,
    image: product,
    content: 'Redmi 9 Active (Coral Green, 4GB RAM, 64GB Storage)',
    percent: '25',
    offerPrice: '1000',
    mrp: '2000',
    rating: '4.4',
    ratingcount: '29,274',
  },
];
let arivalproduct = [
  {
    id: 1,
    image: camera,
    brand: 'samsung',
    content: 'Nikon Z50 Mirroless Camera Body with NIKKOR ',
    price: '98,000',
    mrp: '105,995',
    rating: '4.4',
    ratingcount: '48',
  },
  {
    id: 2,
    image: camera,
    brand: 'redmi',
    content: 'Redmi 9 Active (Coral Green, 4GB RAM, 64GB Storage)',
    price: '1000',
    mrp: '2000',
    rating: '4.4',
    ratingcount: '29',
  },
  {
    id: 3,
    image: camera,
    brand: 'samsung',
    content:
      'Nikon Z50 Mirroless Camera Body with NIKKOR Z DX 16-50mm f/3.5-6.3 VR & NIKKOR Z DX 50-250mm f/4.5-6.3 VR Lens',
    price: '1000',
    mrp: '2000',
    rating: '4.4',
    ratingcount: '74',
  },
  {
    id: 4,
    image: camera,
    brand: 'vivo',
    content: 'Redmi 9 Active (Coral Green, 4GB RAM, 64GB Storage)',
    price: '1000',
    mrp: '2000',
    rating: '4.4',
    ratingcount: '29,274',
  },
];

let imgads = [
  {
    image: adimg1,
  },
  {
    image: adimg2,
  },
  {
    image: adimg3,
  },
  {
    image: adimg4,
  },
];
let trenditems = [
  {
    image: mobile,
    title: 'Nokia 105',
  },
  {
    image: mobile,
    title: 'boAt Basshe...',
  },
  {
    image: mobile,
    title: 'Mi Power Bank...',
  },
  {
    image: mobile,
    title: 'FLiX 3in1 Char...',
  },
];
let items = [
  {
    id: 1,
    title: 'Feature',
    item: [
      {
        id: 1,
        image: product,
        brand: 'samsung',
        content: 'Nikon Z50 Mirroless Camera Body with NIKKOR ',
        price: '98,000',
        mrp: '105,995',
        rating: '4.4',
        ratingcount: '48',
      },
      {
        id: 2,
        image: camera,
        brand: 'redmi',
        content: 'Redmi 9 Active (Coral Green, 4GB RAM, 64GB Storage)',
        price: '1000',
        mrp: '2000',
        rating: '4.4',
        ratingcount: '29',
      },
      {
        id: 3,
        image: camera,
        brand: 'samsung',
        content:
          'Nikon Z50 Mirroless Camera Body with NIKKOR Z DX 16-50mm f/3.5-6.3 VR & NIKKOR Z DX 50-250mm f/4.5-6.3 VR Lens',
        price: '1000',
        mrp: '2000',
        rating: '4.4',
        ratingcount: '74',
      },
      {
        id: 4,
        image: camera,
        brand: 'vivo',
        content: 'Redmi 9 Active (Coral Green, 4GB RAM, 64GB Storage)',
        price: '1000',
        mrp: '2000',
        rating: '4.4',
        ratingcount: '29,274',
      },
    ],
  },
  {
    id: 2,
    title: 'Best Selling',
    item: [
      {
        id: 1,
        image: camera,
        brand: 'samsung',
        content: 'Nikon Z50 Mirroless Camera Body with NIKKOR ',
        price: '98,000',
        mrp: '105,995',
        rating: '4.4',
        ratingcount: '48',
      },
      {
        id: 2,
        image: camera,
        brand: 'redmi',
        content: 'Redmi 9 Active (Coral Green, 4GB RAM, 64GB Storage)',
        price: '1000',
        mrp: '2000',
        rating: '4.4',
        ratingcount: '29',
      },
      {
        id: 3,
        image: camera,
        brand: 'samsung',
        content:
          'Nikon Z50 Mirroless Camera Body with NIKKOR Z DX 16-50mm f/3.5-6.3 VR & NIKKOR Z DX 50-250mm f/4.5-6.3 VR Lens',
        price: '1000',
        mrp: '2000',
        rating: '4.4',
        ratingcount: '74',
      },
      {
        id: 4,
        image: camera,
        brand: 'vivo',
        content: 'Redmi 9 Active (Coral Green, 4GB RAM, 64GB Storage)',
        price: '1000',
        mrp: '2000',
        rating: '4.4',
        ratingcount: '29,274',
      },
    ],
  },
  {
    id: 3,
    title: 'Top Rated',
    item: [
      {
        id: 1,
        image: camera,
        brand: 'samsung',
        content: 'Nikon Z50 Mirroless Camera Body with NIKKOR ',
        price: '98,000',
        mrp: '105,995',
        rating: '4.4',
        ratingcount: '48',
      },
      {
        id: 2,
        image: camera,
        brand: 'redmi',
        content: 'Redmi 9 Active (Coral Green, 4GB RAM, 64GB Storage)',
        price: '1000',
        mrp: '2000',
        rating: '4.4',
        ratingcount: '29',
      },
      {
        id: 3,
        image: camera,
        brand: 'samsung',
        content:
          'Nikon Z50 Mirroless Camera Body with NIKKOR Z DX 16-50mm f/3.5-6.3 VR & NIKKOR Z DX 50-250mm f/4.5-6.3 VR Lens',
        price: '1000',
        mrp: '2000',
        rating: '4.4',
        ratingcount: '74',
      },
      {
        id: 4,
        image: camera,
        brand: 'vivo',
        content: 'Redmi 9 Active (Coral Green, 4GB RAM, 64GB Storage)',
        price: '1000',
        mrp: '2000',
        rating: '4.4',
        ratingcount: '29,274',
      },
    ],
  },
];
export default function Home({navigation}) {
  const [{theme}, dispatch] = useStateValue();
  const insets = useSafeAreaInsets();
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = index => {
    setToggleState(index);
  };

  return (
    <Wrapper
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}>
      <StatusBar backgroundColor={theme.BACKGROUND}></StatusBar>
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag">
        <MenuWrapper>
          <Menu />
        </MenuWrapper>

        <BannerSection>
          <Banner />
        </BannerSection>

        <OfferImageWrapper>
          {offimage.map((item, index) => {
            return (
              <ImageItem
                key={index}
                source={item.image}
                style={{width: '100%', height: 150, resizeMode: 'contain'}}
              />
            );
          })}
        </OfferImageWrapper>
        <Service onPress={() => navigation.navigate('service')}>
          <ServiceImage source={serviceimag} />
        </Service>
        <FeatureTabWrapper>
          <ProductTab data={items} />
        </FeatureTabWrapper>

        <OfferSlider />
        <DealWeekWrapper>
          <HeaderSection>
            <Title>Deals of The Week</Title>
            <ViewAllBtn
              onPress={() =>
                navigation.navigate('product', {name: 'Deals of The Week'})
              }>
              <ViewBtnText>View all</ViewBtnText>
              <ArrowIcon name="longarrow-right" />
            </ViewAllBtn>
          </HeaderSection>

          <ScrollProductWrapper>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}>
              {offerproduct.map((item, index) => {
                return (
                  <DealOffer
                    key={index}
                    content={item.content}
                    image={item.image}
                    percentage={item.percent}
                    offprice={item.offerPrice}
                    rprice={item.mrp}
                    onPress={() => navigation.navigate('product-single', item)}
                  />
                );
              })}
            </ScrollView>
          </ScrollProductWrapper>
        </DealWeekWrapper>
        <GridAdWrapper>
          {imgads.map((item, index) => {
            return (
              <AdsImage
                key={index}
                source={item.image}
                style={{resizeMode: 'contain'}}
              />
            );
          })}
        </GridAdWrapper>
        <LimitedDealWrapper>
          <LimitedDeals />
        </LimitedDealWrapper>
        <NewArrivalsWrapper>
          <HeaderSection>
            <Title>New Arrivals</Title>
            <ViewAllBtn
              onPress={() =>
                navigation.navigate('product', {name: 'New Arrivals'})
              }>
              <ViewBtnText>View all</ViewBtnText>
              <ArrowIcon name="longarrow-right" />
            </ViewAllBtn>
          </HeaderSection>

          <ScrollProductWrapper>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}>
              {arivalproduct.map((item, index) => {
                return (
                  <ProductDefault
                    key={index}
                    brand={item.brand}
                    content={item.content}
                    image={item.image}
                    rating={item.rating}
                    ratingcount={item.ratingcount}
                    price={item.price}
                    rprice={item.mrp}
                    onPress={() => navigation.navigate('product-single', item)}
                  />
                );
              })}
            </ScrollView>
          </ScrollProductWrapper>
        </NewArrivalsWrapper>

        <OffImageBoxWrapper>
          <TopImage source={offimage1} />
          <BottomImagWrapper>
            <ImageBox source={offimage2} />
            <ImageBox source={offimage2} />
          </BottomImagWrapper>
        </OffImageBoxWrapper>

        <TrendWrapper
          style={{
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            shadowColor: '#535353',
            shadowOffset: {height: 0, width: 0},
            elevation: 5,
            backgroundColor: 'white',
          }}>
          <TrendHeadWrap>
            <TrendTitle>On Trend</TrendTitle>
            <ViewAllBtn
              onPress={() =>
                navigation.navigate('product', {name: 'On Trend'})
              }>
              <ViewBtnText>View all</ViewBtnText>
              <ArrowIcon name="longarrow-right" />
            </ViewAllBtn>
          </TrendHeadWrap>
          <TrendBottom>
            {trenditems.map((item, index) => {
              return (
                <TrendImageItem key={index}>
                  <TrendImageBox>
                    <TrendImage source={item.image} />
                  </TrendImageBox>
                  <TitleName>{item.title}</TitleName>
                </TrendImageItem>
              );
            })}
          </TrendBottom>
        </TrendWrapper>

        <RecommendWrapper>
          <HeaderSection>
            <Title>Recommended</Title>
            <ViewAllBtn
              onPress={() =>
                navigation.navigate('product', {name: 'Recommended'})
              }>
              <ViewBtnText>View all</ViewBtnText>
              <ArrowIcon name="longarrow-right" />
            </ViewAllBtn>
          </HeaderSection>

          <ScrollProductWrapper>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}>
              {arivalproduct.map((item, index) => {
                return (
                  <ProductDefault
                    key={index}
                    brand={item.brand}
                    content={item.content}
                    image={item.image}
                    rating={item.rating}
                    ratingcount={item.ratingcount}
                    price={item.price}
                    rprice={item.mrp}
                    onPress={() => navigation.navigate('product-single', item)}
                  />
                );
              })}
            </ScrollView>
          </ScrollProductWrapper>
        </RecommendWrapper>
      </ScrollView>
    </Wrapper>
  );
}
const Wrapper = styled.View`
  flex: 1;
  background-color: ${p => p.theme.BACKGROUND};
  width: 100%;
  height: 100%;
`;

const MenuWrapper = styled.View``;
const BannerSection = styled.View``;
const OfferImageWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-vertical: 30px;
`;

const Service = styled.TouchableOpacity`
  margin-bottom: 40px;
`;
const ServiceImage = styled(Image)`
  width: ${p => p.theme.sWidth * (335 * p.theme.PX_WIDTH)}px;
  height: 185px;
  align-self: center;
`;
const ImageItem = styled(Image)`
  margin-bottom: 16px;
`;
const FeatureTabWrapper = styled.View``;

//DealOfferSection

const DealWeekWrapper = styled.View``;

const HeaderSection = styled.View`
  display: flex;
  flex-direction: row;
  allign-items: center;
  justify-content: space-between;
  background-color: ${p => p.theme.DEFAULT};
  padding-horizontal: 20px;
  padding-vertical: 12px;
`;
const Title = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
`;

const ViewAllBtn = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ViewBtnText = styled.Text`
  margin-right: 6px;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Poppins';
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
`;
const ScrollProductWrapper = styled.View`
  padding-vertical: 24px;
  margin-left: 24px;
`;

const ArrowIcon = styled(Icon)`
  font-weight: 500;
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
`;

//Tab Section
const SliderContainer = styled.View``;
const HeaderWrapper = styled.View``;
const HeadItem = styled.TouchableOpacity``;

//GridImage
const GridAdWrapper = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-vertical: 24px;
`;
const AdsImage = styled(Image)`
  display: flex;
  width: ${p => p.theme.sWidth * 0.4358}px;

  height: 156px;
  margin: 8px;
`;

//Limited Deal

const LimitedDealWrapper = styled.View`
  dispaly: flex;
  margin: 30px auto;
`;

//NewArrivals
const NewArrivalsWrapper = styled.View``;

//ImageOff

const OffImageBoxWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-vertical: 30px;
`;
const TopImage = styled(Image)`
  width: ${p => p.theme.sWidth * 0.8769}px;
  height: 180px;
`;

const BottomImagWrapper = styled.View`
  dispaly: flex;
  flex-direction: row;
  justify-content: space-between;
  width: ${p => p.theme.sWidth * 0.8769}px;
  margin-top: 16px;
`;

const ImageBox = styled(Image)`
  width: ${p => p.theme.sWidth * 0.4179}px;
  height: 85px;
`;
//TrendSection
const TrendWrapper = styled.View`
  border-radius: 16px;
  display: flex;
  justify-content: center;
  width: ${p => p.theme.sWidth * 0.8769}px;
  margin: 0 auto;
  padding: 24px;
`;

const TrendHeadWrap = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 5px;
`;

const TrendTitle = styled.Text`
  font-size: 24px;
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
  font-family: 'Poppins-Bold';
`;

const TrendBottom = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const TrendImageItem = styled.View`
  margin-bottom:20px;
`;
const TrendImageBox = styled.View`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  margin:5px;
  border-radius: 16px;
  background-color: #f3f3f6;
`;
const TrendImage = styled(Image)``;
const TitleName = styled.Text`
  font-size: 16px;
  font-family: 'Poppins';
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
`;

//Recommend
const RecommendWrapper = styled.View`
  margin-vertical: 30px;
`;
