import {View, Text, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {BackButtonBar, Header, ModalSelect, TextBox} from '../../components';
import {contactbanner} from '../../assets';
import {useStateValue} from '../../contextAPI/GlobelState';

let data = [
  {
    value: 'Support',
    label: 'Support',
  },
  {
    value: 'Other',
    label: 'Other',
  },
];
export default function Contact() {
  const [{theme}, dispatch] = useStateValue();
  const [dropdown, setDropdown] = useState(null);
  return (
    <Wrapper>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag">
        <PageWrapper>
          <BannerImage source={contactbanner} />
          <FormWrap>
            <Title>Leav us a Message</Title>
            <Subtitle>
              Contact us for any inquiries , additional support or feedback.
            </Subtitle>

            <FormGroup>
              <TextBox
                label="Name"
                placeholder="Enter here"
                width={theme.sWidth * 0.8769}
              />
            </FormGroup>
            <FormGroup>
              <TextBox
                label="Email"
                type="email"
                placeholder="email@example.com"
                width={theme.sWidth * 0.8769}
              />
            </FormGroup>
            <FormGroup>
              <TextBox
                label="Phone Number"
                type="number"
                placeholder="+91"
                width={theme.sWidth * 0.8769}
              />
            </FormGroup>

            <FormGroup>
              <ModalSelect
                title="Subject"
                label="Subject"
                placeholder="Select"
                width={theme.sWidth * 0.8769}
                data={data}
                selected={dropdown}
                onSelect={value => setDropdown(value)}
              />
            </FormGroup>
            <FormGroup>
              <TextBox
                label="Address"
                placeholder="Enter here"
                width={theme.sWidth * 0.8769}
                multiline
                numberOfLines={5}
              />
            </FormGroup>
            <SaveWrap>
              <SaveBtn>
                <SaveText>Submit</SaveText>
              </SaveBtn>
            </SaveWrap>
          </FormWrap>
        </PageWrapper>
      </ScrollView>
      <BackButtonBar />
    </Wrapper>
  );
}

const Wrapper = styled.View`
  flex: 1;
  background-color: ${p => p.theme.BACKGROUND};
`;
const PageWrapper = styled.View`
  margin-top: 40px;
`;
const BannerImage = styled.Image`
  height: 503px;
  width: ${p => p.theme.sWidth};
`;

const FormWrap = styled.View`
  margin-top: 40px;
  padding-horizontal: 24px;
  margin-bottom: 30px;
`;
const Title = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 24px;
  color: ${p => p.theme.TEXT_COLOR};
`;
const Subtitle = styled.Text`
  font-size: 16px;
  color: ${p => p.theme.TEXT_COLOR};
  width: ${p => p.theme.sWidth * (342 * p.theme.PX_WIDTH)}px;
  font-family: 'Poppins-Regular';
  margin-bottom: 24px;
`;

const FormGroup = styled.View`
  margin-bottom: 24px;
`;

const SaveWrap = styled.View``;
const SaveBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.ACCENT};
  padding-horizontal: 130px;
  padding-vertical: 15px;
  border-radius: 12px;
`;
const SaveText = styled.Text`
  color: ${p => p.theme.ACCENT_TEXT};
  margin-right: 8px;
  font-family: 'Poppins';
`;
