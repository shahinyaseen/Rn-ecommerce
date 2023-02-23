import React, {useState, useRef} from 'react';
import {View, StyleSheet, Dimensions, Image,Text} from 'react-native';
// import Carousel from 'react-native-snap-carousel';
import styled from 'styled-components/native';
import {useStateValue} from '../../contextAPI/GlobelState';
import {Banner1} from '../../assets/index';
import Carousel from 'react-native-reanimated-carousel';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
const SRC_WIDTH = Dimensions.get("window").width;
const CARD_LENGTH = SRC_WIDTH * 0.8;
const SPACING = SRC_WIDTH * 0.02;
const SIDECARD_LENGTH = (SRC_WIDTH * 0.18) / 2;
const data = [
  {
    imgUrl: Banner1,
  },
  {
    imgUrl: Banner1,
  },
  {
    imgUrl: Banner1,
  },
  {
    imgUrl: Banner1,
  },
];

function Banner() {
  const [{theme}] = useStateValue();
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  const width = Dimensions.get('window').width;
  const progressValue = useSharedValue(0);
  const BannerItem = ({item, index}) => {
    return (
      <Container key={index}>
        <Image
          source={item.imgUrl}
          style={{height: 130, width: '100%', resizeMode: 'contain'}}
        />
      </Container>
    );
  };
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
    <Wrapper>
       <Carousel
            loop
            mode="parallax"
            width={SRC_WIDTH}
            height={SRC_WIDTH / 3}
            autoPlay={true}
            data={data}
            scrollAnimationDuration={1000}
            // onSnapToItem={index => setIndex(index)}
            // snapToInterval={CARD_LENGTH + (SPACING * 1.5)}
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 50,
            }}
            onProgressChange={(_, absoluteProgress)=>{
              (progressValue.value = absoluteProgress)
            }}
            renderItem={BannerItem}
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
                                // length={colors.length}
                            />
                        );
                    })}
                </View>
            )}
    </Wrapper>

  );
}

export default Banner;

const Container = styled.View``;
const Wrapper = styled.View``;
