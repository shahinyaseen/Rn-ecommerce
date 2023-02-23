import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Icon, TextBox, Button, TextBoxBtn} from '../../components';
import {useStateValue} from '../../contextAPI/GlobelState';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

let notificationData = [
  {
    id: 1,
    title: 'ORDER PLACED',
    content:
      'Oneplus Bullets Wireless Z Bass Edition Bluetooth in Ear Earphones with mic (Black)',
    date: '22 JAN 2022',
  },
  {
    id: 2,
    title: 'ORDER CANCELLED',
    content:
      'Mi Power Bank 3i 20000mAh | 18W Fast PD Charging | Input- Type C and Micro USB| Triple Output | Sandstone Black',
    date: '22 JAN 2022',
  },
  {
    id: 3,
    title: 'DELIVERED',
    content: 'Apple iPhone 13 Pro (512GB) - Sierra Blue',
    date: '22 JAN 2022',
  },
];
export default function Notification({navigation}) {
  const insets = useSafeAreaInsets();
  const [{theme}] = useStateValue();
  const [toggle, setToggle] = useState(1);

  return (
    <Wrapper>
      <StatusBar animated={true} backgroundColor={theme.BACKGROUND} />
      <Inner
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        }}>
        <Header>
          <Title>Notifications</Title>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Icon name="close" size={22} color={theme.TEXT_COLOR} />
          </TouchableOpacity>
        </Header>
        <NotifiWrapper>
          {notificationData.map((item, index) => {
            return (
              <ContentWrapper key={index} isActive={toggle == item.id}>
                <Flexrow>
                  <Status>{item.title.toUpperCase()}</Status>
                  <Date>{item.date}</Date>
                </Flexrow>
                <Detail isActive={toggle == item.id}>{item.content}</Detail>
              </ContentWrapper>
            );
          })}
        </NotifiWrapper>
      </Inner>
    </Wrapper>
  );
}
const Wrapper = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`;
const Inner = styled.View`
  height: 100%;
  /* width: 90%; */
  margin-left: 8%;
  background-color: ${p => p.theme.BACKGROUND};
`;
const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding-horizontal: ${p => p.theme.sWidth * (24 * p.theme.PX_WIDTH)}px;
`;
const Title = styled.Text`
  color: ${props => props.theme.TEXT_COLOR};
  font-size: 20px;
  font-family: 'Poppins-Bold';
`;
//content
const NotifiWrapper = styled.View`
  margin-top: 33px;
`;

const ContentWrapper = styled.View`
  border-width: 1px;
  border-color: ${p => p.theme.ITEM_BORDER};
  padding-horizontal: ${p => p.theme.sWidth * (24 * p.theme.PX_WIDTH)}px;
  padding-vertical: ${p => p.theme.sWidth * (16 * p.theme.PX_WIDTH)}px;
  background-color: ${p =>
    p.isActive ? p.theme.ACCENT_LIGHT : p.theme.BACKGROUND};
`;
const Flexrow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Status = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-SemiBold';
  color: ${p => p.theme.ACCENT};
  letter-spacing: 0.8px;
`;
const Date = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-SemiBold';
  opacity: 0.5;
  color: ${p => p.theme.TEXT_COLOR};
  letter-spacing: 0.8px;
`;
const Detail = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 14px;
  line-height: 24px;
  opacity: ${p => (p.isActive ? 1 : 0.5)};
  color: ${p => (p.isActive ? p.theme.ACCENT_LIGHT_TEXT : p.theme.TEXT_COLOR)};
`;
