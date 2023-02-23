import React, {useState} from 'react';
import styled from 'styled-components/native';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {useStateValue} from '../../contextAPI/GlobelState';
import Button from '../../components/Button/Button';
import {Icon} from '../../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

let userAddress = [
  {
    id: 1,
    name: 'Karan kapoor',
    address: '116, Orient Business Centre, Opp Suraj Plaza, Sayajigunj, Assam',
    phone: '+91 9414 194 802',
    btn: 'Home',
  },
  {
    id: 2,
    name: 'Karan kapoor',
    address:
      '5-5-102/1, 1st Floor, Anasuya, Behind Ganji Enterprises, Ranigunj',
    phone: '9876 543 210',
    btn: 'Work',
  },
  {
    id: 3,
    name: 'Karan kapoor',
    address:
      '5-5-102/1, 1st Floor, Anasuya, Behind Ganji Enterprises, Ranigunj',
    phone: '9876 543 210',
    btn: 'Office',
  },
];

function Address({navigation}) {
  const [{theme}, dispatch] = useStateValue();
  const [toggle, setToggle] = useState(true);
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
          <Title>Saved Address</Title>
          <AddressWrapper>
            {userAddress.map((item, index) => {
              return (
                <AddressCard isActive={toggle == item.id} key={index}>
                  <User onPress={() => setToggle(item.id)}>
                    <Username isActive={toggle == item.id}>
                      {item.name}
                    </Username>
                    <Statusbutton isActive={toggle == item.id}>
                      <StatusText isActive={toggle == item.id}>
                        {item.btn}
                      </StatusText>
                    </Statusbutton>
                  </User>
                  <AddressDetail onPress={() => setToggle(item.id)}>
                    <AddressText isActive={toggle == item.id}>
                      {item.address}
                    </AddressText>
                  </AddressDetail>
                  <PhoneWrap>
                    <Phone
                      isActive={toggle == item.id}
                      onPress={() => setToggle(item.id)}>
                      {item.phone}
                    </Phone>
                    <BottomActionwrap>
                      <EditBtn
                        onPress={() => navigation.navigate('newaddress')}>
                        <EditText>Edit</EditText>
                      </EditBtn>
                      <RemoveBtn>
                        <RemoveText>Remove</RemoveText>
                      </RemoveBtn>
                    </BottomActionwrap>
                  </PhoneWrap>
                </AddressCard>
              );
            })}
            <AddAddressWrapper>
              <AddAddress onPress={() => navigation.navigate('newaddress')}>
                <PlusIcon name="plus" size={18} />
                <AddText>Add Address</AddText>
              </AddAddress>
            </AddAddressWrapper>
          </AddressWrapper>
        </PageWrapper>
      </ScrollView>
      <Footer>
        <FixedRow>
          <AmountWrap>
            <IconLeft
              name="longarrow-left"
              onPress={() => navigation.goBack()}
              size={22}
            />
            <CartTotalDetail>₹12,000</CartTotalDetail>
          </AmountWrap>
          <RecieptWrap>
            <ContinueBtn onPress={() => navigation.goBack()}>
              <ContinueText>Continue</ContinueText>
              <IconRight name="longarrow-right" size={20} />
            </ContinueBtn>
          </RecieptWrap>
        </FixedRow>
      </Footer>
    </Wrapper>
  );
}

export default Address;

const Wrapper = styled.View`
  flex: 1;
  background-color: ${p => p.theme.BACKGROUND};
  position: relative;
`;

const Title = styled.Text`
  font-size: 20px;
  font-family: 'Poppins';
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
  padding-horizontal: 10px;
`;

const PageWrapper = styled.View`
  padding-vertical: 30px;
  padding-horizontal: 25px;
`;

const AddressWrapper = styled.View`
  margin: 8px auto 0 auto;
  width: ${p => p.theme.sWidth * 0.8769}px;
`;

const AddressCard = styled.View`
  background-color: ${p =>
    p.isActive ? p.theme.ACCENT : p.theme.ACCENT_LIGHT};
  border-radius: 16px;
  padding: 16px;
  padding-horizontal: 25px;
  margin-bottom: 8px;
`;
const User = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  align-items: center;
`;
const Username = styled.Text`
  font-family: 'Poppins';
  font-size: 18px;
  color: ${p => (p.isActive ? p.theme.ACCENT_TEXT : p.theme.ACCENT_LIGHT_TEXT)};
  margin-right: 8px;
`;
const AddressDetail = styled.TouchableOpacity`
  margin-bottom: 15px;
`;
const AddressText = styled.Text`
  font-family: 'Poppins';
  color: ${p =>
    p.isActive == true ? p.theme.ACCENT_TEXT : p.theme.ACCENT_LIGHT_TEXT};
  line-height: 25px;
  font-size: 14px;
`;
const Statusbutton = styled.View`
  background-color: ${p =>
    p.isActive == true ? p.theme.ACTIVE_BUTTON_FILL : p.theme.ACCENT_SECONDARY};
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
  color: ${p =>
    p.isActive ? p.theme.ACCENT_TEXT : p.theme.ACCENT_SECONDARY_TEXT};
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
  color: ${p =>
    p.isActive ? p.theme.ACCENT_TEXT : p.theme.ACCENT_SECONDARY_TEXT};
`;
const BottomActionwrap = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const EditBtn = styled.TouchableOpacity`
  padding-horizontal: 16px;
  padding-vertical: 7px;
  background-color: ${p => p.theme.ACCENT_SECONDARY};
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;
const EditText = styled.Text`
  color: ${p => p.theme.ACCENT_SECONDARY_TEXT};
  font-family: 'Poppins';
  font-size: 14px;
`;
const RemoveBtn = styled.TouchableOpacity`
  background-color: ${p => p.theme.ACCENT_SECONDARY};
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-horizontal: 16px;
  padding-vertical: 7px;
`;
const RemoveText = styled.Text`
  color: ${p => p.theme.ACCENT_SECONDARY_TEXT};
  font-family: 'Poppins';
`;

//add address
const AddAddressWrapper = styled.View`
  width: ${p => p.theme.sWidth * 0.8769}px;
  border: 1px dashed ${p => p.theme.PRIMARY};
  box-sizing: border-box;
  border-radius: 16px;
  padding: 35px;
  height: 162px;
  align-items: center;
  justify-content: center;
`;

const AddAddress = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const PlusIcon = styled(Icon)`
  color: ${p => p.theme.PRIMARY};
`;
const AddText = styled.Text`
  font-size: 16px;
  margin-left: 11px;
  color: ${p => p.theme.PRIMARY};
  font-family: 'Poppins-SemiBold';
  line-height: 24px;
`;
//fixbottom

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
const ContinueBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.PRIMARY};
  padding-horizontal: 20px;
  padding-vertical: 9px;
  border-radius: 12px;
`;
const ContinueText = styled.Text`
  color: ${p => p.theme.PRIMARY_TEXT};
  margin-right: 8px;
  font-family: 'Poppins';
`;
const IconRight = styled(Icon)`
  color: ${p => p.theme.PRIMARY_TEXT};
`;
const IconLeft = styled(Icon)`
  font-family: 'Poppins-Bold';
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
  margin-right: 28px;
`;
