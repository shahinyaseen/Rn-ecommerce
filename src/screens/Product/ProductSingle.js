import {View, Image, ScrollView, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
// import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useStateValue} from '../../contextAPI/GlobelState';
import styled from 'styled-components/native';
import {
  Icon,
  Button,
  WishBtnSingle,
  ActionIconBtn,
  SellerCard,
  Accordion,
  Table2Byn,
  ReviewCard,
  ModalSelect,
  UserReview,
  Header,
  ProductCompare,
  PButtonBar,
  QuikViewModal,
  ProductImageModal,
} from '../../components';
import {mobile, product} from '../../assets';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-reanimated-carousel';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

export default function ProductSingle({navigation, route}) {
  const data = [
    {
      title: 'Aenean leo',
      body: 'Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      imgUrl:
        'https://rukminim1.flixcart.com/image/832/832/l19m93k0/mobile/l/1/8/note-11-pro-5g-21091116i-redmi-original-imagcvhxubttxe7r.jpeg?q=70',
    },
    {
      title: 'In turpis',
      body: 'Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ',
      imgUrl:
        'https://rukminim1.flixcart.com/image/832/832/l1mh7rk0/mobile/h/p/g/note-11-pro-5g-2201116si-redmi-original-imagd5gc4rbmjpf4.jpeg?q=70',
    },
    {
      title: 'Lorem Ipsum',
      body: 'Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.',
      imgUrl: 'https://picsum.photos/id/12/200/300',
    },
  ];

  const [{theme}] = useStateValue();
  const CarouselCardItem = ({item, index}) => {
    return (
      <View
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        key={index}>
        <Image
          source={route.params.image}
          style={{height: 300, width: '100%', resizeMode: 'contain'}}
        />
      </View>
    );
  };
  const insets = useSafeAreaInsets();
  const [index, setIndex] = useState(0);
  const [activeColor, setActiveColor] = useState('');
  const [activeVariant, setActiveVariant] = useState('');
  const [isWish, setIsWish] = useState(false);
  const isCarousel = React.useRef(null);
  const [dropdown, setDropdown] = useState(null);
  const [isImageShow, setIsImageShow] = useState(false);
  const progressValue = useSharedValue(0);


  const PaginationItem = (props)=>{
    const { animValue, index, length } = props;
    const width = 15;
      const animStyle = useAnimatedStyle(() => {
        let inputRange = [index - 1, index, index + 1];
        let outputRange = [-width, 0, width];

        if (index === 0 && animValue?.value > length - 1) {
            inputRange = [length - 1, length, length + 1];
            outputRange = [-width, 0, width];
        }

        return {
            transform: [
                {
                    translateX: interpolate(
                        animValue?.value,
                        inputRange,
                        outputRange,
                        Extrapolate.CLAMP
                    ),
                },
            ],
        };
    }, [animValue, index, length]);
    return(
      <View
      style={{
          backgroundColor: 'gray',
          width,
          height: width/3,
          borderRadius: 20,
          overflow: 'hidden',
      }}
  >
      <Animated.View
          style={[
              {
                  borderRadius: 50,
                  backgroundColor:'#121127',
                  flex: 1,
              },
              animStyle,
          ]}
      />
  </View>
    )
  } 
  return (
    <Wrapper
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag"
      >
        <CarouselWrapper
          activeOpacity={0.6}
          onPress={() => setIsImageShow(!isImageShow)}>
          <Badge>
            <BadgeText>7%</BadgeText>
          </Badge>
          <Carousel
            mode="parallax"
            layoutCardOffset={9}
            ref={isCarousel}
            data={data}
            renderItem={CarouselCardItem}
            width={theme.sWidth}
            height={300}
            pagingEnabled={true}
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 50,
          }}
            onSnapToItem={index => setIndex(index)}
            onProgressChange={(_, absoluteProgress)=>{
              (progressValue.value = absoluteProgress)
            }}
          />
             {!!progressValue && (
                <View
                    style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            width: 100,
                            alignSelf: 'center',
                        }}>
                    {data.map((backgroundColor, index) => {
                        return (
                            <PaginationItem
                                backgroundColor={backgroundColor}
                                animValue={progressValue}
                                index={index}
                                key={index}
                            />
                        );
                    })}
                </View>
            )}
          {/* <Pagination
            dotsLength={data.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={{
              width: 22,
              height: 9,
              borderRadius: 5,
              marginHorizontal: 0,
              backgroundColor: theme.DARK,
              marginHorizontal: -6,
            }}
            inactiveDotStyle={{
              backgroundColor: theme.DARK,
              height: 14,
              width: 14,
              borderRadius: 10,
            }}
            inactiveDotOpacity={0.5}
            inactiveDotScale={0.6}
            tappableDots={true}
            containerStyle={{
              marginVertical: -20,
            }}
          /> */}
        </CarouselWrapper>
        <ProductDetails>
          <BrandWrapper>
            <Brand>{route.params.brand}</Brand>
            <Availablity>
              <AvailablityText>Not Available</AvailablityText>
            </Availablity>
          </BrandWrapper>
          <ProductName>Apple iPhone 12 (128GB) - Purple </ProductName>
          <Rating>
            <StyledIcon name="star-fill" size={18} />
            <StyledIcon name="star-fill" size={18} />
            <StyledIcon name="star-fill" size={18} />
            <RatingText>4.5</RatingText>
            <RatingCount>1,345 Rating</RatingCount>
          </Rating>
          <Pricing>
            <Discount>₹65,900</Discount>
            <Price>₹70,900</Price>
          </Pricing>
          <Pricing>
            <Save>You save:</Save>
            <SaveAmount>₹5,000 (7%)</SaveAmount>
          </Pricing>
          <ButtonWrapper>
            <Button
              isAccent
              name="Add to Cart"
              width={theme.sWidth * 0.3}
              style={{marginRight: 16}}
            />
            <WishBtnSingle
              isActive={isWish}
              onPress={() => setIsWish(!isWish)}
              style={{marginRight: 16}}
            />
            <ActionIconBtn
              icon="compare"
              accentSecondary
              style={{marginRight: 16}}
            />
            <ActionIconBtn
              icon="share"
              accentSecondary
              style={{marginRight: 16}}
            />
          </ButtonWrapper>
          <MultiWrapper>
            <VariableWrapper>
              <Variable>Color:</Variable>
              <VariableText>Purple</VariableText>
            </VariableWrapper>
            <ColorPallete>
              <ColorCircle
                color="#D73936"
                active={activeColor == '#D73936'}
                onPress={() => setActiveColor('#D73936')}
              />
              <ColorCircle
                color="#332D39"
                active={activeColor == '#332D39'}
                onPress={() => setActiveColor('#332D39')}
              />
              <ColorCircle
                color="#1F4F73"
                active={activeColor == '#1F4F73'}
                onPress={() => setActiveColor('#1F4F73')}
              />
              <ColorCircle
                color="#DCF2DD"
                active={activeColor == '#DCF2DD'}
                onPress={() => setActiveColor('#DCF2DD')}
              />
              <ColorCircle
                color="#F7F3F2"
                active={activeColor == '#F7F3F2'}
                onPress={() => setActiveColor('#F7F3F2')}
              />
            </ColorPallete>
          </MultiWrapper>
          <MultiWrapper>
            <VariableWrapper>
              <Variable>Varint:</Variable>
              <VariableText>128GB</VariableText>
            </VariableWrapper>
            <VarintWrapper>
              <Varint
                onPress={() => setActiveVariant('64GB')}
                active={activeVariant == '64GB'}>
                <VarintName>64GB</VarintName>
                <VarintPrice>₹56,999</VarintPrice>
              </Varint>
              <Varint
                onPress={() => setActiveVariant('128GB')}
                active={activeVariant == '128GB'}>
                <VarintName>128GB</VarintName>
                <VarintPrice>₹65,900</VarintPrice>
              </Varint>
              <Varint
                onPress={() => setActiveVariant('256GB')}
                active={activeVariant == '256GB'}>
                <VarintName>256GB</VarintName>
                <VarintPrice>₹71,999</VarintPrice>
              </Varint>
            </VarintWrapper>
          </MultiWrapper>
        </ProductDetails>
        <SellerCard />
        <AccordionWrapper>
          <Accordion defaultOpen title="Product Info.">
            <InfoWrapper>
              <InfoTitle>Model Name</InfoTitle>
              <InfoValue>IPhone 12 </InfoValue>
            </InfoWrapper>
            <InfoWrapper>
              <InfoTitle>Wireless Carrier</InfoTitle>
              <InfoValue>Unlocked for All Carriers</InfoValue>
            </InfoWrapper>
            <InfoWrapper>
              <InfoTitle>Brand</InfoTitle>
              <InfoValue>IPhone 12 </InfoValue>
            </InfoWrapper>
            <InfoWrapper>
              <InfoTitle>Form factor</InfoTitle>
              <InfoValue>Bar</InfoValue>
            </InfoWrapper>
            <InfoWrapper>
              <InfoTitle>Memory</InfoTitle>
              <InfoValue>128 GB</InfoValue>
            </InfoWrapper>
            <InfoWrapper>
              <InfoTitle>OS</InfoTitle>
              <InfoValue>iOS 14.1</InfoValue>
            </InfoWrapper>
            <InfoWrapper>
              <InfoTitle>Colour</InfoTitle>
              <InfoValue>Purple</InfoValue>
            </InfoWrapper>
          </Accordion>
          <Accordion defaultOpen title="Product Image Gllary">
            <Image
              source={{
                uri: 'https://thumbs.dreamstime.com/b/vector-banner-iphone-vinnytsia-ukraine-september-illustration-app-web-presentation-design-229970813.jpg',
              }}
              style={{minHeight: 150, width: '100%', resizeMode: 'contain'}}
            />
            <Image
              source={{
                uri: 'https://thumbs.dreamstime.com/b/vector-banner-iphone-vinnytsia-ukraine-september-illustration-app-web-presentation-design-229970813.jpg',
              }}
              style={{minHeight: 150, width: '100%', resizeMode: 'contain'}}
            />
          </Accordion>
          <Accordion defaultOpen title="Features & Details.">
            <Table2Byn
              data={[
                {
                  label: 'Display',
                  value:
                    '6.1-inch (15.5 cm diagonal) Super Retina XDR display with True Tone',
                },
                {
                  label: 'Capacity',
                  value: '64GB, 128GB, 256GB',
                },
                {
                  label: 'Splash, Water, and Dust Resistant',
                  value:
                    'All-glass and surgical-grade stainless steel design, water and dust resistant (rated IP68)',
                },
                {
                  label: 'Camera and Video',
                  value:
                    'Dual 12MP cameras with Portrait mode, Depth Control, Portrait Lighting, Smart HDR, and 4K Dolby Vision HDR video up to 60 fps',
                },
                {
                  label: 'Camera and Video',
                  value:
                    'Dual 12MP cameras with Portrait mode, Depth Control, Portrait Lighting, Smart HDR, and 4K Dolby Vision HDR video up to 60 fps',
                },
                {
                  label: 'Front Camera',
                  value:
                    '12MP TrueDepth front camera with Portrait mode, Depth Control, Portrait Lighting, and Smart HDR 3',
                },
                {
                  label: 'Power and Battery',
                  value:
                    'Video playback:Up to 17 hours, Video playback (streamed):Up to 11 hours, Audio playback:Up to 65 hours, 20W adapter or higher (sold separately), Fast-charge capable: Up to 50% charge in around 30 minutes with 20W adapter or higher',
                },
                {
                  label: 'In the Box',
                  value:
                    'iPhone with iOS 14, USB-C to Lightning Cable, Documentation',
                },
                {
                  label: 'Warranty',
                  value:
                    '1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase',
                },
                {
                  label: 'Height',
                  value: '5.78 inches (146.7 mm)',
                },
                {
                  label: 'Width',
                  value: '2.82 inches (71.5 mm)',
                },
                {
                  label: 'Depth',
                  value: '0.29 inch (7.4 mm)',
                },
                {
                  label: 'Weight',
                  value: '5.78 ounces (164 grams)',
                },
                {
                  label: 'Manufacturer',
                  value: 'Apple Computer',
                },
                {
                  label: 'Country of Origin',
                  value: 'India',
                },
                {
                  label: 'Item model number',
                  value: 'MJNM3HN/A',
                },
                {
                  label: 'Product Dimensions',
                  value: '16.5 x 9 x 2.8 cm; 320 Grams',
                },
              ]}
            />
          </Accordion>
          <Accordion defaultOpen title="Reviews">
            <ReviewCard count={4} review="750" rating="1,345" />
            <SelectBoxWrapper>
              <ModalSelect
                filled={true}
                title="Sort"
                placeholder="Select"
                width={theme.sWidth * 0.4}
                data={[
                  {label: 'All', value: 'All'},
                  {label: 'All2', value: 'All2'},
                  {label: 'All3', value: 'All3'},
                  {label: 'All4', value: 'All4'},
                  {label: 'All1', value: 'All1'},
                  {label: 'All5', value: 'All5'},
                  {label: 'All6', value: 'All6'},
                  {label: 'All7', value: 'All7'},
                ]}
                selected={dropdown}
                onSelect={value => setDropdown(value)}
              />
            </SelectBoxWrapper>
            <UserReview
              data={{
                name: 'Sahil wali',
                rating: '4',
                title: 'Worst battery',
                desc: 'Worst battery performance. Iphone 11 is far better den this. In 4 hour battery will come down from 100 to 15 percent. Please dont buy this product at this price.',
                likes: '12',
              }}
            />
            <UserReview
              data={{
                name: 'Sahil wali',
                rating: '4',
                title: 'Worst battery',
                desc: 'Worst battery performance. Iphone 11 is far better den this. In 4 hour battery will come down from 100 to 15 percent. Please dont buy this product at this price.',
                likes: '12',
              }}
            />
            <UserReview
              data={{
                name: 'Sahil wali',
                rating: '4',
                title: 'Worst battery',
                desc: 'Worst battery performance. Iphone 11 is far better den this. In 4 hour battery will come down from 100 to 15 percent. Please dont buy this product at this price.',
                likes: '12',
              }}
            />
          </Accordion>
        </AccordionWrapper>

        <CompareWrapper>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
            keyboardShouldPersistTaps="always"
            keyboardDismissMode="on-drag"
            horizontal={true}>
            <ProductCompare
              image={product}
              title="OnePlus 9R 5G (Carbon Black, 8GB RAM, 128GB Storage)"
              offerPrice="39,999"
              rating="4.4"
              count={11345}
            />
            <ProductCompare
              image={product}
              title="OnePlus 9R 5G (Carbon Black, 8GB RAM, 128GB Storage)"
              offerPrice="39,999"
              rating="4.4"
              count={11345}
            />
            <ProductCompare
              image={product}
              title="OnePlus 9R 5G (Carbon Black, 8GB RAM, 128GB Storage)"
              offerPrice="39,999"
              rating="4.4"
              count={11345}
            />
            <ProductCompare
              image={product}
              title="OnePlus 9R 5G (Carbon Black, 8GB RAM, 128GB Storage)"
              offerPrice="39,999"
              rating="4.4"
              count={11345}
            />
          </ScrollView>
        </CompareWrapper>
        <GotoCompareWrap onPress={() => navigation.navigate('compare')}>
          <GotoText>Compare With Similar Products</GotoText>
          <Icon name="longarrow-right" size={25} color={theme.TEXT_COLOR} />
        </GotoCompareWrap>
      </ScrollView>
      <FooterBtnInner>
        <BtnAction>
          <ButtonConatiner>
            <QuantityText>1</QuantityText>
            <Icon name="arrow-down" color={theme.PRIMARY_TEXT} size={24} />
          </ButtonConatiner>
          <ButtonLine />
          <ButtonConatiner>
            <Icon name="bag" color={theme.PRIMARY_TEXT} size={20} />
            <CartText>Add to Cart</CartText>
          </ButtonConatiner>
        </BtnAction>
      </FooterBtnInner>
      <PButtonBar />
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
  flex-grow: 1;
  background-color: ${p => p.theme.BACKGROUND};
  width: 100%;
  height: 100%;
  position: relative;
`;
const CarouselWrapper = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 50px;
`;
const ProductDetails = styled.View`
  padding-horizontal: ${p => p.theme.sWidth * 0.0615}px;
  margin: 20px 0 36px 0;
`;
const BrandWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const Brand = styled.Text`
  color: ${p => p.theme.TEXT_COLOR};
  font-family: 'Poppins-Light';
  font-size: 18px;
  opacity: 0.8;
`;
const Availablity = styled.View`
  border-radius: 15px;
  padding-horizontal: 10px;
  padding-vertical: 3px;
  margin-left: 7px;
  background-color: ${p => p.theme.DANGER_ALERT_BG};
`;
const AvailablityText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: ${p => p.theme.DANGER_ALERT_TEXT};
`;
const ProductName = styled.Text`
  font-size: 20px;
  font-family: 'Poppins-Bold';
  color: ${p => p.theme.TEXT_COLOR};
`;
const Rating = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-vertical: 10px;
`;
const RatingText = styled.Text`
  font-family: 'Poppins-Bold';
  color: ${p => p.theme.TEXT_COLOR};
  font-size: 16px;
  margin-left: 5px;
`;
const StyledIcon = styled(Icon)`
  color: ${p => p.theme.GOLD};
`;
const RatingCount = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Medium';
  opacity: 0.6;
  margin-left: 6px;
`;
const Pricing = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const Discount = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 24px;
  color: ${p => p.theme.TEXT_COLOR};
`;
const Price = styled.Text`
  color: ${p => p.theme.TEXT_COLOR};
  font-family: 'Poppins-Light';
  font-size: 18px;
  opacity: 0.8;
  margin-left: 8px;
  text-decoration-line: line-through;
  text-decoration-style: solid;
`;
const Save = styled.Text`
  color: ${p => p.theme.TEXT_COLOR};
  font-family: 'Poppins-Light';
  font-size: 14px;
`;
const SaveAmount = styled.Text`
  color: ${p => p.theme.TEXT_COLOR};
  font-family: 'Poppins-Bold';
  font-size: 14px;
  margin-left: 5px;
`;
const ButtonWrapper = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;
const MultiWrapper = styled.View`
  margin-top: 27px;
`;
const VariableWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const Variable = styled.Text`
  font-family: 'Poppins-Light';
  font-size: 16px;
  color: ${p => p.theme.TEXT_COLOR};
`;
const VariableText = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 16px;
  color: ${p => p.theme.TEXT_COLOR};
  margin-left: 8px;
`;
const ColorPallete = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 8px;
`;
const ColorCircle = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-width: ${p => (p.active ? '2px' : '1px')};
  border-color: ${p => p.theme.TEXT_COLOR};
  background-color: ${p => p.color};
  margin-right: 16px;
`;
const VarintWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 8px;
`;
const Varint = styled.Pressable`
  border-width: 2px;
  border-color: ${p => (p.active ? p.theme.TEXT_COLOR : p.theme.BACKGROUND)};
  background-color: ${p => (p.active ? p.theme.BACKGROUND : p.theme.DEFAULT)};
  border-radius: 16px;
  padding-vertical: 8px;
  padding-horizontal: 15px;
  margin-right: 10px;
`;
const VarintName = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 14px;
  color: ${p => p.theme.TEXT_COLOR};
`;
const VarintPrice = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: ${p => p.theme.TEXT_COLOR};
  margin-top: 4px;
`;
const AccordionWrapper = styled.View`
  padding-horizontal: ${p => p.theme.sWidth * 0.02051}px;
  margin-top: 32px;
`;
const InfoWrapper = styled.View`
  margin-bottom: 12px;
`;
const InfoTitle = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Medium';
  color: ${p => p.theme.TEXT_COLOR};
  opacity: 0.5;
`;
const InfoValue = styled.Text`
  font-size: 20px;
  font-family: 'Poppins-Regular';
  color: ${p => p.theme.TEXT_COLOR};
  text-decoration-line: underline;
  text-decoration-color: ${p => p.theme.ITEM_BORDER};
`;
const SelectBoxWrapper = styled.View`
  padding-top: 40px;
  margin-bottom: 20px;
`;

//Footer positon button
const QuantityText = styled.Text`
  color: ${p => p.theme.PRIMARY_TEXT};
  font-size: 18px;
  margin-right: 12px;
  font-family: 'Poppins-Bold';
`;
const CartText = styled.Text`
  color: ${p => p.theme.PRIMARY_TEXT};
  font-size: 16px;
  margin-left: 12px;
  font-family: 'Poppins-Regular';
`;

const FooterBtnInner = styled.View`
  flex-direction: row;
  justify-content: center;
`;
const BtnAction = styled.View`
  position: absolute;
  bottom: 20px;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${p => p.theme.PRIMARY};
  border-radius: 10px;
  width: ${p => p.theme.sWidth * (235 * p.theme.PX_WIDTH)}px;
  padding-vertical: 10px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  shadow-color: black;
  shadow-offset: 1px -1px;
  elevation: 9;
`;
const ButtonConatiner = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-horizontal: 14px;
`;
const ButtonLine = styled.View`
  border-color: ${p => p.theme.STRIKE_TEXT};
  border-right-width: 2px;
`;

//compare

const CompareWrapper = styled.View`
  margin: 40px 0 0;
  border-top-width: 1px;
  border-top-color: ${p => p.theme.ITEM_BORDER};
  ${'' /* background-color: ${p => p.theme.ACCENT}; */}
  padding: 0 10px;
  flex-direction: row;
  flex-wrap: wrap;
`;

const GotoCompareWrap = styled.TouchableOpacity`
  background-color: ${p => p.theme.DEFAULT};
  flex-direction: row;
  align-items: center;
  margin-bottom: 90px;
  padding-horizontal: 25px;
  justify-content: space-between;
`;
const GotoText = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 20px;
  margin-right: 10px;
  color: ${p => p.theme.TEXT_COLOR};
  padding-vertical: 10px;
  width: ${p => p.theme.sWidth * (250 * p.theme.PX_WIDTH)}px;
`;

//Badge
const Badge = styled.View`
  position: absolute;
  background-color: ${p => p.theme.RED};
  top: 20px;
  right: 30px;
  border-radius: 100px;
  z-index: 1;
`;
const BadgeText = styled.Text`
  font-family: 'Poppins-SemiBold';
  padding: 8px 11px;
  color: ${p => p.theme.RED_TEXT};
`;
//Modal
const ModalContent = styled.View`
  background-color: ${p => p.theme.BACKGROUND};
  border-radius: 10px;
  flex-direction: column;
  height: ${p => p.theme.sHeight * 0.9}px;
  padding-vertical: 60px;
`;
