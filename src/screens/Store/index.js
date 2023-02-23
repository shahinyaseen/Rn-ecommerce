import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {
  Accordion,
  BackButtonBar,
  Button,
  Header,
  Icon,
  TextBox,
} from '../../components';
import {useStateValue} from '../../contextAPI/GlobelState';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function Store() {
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
        <PageWrapper>
          <PincodeWrapper>
            <Label>Enter an Indian pincode</Label>
            <Flexrow>
              <TextBox
                placeholder="Enter Pincode"
                width={theme.sWidth * (258 * theme.PX_WIDTH)}
              />
              <Button
                isAccentSecondary
                name="Apply"
                width={theme.sWidth * (73 * theme.PX_WIDTH)}
              />
            </Flexrow>
          </PincodeWrapper>
          <AccordionWrap>
            <Accordion title="Malappuram">
              <AddressItem>
                <PlaceTitle>Perinthalmanna</PlaceTitle>
                <Adress>
                  <Icon name="location" color={theme.TEXT_COLOR} size={20} />
                  <AddresData>
                    Bypass road, near presentation school, Padippura,
                    Perintalmanna, Kerala 679322
                  </AddresData>
                </Adress>
                <Adress>
                  <Icon name="email" color={theme.TEXT_COLOR} size={20} />
                  <AddresData>support@gulfowndigitalhub.com</AddresData>
                </Adress>
                <Adress>
                  <Icon name="phone" color={theme.TEXT_COLOR} size={20} />
                  <AddresData>+91 9072 11 11 85</AddresData>
                </Adress>
              </AddressItem>
              <AddressItem>
                <PlaceTitle>Kottakkal</PlaceTitle>
                <Adress>
                  <Icon name="location" color={theme.TEXT_COLOR} size={20} />
                  <AddresData>
                    Mini Road Junction opp canara Bank changuvetty, Kottakkal,
                    Kerala 676503
                  </AddresData>
                </Adress>
                <Adress>
                  <Icon name="email" color={theme.TEXT_COLOR} size={20} />
                  <AddresData>support@gulfowndigitalhub.com</AddresData>
                </Adress>
                <Adress>
                  <Icon name="phone" color={theme.TEXT_COLOR} size={20} />
                  <AddresData>+91 8943 11 11 73</AddresData>
                </Adress>
              </AddressItem>
              <AddressItem>
                <PlaceTitle>Nilambur</PlaceTitle>
                <Adress>
                  <Icon name="location" color={theme.TEXT_COLOR} size={20} />
                  <AddresData>Chandakkunnu, Nilambur, Kerala 679329</AddresData>
                </Adress>
                <Adress>
                  <Icon name="email" color={theme.TEXT_COLOR} size={20} />
                  <AddresData>support@gulfowndigitalhub.com</AddresData>
                </Adress>
                <Adress>
                  <Icon name="phone" color={theme.TEXT_COLOR} size={20} />
                  <AddresData>+91 7034 11 11 93</AddresData>
                </Adress>
              </AddressItem>
            </Accordion>
            <Accordion title="Kottakkal"></Accordion>
            <Accordion title="Palakkad"></Accordion>
            <Accordion title="Kollam"></Accordion>
          </AccordionWrap>
        </PageWrapper>
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
const PageWrapper = styled.View`
  padding-horizontal: 24px;
  padding-vertical: 24px;
`;

const PincodeWrapper = styled.View``;
const Label = styled.Text`
  font-size: 16px;
  font-family: 'Poppins';
  color: ${p => p.theme.TEXT_COLOR};
  margin-bottom: 8px;
`;
const Flexrow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const AccordionWrap = styled.View`
  margin-top: 26px;
`;

const AddressItem = styled.View`
  flex-direction: column;
  padding-horizontal: 24px;
  padding-vertical: 24px;
  border-width: 1px;
`;
const PlaceTitle = styled.Text`
  font-size: 24px;
  font-family: 'Poppins-Bold';
  color: ${p => p.theme.TEXT_COLOR};
`;

const Adress = styled.View`
  flex-direction: row;
  margin-top: 26px;
`;
const AddresData = styled.Text`
  margin-left: 17px;
  font-size: 14px;
  font-family: 'Poppins-Regular';
  text-decoration-line: underline;
  color: ${p => p.theme.TEXT_COLOR};
  line-height: 25px;
`;
