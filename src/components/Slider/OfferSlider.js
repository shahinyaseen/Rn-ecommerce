import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
// import Carousel, {Pagination} from 'react-native-snap-carousel';
import Carousel from 'react-native-reanimated-carousel';
import styled from 'styled-components/native';
import {offslider} from '../../assets';
import {useStateValue} from '../../contextAPI/GlobelState';
import {Icon} from '../Icon/index';

const data = [
  {
    imgUrl: offslider,
  },
  {
    imgUrl: offslider,
  },
  {
    imgUrl: offslider,
  },
];

function OfferSlider() {
  const [{theme}] = useStateValue();
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  // let isCarousel;

  const SliderItem = ({item, index}) => {
    // console.log(index);
    return (
      <Container key={index}>
        <Image
          source={item.imgUrl}
          style={{height: '100%', width: '100%', resizeMode: 'contain'}}
        />
      </Container>
    );
  };
  return (
    <Wrapper>
      <PrevBtnWrapper>
        <PrevBtn
          onPress={() => {
            ref.current?.scrollTo({ count: -1, animated: true });
          }}
          activeOpacity={0.7}>
          <Icon name="arrow-left" size={20} color={theme.TEXT_COLOR} />
        </PrevBtn>
      </PrevBtnWrapper>
      <Carousel
        loop
        width={theme.sWidth}
        height={theme.sHeight/6}
        autoPlay={false}
        data={data}
        scrollAnimationDuration={1000}
        onSnapToItem={index => console.log("current index:", index)}
        ref={ref}
        // snapToInterval={CARD_LENGTH + (SPACING * 1.5)}
        pagingEnabled={true}
        renderItem={SliderItem}
      />
      {/* <Carousel
        layout="default"
        // ref={isCarousel}
        ref={c => {
          isCarousel = c;
        }}
        data={data}
        renderItem={SliderItem}
        sliderWidth={theme.sWidth}
        itemWidth={theme.sWidth}
        inactiveSlideShift={0}
        onSnapToItem={index => setIndex(index)}
        useScrollView={true}
      /> */}
      <NextBtnWrapper>
        <NextBtn onPress={() => ref.current?.scrollTo({count: 1, animated: true })} activeOpacity={0.7}>
          <Icon name="arrow-right" size={20} color={theme.TEXT_COLOR} />
        </NextBtn>
      </NextBtnWrapper>
    </Wrapper>
  );
}
export default OfferSlider;

const Container = styled.View`
  position: relative;
`;
const Wrapper = styled.View`
  /* margin-vertical: 30px; */
`;
const PrevBtnWrapper = styled.View``;
const PrevBtn = styled.TouchableOpacity`
  font-size: 25px;
  width: 18px;
  height: 45px;
  position: absolute;
  left: 10px;
  top: 30px;
  z-index: 1;
  background-color: ${p => p.theme.ITEM_BORDER};
  display: flex;
  justify-content: center;
`;
const NextBtn = styled.TouchableOpacity`
  font-size: 25px;
  width: 18px;
  height: 45px;
  position: absolute;
  right: 10px;
  bottom: 30px;
  z-index: 1;
  background-color: ${p => p.theme.ITEM_BORDER};
  display: flex;
  justify-content: center;
`;

const NextBtnWrapper = styled.View``;
