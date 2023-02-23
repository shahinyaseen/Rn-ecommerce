import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import AccordionFilter from '../Accordion/AccordionFilter';
import CheckBox from '../Input/CheckBox';
import {useStateValue} from '../../contextAPI/GlobelState';

export default function BrandFilter({data, name, isBrand, setIsBrand}) {
  const [{theme}, dispatch] = useStateValue();

  const isCheckBox = value => {
    return isBrand == '' ? false : isBrand.includes(value) ? true : false;
  };

  const onCheckBox = value => {
    if (isBrand != '') {
      if (value.value) {
        if (isBrand.includes(value.value)) {
          const count = isBrand.filter(item => item != value.value);
          setIsBrand(count);
        } else {
          setIsBrand([...isBrand, value.value]);
        }
      }
    } else {
      setIsBrand([value.value]);
    }
  };
  const countValue = isBrand.length ? isBrand.length : 0;
  const clearDetails = () => {
    setIsBrand('');
  };
  return (
    <Wrapper>
      <BrandBorder
        initialOpen={true}
        name={name}
        showButton="Clear"
        click={clearDetails}
        count={countValue}>
        <Container>
          <BrandWrapper>
            {Object.values(data || {}).map((item, i) => {
              return (
                <Content key={i} isActive={isCheckBox(item.value)}>
                  <CheckBox
                    label={item.label}
                    onChange={() => onCheckBox(item)}
                    checked={isCheckBox(item.value)}
                  />
                </Content>
              );
            })}
          </BrandWrapper>
        </Container>
      </BrandBorder>
    </Wrapper>
  );
}
const Wrapper = styled.View`
  width: 100%;
  ${'' /* background: ${p => p.theme.BACKGROUND}; */}
`;
const BrandWrapper = styled.View`
  flex-direction: column;
  padding: 8px;
`;
const Container = styled.View``;
const Content = styled.TouchableOpacity`
  background-color: ${p => (p.isActive ? p.theme.ACCENT : p.theme.BACKGROUND)};
  padding: 12px 16px;
  width: 100%;
  flex-direction: row;
`;
const BrandBorder = styled(AccordionFilter)`
  border-bottom-color: ${p => p.theme.ITEM_BORDER};
  border-bottom-width: 1px;
`;
