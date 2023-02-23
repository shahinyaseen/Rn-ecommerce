import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {board, doctorimg, whatsapp, mobileboard, image1} from '../../assets';
import {
  Header,
  Button,
  Icon,
  ButtonIcon,
  BackButtonBar,
} from '../../components';
import {useStateValue} from '../../contextAPI/GlobelState';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function Service() {
  const [{theme}, dispatch] = useStateValue();
  const insets = useSafeAreaInsets();

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
        keyboardDismissMode="on-drag">
        <ChatWraper>
          <DoctorImage source={doctorimg} />
          <Content>
            <Flexrow>
              <WhatsAppImage source={whatsapp} />
              <Number>+9876 54 32 10</Number>
            </Flexrow>
            <ChatContent>
              <ChatTitleText>Get a free advice</ChatTitleText>
              <ChatDescriptionText>
                You can chat with our technician, and clear any questions you
                have for free of cost.
              </ChatDescriptionText>
            </ChatContent>
            <Button
              isAccent
              name="Say hello."
              width={theme.sWidth * theme.BTN_WIDTH}
              isRound
            />
          </Content>

          <CustomerDescribeWrap>
            <BackImage source={board} resizeMode="cover">
              <View style={styles.overlay} />
              <PosContent>
                <CTitle>Know why customers choose us over others ?</CTitle>
                <ScrollDownWrap>
                  <SdText>Scroll Down</SdText>
                  <DownArrow
                    name="longarrow-down"
                    color={theme.DARK_TEXT}
                    size={17}
                  />
                </ScrollDownWrap>
              </PosContent>
            </BackImage>
            <Describe>
              <DescribeItem>
                <DescribeItemTitle>Quisque sed sollicitudin.</DescribeItemTitle>
                <DescribeItemText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque mollis diam auctor cursus tortor. Vestibulum non
                  sed posuere aliquet integer nunc egestas. Tellus turpis erat
                  viverra ut laoreet sagittis et nulla eget. Mauris lectus amet,
                  ultrices diam purus sed cursus iaculis. Eget enim.
                </DescribeItemText>
              </DescribeItem>
              <DescribeItem>
                <DescribeItemTitle>Dolor cursus nulla.</DescribeItemTitle>
                <DescribeItemText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                  lorem interdum elit quis. Amet, eu et, facilisis imperdiet
                  pharetra nec sit eu. Aliquam nisl, amet lectus risus,
                  facilisis. Odio tellus egestas duis posuere.{'  '} Sagittis
                  mattis aliquam id feugiat sed viverra. Etiam.
                </DescribeItemText>
              </DescribeItem>
            </Describe>
          </CustomerDescribeWrap>

          <Different>
            <DiffTitle>Why we different from Others.</DiffTitle>
            <DiffItem>
              <Bullet />
              <DiffText>Tristique ornare in in scelerisque sagittis.</DiffText>
            </DiffItem>
            <DiffItem>
              <Bullet />
              <DiffText>
                Et sed sed est turpis gravida pretium sodales.
              </DiffText>
            </DiffItem>
            <DiffItem>
              <Bullet />
              <DiffText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                lorem interdum elit quis.
              </DiffText>
            </DiffItem>
            <DiffItem>
              <Bullet />
              <DiffText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                lorem interdum elit quis.
              </DiffText>
            </DiffItem>
          </Different>
          <DiffImage source={mobileboard} resizeMode="cover" />
          <OurServices>
            <ServiceTitle>Some of our Services</ServiceTitle>
            <ServiceItemWrap>
              <ServiceItem>
                <ServiceBackImage source={image1} resizeMode="cover">
                  <LinearGradient
                    colors={['#00000000', '#000000']}
                    style={{height: '100%', width: '100%'}}>
                    <PosContent>
                      <ItemText>Tellus fermentum.</ItemText>
                    </PosContent>
                  </LinearGradient>
                </ServiceBackImage>
              </ServiceItem>
              <ServiceItem>
                <ServiceBackImage source={board} resizeMode="cover">
                  <LinearGradient
                    colors={['#00000000', '#000000']}
                    style={{height: '100%', width: '100%'}}>
                    <PosContent>
                      <ItemText>Tellus fermentum.</ItemText>
                    </PosContent>
                  </LinearGradient>
                </ServiceBackImage>
              </ServiceItem>
            </ServiceItemWrap>
            <Loadmore
              name="Load More"
              width={theme.sWidth * theme.BTN_WIDTH}
              icon="longarrow-down"
            />
          </OurServices>
        </ChatWraper>
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
const ChatWraper = styled.View`
  padding-horizontal: 24px;
`;

const DoctorImage = styled(Image)`
  align-self: center;
`;

const Content = styled.View`
  background-color: ${p => p.theme.DEFAULT};
  width: ${p => p.theme.sWidth * 0.8769}px;
  align-self: center;
  padding-vertical: 24px;
  padding-horizontal: 32px;
`;
const Flexrow = styled.View`
  flex-direction: row;
  align-items: center;
`;
const WhatsAppImage = styled(Image)`
  margin-right: 16px;
  width: ${p => p.theme.sWidth * 0.169}px;
  height: 71px;
`;
const Number = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 24px;
  color: ${p => p.theme.DEFAULT_TEXT};
`;
const ChatContent = styled.View`
  margin-top: 32px;
  margin-bottom: 32px;
`;
const ChatTitleText = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 24px;
  color: ${p => p.theme.DEFAULT_TEXT};
`;
const ChatDescriptionText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 18px;
  color: ${p => p.theme.DEFAULT_TEXT};
  line-height: 35px;
`;
//seaction two
const CustomerDescribeWrap = styled.View`
  margin-top: 40px;
  margin-bottom: 40px;
`;
const CTitle = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-Bold';
  width: ${p => p.theme.sWidth * 0.682}px;
  color: ${p => p.theme.DARK_TEXT};
  margin-bottom: 29px;
`;
const BackImage = styled(ImageBackground)`
  width: ${p => p.theme.sWidth * 0.8769}px;
  align-self: center;
  height: 336px;
  padding-horizontal: 24px;
`;
const ScrollDownWrap = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SdText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 13px;
  color: ${p => p.theme.DARK_TEXT};
  margin-right: 8px;
`;
const DownArrow = styled(Icon)``;
const PosContent = styled.View`
  position: absolute;
  bottom: 17px;
  left: 22px;
`;
const Describe = styled.View`
  margin-top: 40px;
`;
const DescribeItem = styled.View`
  margin-bottom: 30px;
`;
const DescribeItemTitle = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 24px;
  color: ${p => p.theme.TEXT_COLOR};
`;
const DescribeItemText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 18px;
  line-height: 30px;
  color: ${p => p.theme.TEXT_COLOR};
  margin-top: 16px;
`;

//seaction three

const Different = styled.View`
  background-color: ${p => p.theme.DEFAULT};
  padding-horizontal: 40px;
  padding-vertical: 32px;
  width: ${p => p.theme.sWidth * 0.8769}px;
`;
const DiffTitle = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 32px;
  color: ${p => p.theme.DEFAULT_TEXT};
  margin-bottom: 8px;
`;

const DiffItem = styled.View`
  flex-direction: row;
  margin-bottom: 21px;
  width: ${p => p.theme.sWidth * 0.6307}px;
  margin-left: 10px;
`;

const Bullet = styled.View`
  border-width: 5px;
  border-radius: 50px;
  height: 8px;
  width: 8px;
  background-color: #000;
  margin-right: 16px;
  margin-top: 8px;
`;
const DiffText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 20px;
  color: ${p => p.theme.DEFAULT_TEXT};
  line-height: 35px;
`;
const DiffImage = styled(Image)`
  width: ${p => p.theme.sWidth * 0.8769}px;
  height: 358px;
`;
//seaction Fourth
const OurServices = styled.View`
  margin-top: 50px;
`;
const ServiceTitle = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 32px;
  color: ${p => p.theme.TEXT_COLOR};
  margin-bottom: 18px;
`;
const ServiceItemWrap = styled.View``;
const ServiceItem = styled.View`
  margin-bottom: 32px;
`;
const ItemText = styled.Text`
  font-size: 20px;
  font-family: 'Poppins-Regular';
  width: ${p => p.theme.sWidth * 0.682}px;
  color: ${p => p.theme.DARK_TEXT};
`;
const ServiceBackImage = styled(ImageBackground)`
  width: ${p => p.theme.sWidth * 0.8769}px;
  align-self: center;
  height: 452.65px;
`;
const Loadmore = styled(ButtonIcon)`
  align-self: center;
  color: ${p => p.theme.TEXT_COLOR};
`;
const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
    opacity: 0.5,
  },
});
