import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AccordionFilter from '../Accordion/AccordionFilter';
import styled from 'styled-components/native';
import {Icon} from '../Icon';

export default function ReviewFilter({data, name, isReview, setIsReview}) {
  const isCheckBox = value => {
    return isReview === '' ? false : isReview.includes(value) ? true : false;
  };
  const onCheckBox = value => {
    if (isReview != '') {
      if (value.value) {
        if (isReview.includes(value.value)) {
          const count = isReview.filter(item => item != value.value);
          setIsReview(count);
        } else {
          setIsReview([...isReview, value.value]);
        }
      }
    } else {
      setIsReview([value.value]);
    }
  };
  const clearDetails = () => {
    setIsReview('');
  };
  const countValue = isReview.length ? isReview.length : 0;
  return (
    <Wrapper>
      <AccordionFilter
        initialOpen={true}
        name={name}
        showButton="Clear"
        click={clearDetails}
        count={countValue}>
        <Container>
          <ReviewWrapper>
            {Object.values(data || {}).map((item, i) => {
              return (
                <Content
                  key={i}
                  isActive={isCheckBox(item.value)}
                  onPress={() => onCheckBox(item)}>
                  <Rating name="star-fill" />
                  <Review isActive={isCheckBox(item.value)}>& up</Review>
                </Content>
              );
            })}
          </ReviewWrapper>
        </Container>
      </AccordionFilter>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  width: 100%;
  background: ${p => p.theme.BACKGROUND};
`;
const Container = styled.View``;

const ReviewWrapper = styled.View`
  flex-direction: column;
  padding: 8px;
`;
const Content = styled.TouchableOpacity`
  background-color: ${p => (p.isActive ? p.theme.ACCENT : p.theme.BACKGROUND)};
  padding: 12px 16px;
  width: 100%;
  flex-direction: row;
`;
const Review = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 12px;
  color: ${p => p.theme.TEXT_COLOR};
`;

const Rating = styled(Icon)`
  color: ${p => p.theme.TEXT_COLOR};
  margin-right: 4px;
`;
