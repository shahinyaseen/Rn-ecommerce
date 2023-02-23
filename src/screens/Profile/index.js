import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useStateValue} from '../../contextAPI/GlobelState';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  Accordion,
  ButtonIcon,
  Icon,
  TextBox,
  TextBoxBtn,
} from '../../components';

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
export default function Profile({navigation}) {
  const [{theme}, dispatch] = useStateValue();
  const insets = useSafeAreaInsets();
  const [toggle, setToggle] = useState(true);

  return (
    <Wrapper
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}>
      <StatusBar backgroundColor={theme.PRIMARY} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag">
        <PageWrapper>
          <UserWrapper>
            <ProfileIcon name="profile" size={35} />
            <UserDetail>
              <NameText>Karan kapoor</NameText>
              <PhoneText>9414 194 802</PhoneText>
              <MailText>karan@email.com</MailText>
            </UserDetail>
          </UserWrapper>
          <BottomWrapper>
            <ActionBtnWrap>
              <OrderBtn
                isDefault
                name="My Orders"
                width={theme.sWidth * (163 * theme.PX_WIDTH)}
                icon="orders"
                onPress={() => navigation.navigate('orders')}
              />
              <WishBtn
                isDefault
                name="My Wishlist"
                width={theme.sWidth * (163 * theme.PX_WIDTH)}
                icon="wishlist"
                onPress={() => navigation.navigate('wishlist')}
              />
            </ActionBtnWrap>
            <AccordionWrap>
              <Accordion title="Account Setting">
                <TextBox
                  label="Name"
                  placeholder="Enter here"
                  width={theme.sWidth * 0.8}
                />
                <FormGroup>
                  <TextBoxBtn
                    label="E-mail"
                    placeholder="Enter here"
                    width={theme.sWidth * 0.8}
                    btnName="Update"
                    btnIsAccentSecondary
                  />
                </FormGroup>
                <FormGroup>
                  <TextBoxBtn
                    label="Mobile"
                    placeholder="Enter here"
                    width={theme.sWidth * 0.8}
                    btnName="Get OTP"
                    btnIsAccentSecondary
                  />
                </FormGroup>
                <SaveBtn>
                  <SaveBtnText>Save</SaveBtnText>
                </SaveBtn>
              </Accordion>
              <Accordion title="Change Password">
                <TextBox
                  label="Old Password"
                  placeholder="Enter here"
                  width={theme.sWidth * 0.8}
                />
                <FormGroup>
                  <TextBox
                    label="New Password"
                    placeholder="Enter here"
                    width={theme.sWidth * 0.8}
                  />
                </FormGroup>
                <FormGroup>
                  <TextBox
                    label="Re-enter Password"
                    placeholder="Enter here"
                    width={theme.sWidth * 0.8}
                  />
                </FormGroup>
                <FooterBtnWrap>
                  <FooterBtn>
                    <CancelBtnText>Cancel</CancelBtnText>
                  </FooterBtn>
                  <FooterBtnSave>
                    <SaveBtnText>Save</SaveBtnText>
                  </FooterBtnSave>
                </FooterBtnWrap>
              </Accordion>
              <Accordion title="Add Address">
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
                    <AddAddress
                      onPress={() => navigation.navigate('newaddress')}>
                      <PlusIcon name="plus" size={18} />
                      <AddText>Add Address</AddText>
                    </AddAddress>
                  </AddAddressWrapper>
                </AddressWrapper>
              </Accordion>
              <Accordion title="Deativate Account">
                <FormGroup>
                  <TextBoxBtn
                    label="Mobile"
                    placeholder="Enter here"
                    width={theme.sWidth * 0.8}
                    btnName="Get OTP"
                    btnIsAccentSecondary
                  />
                </FormGroup>
                <EditWrap>
                  <TextBtnedit>
                    <TexBtnText>edit</TexBtnText>
                  </TextBtnedit>
                  <TextBtn>
                    <TexBtnText>resend</TexBtnText>
                  </TextBtn>
                </EditWrap>
                <FormGroup>
                  <TextBox
                    label="OTP"
                    placeholder="Enter here"
                    width={theme.sWidth * 0.8}
                  />
                </FormGroup>
                <SaveBtn>
                  <SaveBtnText>Deactivate</SaveBtnText>
                </SaveBtn>
              </Accordion>
            </AccordionWrap>
          </BottomWrapper>
        </PageWrapper>
      </ScrollView>
    </Wrapper>
  );
}
const Wrapper = styled.View`
  flex-grow: 1;
  background-color: ${p => p.theme.BACKGROUND};
  width: 100%;
`;

const PageWrapper = styled.View``;
const UserWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${p => p.theme.PRIMARY};
  height: 152px;
  padding-horizontal: 24px;
`;
const ProfileIcon = styled(Icon)`
  margin-right: 24px;
  color: ${p => p.theme.PRIMARY_TEXT};
`;

const UserDetail = styled.View``;

const NameText = styled.Text`
  font-size: 20px;
  font-family: 'Poppins-Bold';
  color: ${p => p.theme.PRIMARY_TEXT};
`;
const PhoneText = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-Regular';
  color: ${p => p.theme.PRIMARY_TEXT};
`;
const MailText = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-Regular';

  color: ${p => p.theme.PRIMARY_TEXT};
`;

//BottomWrapper

const BottomWrapper = styled.View`
  padding-horizontal: 25px;
  padding-vertical: 25px;
`;
const ActionBtnWrap = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const OrderBtn = styled(ButtonIcon)`
  background-color: ${p => p.theme.DEFAULT};
  color: ${p => p.theme.DEFAULT_TEXT};
`;
const WishBtn = styled(ButtonIcon)`
  background-color: ${p => p.theme.DEFAULT};
  color: ${p => p.theme.DEFAULT_TEXT};
`;

//AccordionWrap

const AccordionWrap = styled.View`
  margin-top: 40px;
  margin-bottom: 40px;
`;

const FormGroup = styled.View`
  margin-top: 16px;
`;

const SaveBtn = styled.TouchableOpacity`
  background-color: ${p => p.theme.ACCENT};
  padding-vertical: 13px;
  border-radius: 12px;
  margin-top: 26px;
`;
const SaveBtnText = styled.Text`
  text-align: center;
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: ${p => p.theme.ACCENT_TEXT};
`;
//Password
const FooterBtnWrap = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${p => p.theme.sWidth * 0.8};
  margin-top: 16px;
`;
const FooterBtn = styled.TouchableOpacity`
  width: ${p => p.theme.sWidth * (148 * p.theme.PX_WIDTH)}px;
  background-color: ${p => p.theme.ACCENT_SECONDARY};
  border-radius: 12px;
  padding-vertical: 8px;
`;
const FooterBtnSave = styled.TouchableOpacity`
  width: ${p => p.theme.sWidth * (148 * p.theme.PX_WIDTH)}px;
  background-color: ${p => p.theme.ACCENT};
  border-radius: 12px;
  padding-vertical: 8px;
`;

const CancelBtnText = styled.Text`
  color: ${p => p.theme.ACCENT_SECONDARY_TEXT};
  text-align: center;
  font-size: 14px;
  font-family: 'Poppins-Regular';
`;

//Add Address

const AddressWrapper = styled.View`
  margin: 8px auto 0 auto;
  width: ${p => p.theme.sWidth * 0.8}px;
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
  width: ${p => p.theme.sWidth * 0.8}px;
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

const EditWrap = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 10px;
`;
const TextBtn = styled.TouchableOpacity``;
const TexBtnText = styled.Text`
  color: ${p => p.theme.TEXT_COLOR};
  font-size: 14px;
  font-family: 'Poppins-Regular';
`;

const TextBtnedit = styled.TouchableOpacity`
  margin-right: 18px;
`;
