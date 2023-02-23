import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AccordionFilter from '../Accordion/AccordionFilter';
import styled from 'styled-components/native';

export default function OfferFilter({data, name, isOffer, setIsOffer}) {
  const isCheckBox = value => {
    return isOffer === '' ? false : isOffer.includes(value) ? true : false;
  };
  const onCheckBox = value => {
    if (isOffer != '') {
      if (value.value) {
        if (isOffer.includes(value.value)) {
          const count = isOffer.filter(item => item != value.value);
          setIsOffer(count);
        } else {
          setIsOffer([...isOffer, value.value]);
        }
      }
    } else {
      setIsOffer([value.value]);
    }
  };
  const clearDetails = () => {
    setIsOffer('');
  };
  const countValue = isOffer.length ? isOffer.length : 0;
  return (
    <Wrapper>
      <AccordionFilter
        initialOpen={true}
        name={name}
        showButton="Clear"
        click={clearDetails}
        count={countValue}>
        <Container>
          <OfferWrapper>
            {Object.values(data || {}).map((item, i) => {
              return (
                <Content
                  key={i}
                  isActive={isCheckBox(item.value)}
                  onPress={() => onCheckBox(item)}>
                  <Offer isActive={isCheckBox(item.value)}>{item.label}</Offer>
                </Content>
              );
            })}
          </OfferWrapper>
        </Container>
      </AccordionFilter>
    </Wrapper>
  );
}
const Wrapper = styled.View`
  flex: 1;
  color: ${p => p.theme.BACKGROUND};
`;

const Container = styled.View``;
const OfferWrapper = styled.View`
  flex-direction: column;
  padding: 8px;
`;
const Content = styled.TouchableOpacity`
  background-color: ${p => (p.isActive ? p.theme.ACCENT : p.theme.BACKGROUND)};
  padding: 12px 16px;
  width: 100%;
  flex-direction: row;
`;
const Offer = styled.Text`
  font-size: 14px;
  font-family: 'Poppins';
  color: ${p => p.theme.TEXT_COLOR};
`;
