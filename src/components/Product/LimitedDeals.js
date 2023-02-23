import React, {useState, useEffect} from 'react';
import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {product, ptron} from '../../assets';
import CountDownTimer from '../Counter/CountDownTimer';
import ProductLimited from './ProductLimited';

let items = [
  {
    id: 1,
    image: ptron,
    brand: 'Mi 360° Home Security Camera ..',
    offerPrice: '999',
    mrp: '2000',
  },
  {
    id: 2,
    image: product,
    brand: 'pTron Bassbuds Duo',
    offerPrice: '1200',
    mrp: '2000',
  },
  {
    id: 3,
    image: ptron,
    brand: ' AI Powered Motion Detection...',
    offerPrice: '899',
    mrp: '2000',
  },
  {
    id: 4,
    image: ptron,
    brand: ' AI Powered Motion Detection...',
    percent: '45',
    offerPrice: '1999',
    mrp: '2500',
  },
  {
    id: 5,
    image: ptron,
    brand: ' pTron Bassbuds Duo',
    offerPrice: '2000',
    mrp: '3200',
  },
];
function LimitedDeals() {
  const [select, setSelected] = useState(items[1]);
  const [isActive, setIsActive] = useState(true);
  const [timerHour, setTimeHour] = useState();
  const [timerMinute, setTimeMinute] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let intervel;
  const startTimer = () => {
    const CountDownDate = new Date('Nov 19,2022').getTime();
    intervel = setInterval(() => {
      const now = new Date().getTime();
      const distance = CountDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hour = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60),
      );
      const minute = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        //stop timer

        clearInterval(intervel.current);
      } else {
        //update timer
        setTimeHour(hour);
        setTimeMinute(minute);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
    // navigation.navigate('login');
  }, []);
  return (
    <Wrapper>
      <TopContent>
        {select && (
          <Pcard>
            <CardTitle>Limited Deals</CardTitle>
            <CountDownContainer>
              <CountTitle>
                Ends in
                <CountDownTimer
                  timerHour={timerHour}
                  timerMinutes={timerMinute}
                  timerSeconds={timerSeconds}
                />
              </CountTitle>
            </CountDownContainer>
            <PcardImageContainer>
              <PcardImage
                source={select.image && select.image}
                alt="image"
                resizeMode="cover"
              />
            </PcardImageContainer>
            <PcardInfo>
              <PcardOfferPrice>₹ {select.offerPrice}</PcardOfferPrice>
              <PcardMrp>₹ {select.mrp}</PcardMrp>
            </PcardInfo>
            <PcardBrand>{select.brand}</PcardBrand>
          </Pcard>
        )}
      </TopContent>
      <BottomImageItem>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {items.map((itemdata, index) => {
            return (
              <ItemProduct
                key={index}
                onPress={() => setSelected(itemdata)}
                isActive={select === itemdata}>
                <ProductImage
                  source={itemdata.image}
                  style={{width: '100%', height: 160, resizeMode: 'contain'}}
                />
              </ItemProduct>
            );
          })}
        </ScrollView>
      </BottomImageItem>
    </Wrapper>
  );
}

export default LimitedDeals;

const Wrapper = styled.View``;
const TopContent = styled.View`
  display: flex;
  margin: 0 auto;
`;
const BottomImageItem = styled.View`
  padding-left: 25px;
  margin-vertical: 16px;
`;
const ItemProduct = styled.TouchableOpacity`
  width: 75px;
  height: 74px;
  border-radius: 16px;
  padding: 16px;
  background-color: ${p => (p.isActive ? p.theme.GOLD : p.theme.SELECT_BG)};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  border: ${p => (p.isActive ? '0' : '1px')} solid #000;
`;
const ProductImage = styled(Image)``;

//Topstyle

const CardTitle = styled.Text`
  font-size: 32px;
  font-family: 'Poppins-Bold';
  color: ${p => p.theme.GOLD_TEXT};
`;
const CountDownContainer = styled.View``;
const CountTitle = styled.Text`
  color: ${p => p.theme.GOLD_TEXT};
  font-family: 'Poppins-SemiBold';
  font-size: 14px;
  align-items: center;
  
`;
const Pcard = styled.View`
  width: ${p => p.theme.sWidth * 0.8769}px;
  height: 480px;
  background-color: ${p => p.theme.GOLD};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const PcardImage = styled(Image)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PcardInfo = styled.View`
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const PcardBrand = styled.Text`
  font-size: 20px;
  color: ${p => p.theme.GOLD_TEXT};
`;

const PcardMrp = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 18px;
  color: ${p => p.theme.GOLD_TEXT};
  text-decoration-line: line-through;
`;

const PcardOfferPrice = styled.Text`
  color: ${p => p.theme.GOLD_TEXT};
  font-size: 32px;
  font-family: 'Poppins-Bold';
  margin: 0 23px 0 0;
`;

const PcardImageContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${p => p.theme.sWidth * 0.4256}px;
  height: 235px;
  margin: 0 auto;
  padding: 27px 0 31px 0;
`;
