import React, {useState} from 'react';
import styled from 'styled-components/native';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {useStateValue} from '../../contextAPI/GlobelState';
import Button from '../../components/Button/Button';
import {Icon, TextBox} from '../../components';
import ModalSelect from '../../components/Input/ModalSelect';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

let statedata = [
  {
    value: 'AN',
    label: 'Andaman and Nicobar Islands',
  },
  {
    value: 'AP',
    label: 'Andhra Pradesh',
  },
  {
    value: 'AR',
    label: 'Arunachal Pradesh',
  },
  {
    value: 'AS',
    label: 'Assam',
  },
  {
    value: 'BR',
    label: 'Bihar',
  },
  {
    value: 'CG',
    label: 'Chandigarh',
  },
  {
    value: 'CH',
    label: 'Chhattisgarh',
  },
  {
    value: 'DH',
    label: 'Dadra and Nagar Haveli',
  },
  {
    value: 'DD',
    label: 'Daman and Diu',
  },
  {
    value: 'DL',
    label: 'Delhi',
  },
  {
    value: 'GA',
    label: 'Goa',
  },
  {
    value: 'GJ',
    label: 'Gujarat',
  },
  {
    value: 'HR',
    label: 'Haryana',
  },
  {
    value: 'HP',
    label: 'Himachal Pradesh',
  },
  {
    value: 'JK',
    label: 'Jammu and Kashmir',
  },
  {
    value: 'JH',
    label: 'Jharkhand',
  },
  {
    value: 'KA',
    label: 'Karnataka',
  },
  {
    value: 'KL',
    label: 'Kerala',
  },
  {
    value: 'LD',
    label: 'Lakshadweep',
  },
  {
    value: 'MP',
    label: 'Madhya Pradesh',
  },
  {
    value: 'MH',
    label: 'Maharashtra',
  },
  {
    value: 'MN',
    label: 'Manipur',
  },
  {
    value: 'ML',
    label: 'Meghalaya',
  },
  {
    value: 'MZ',
    label: 'Mizoram',
  },
  {
    value: 'NL',
    label: 'Nagaland',
  },
  {
    value: 'OR',
    label: 'Odisha',
  },
  {
    value: 'PY',
    label: 'Puducherry',
  },
  {
    value: 'PB',
    label: 'Punjab',
  },
  {
    value: 'RJ',
    label: 'Rajasthan',
  },
  {
    value: 'SK',
    label: 'Sikkim',
  },
  {
    value: 'TN',
    label: 'Tamil Nadu',
  },
  {
    value: 'TS',
    label: 'Telangana',
  },
  {
    value: 'TR',
    label: 'Tripura',
  },
  {
    value: 'UP',
    label: 'Uttar Pradesh',
  },
  {
    value: 'UK',
    label: 'Uttarakhand',
  },
  {
    value: 'WB',
    label: 'West Bengal',
  },
];
let addresstype = [
  {
    label: 'Home',
    value: 'Home',
  },
  {
    label: 'Work',
    value: 'Work',
  },
  {
    label: 'Other',
    value: 'Other',
  },
];
function NewAddress({navigation, route}) {
  const [{theme}, dispatch] = useStateValue();
  const insets = useSafeAreaInsets();
  const [dropdown, setDropdown] = useState(null);
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
          <NameInput
            label="Name"
            placeholder="Enter here"
            width={theme.sWidth * 0.9}
          />
          <MobileWrap>
            <MobileInput
              label="Mobile"
              placeholder="Enter here"
              width={theme.sWidth * 0.43}
            />
            <TextBox
              label="Pincode"
              placeholder="Enter here"
              width={theme.sWidth * 0.43}
            />
          </MobileWrap>
          <TextBox
            label="Locality"
            placeholder="Enter here"
            width={theme.sWidth * 0.9}
          />
          <FormGroup>
            <TextBox
              label="Address"
              placeholder="Enter here"
              width={theme.sWidth * 0.9}
              multiline
              numberOfLines={5}
            />
          </FormGroup>
          <FormGroup>
            <TextBox
              label="City/ District/ Town"
              placeholder="Enter here"
              width={theme.sWidth * 0.9}
            />
          </FormGroup>
          <FormGroup>
            <ModalSelect
              title="State"
              label="State"
              placeholder="Select"
              width={theme.sWidth * 0.9}
              data={statedata}
              selected={dropdown}
              onSelect={value => setDropdown(value)}
            />
          </FormGroup>
          <FormGroup>
            <TextBox
              label="Landmark"
              placeholder="Enter here"
              width={theme.sWidth * 0.9}
            />
          </FormGroup>

          <BotomWrap>
            <ModalSelect
              title="Address Type"
              label="Address Type"
              placeholder="Select"
              width={theme.sWidth * 0.43}
              // width={theme.sWidth * (163 * theme.PX_WIDTH)}
              data={addresstype}
              selected={dropdown}
              onSelect={value => setDropdown(value)}
            />
            <TextBox
              label="Alt. Mobile"
              placeholder="Enter here"
              width={theme.sWidth * 0.43}
            />
          </BotomWrap>
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
          </AmountWrap>
          <SaveWrap>
            <SaveBtn onPress={() => navigation.goBack()}>
              <SaveText>Save</SaveText>
            </SaveBtn>
          </SaveWrap>
        </FixedRow>
      </Footer>
    </Wrapper>
  );
}

export default NewAddress;

const Wrapper = styled.View`
  flex: 1;
  background-color: ${p => p.theme.BACKGROUND};
  position: relative;
`;

const PageWrapper = styled.View`
  padding-vertical: 30px;
  margin: 0 auto;
`;

//input forms

const NameInput = styled(TextBox)``;
const MobileWrap = styled.View`
  margin-vertical: 16px;
  flex-direction: row;
  justify-content: space-between;
  width: ${p => p.theme.sWidth * 0.9};
`;
const MobileInput = styled(TextBox)``;
const FormGroup = styled.View`
  margin-top: 16px;
`;

const BotomWrap = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
  width: ${p => p.theme.sWidth * 0.9};
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

const SaveWrap = styled.View``;
const SaveBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.PRIMARY};
  padding-horizontal: 100px;
  padding-vertical: 9px;
  border-radius: 12px;
`;
const SaveText = styled.Text`
  color: ${p => p.theme.PRIMARY_TEXT};
  margin-right: 8px;
  font-family: 'Poppins';
`;

const IconLeft = styled(Icon)`
  font-family: 'Poppins-Bold';
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
  margin-right: 28px;
`;
