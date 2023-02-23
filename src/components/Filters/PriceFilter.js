import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AccordionFilter from '../Accordion/AccordionFilter';
import styled from 'styled-components/native';
import Button from '../Button/Button';
import {useStateValue} from '../../contextAPI/GlobelState';
import TextBox from '../Input/TextBox';

export default function PriceFilter({data, name, isPrice, setIsPrice}) {
  const [{theme}] = useStateValue();

  const isCheckBox = value => {
    return isPrice == '' ? false : isPrice.includes(value) ? true : false;
  };
  const onCheckBox = value => {
    if (isPrice != '') {
      if (value.value) {
        if (isPrice.includes(value.value)) {
          const count = isPrice.filter(item => item != value.value);
          setIsPrice(count);
        } else {
          setIsPrice([...isPrice, value.value]);
        }
      }
    } else {
      setIsPrice([value.value]);
    }
  };
  return (
    <Wrapper>
      <AccordionFilter initialOpen={true} name={name}>
        <Container>
          <PriceWrapper>
            {Object.values(data || {}).map((item, i) => {
              return (
                <Content
                  key={i}
                  isActive={isCheckBox(item.value)}
                  onPress={() => onCheckBox(item)}>
                  <Price isActive={isCheckBox(item.value)}>{item.label}</Price>
                </Content>
              );
            })}
          </PriceWrapper>
          <InputRow>
            <TextBox
              type="number"
              placeholder="0"
              width={theme.sWidth * (160 * theme.PX_WIDTH)}
            />

            <TextBox
              type="number"
              placeholder="0"
              width={theme.sWidth * (160 * theme.PX_WIDTH)}
            />
          </InputRow>
          <ButtonInner>
            <ApplyButton
              isPrimary
              name="Apply"
              round={true}
              width={theme.sWidth * (342 * theme.PX_WIDTH)}
            />
          </ButtonInner>
        </Container>
      </AccordionFilter>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  width: 100%;
  background: ${p => p.theme.BACKGROUND};
`;
const PriceWrapper = styled.View`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;
const Container = styled.View``;
const Content = styled.TouchableOpacity`
  background-color: ${p =>
    p.isActive ? p.theme.ACCENT_SECONDARY : p.theme.BACKGROUND};
  padding: 12px 16px;
  width: 100%;
`;
const Price = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  line-height: 25.2px;
  color: ${p => p.theme.ACCENT_SECONDARY_TEXT};
`;
const ButtonInner = styled.View`
  margin: 10px 5px;
`;
const ApplyButton = styled(Button)`
  width: 100%;
  font-weight: 500;
`;

const InputRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 10px;
`;
