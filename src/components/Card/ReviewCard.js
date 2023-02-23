import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {Icon} from '../';
export default function ReviewCard({review, rating, count, ...rest}) {
  return (
    <Wrapper>
      <FCount>
        <RCount>{count}.0</RCount>
        <WrapperStars>
          <StarWrapper>
            {[...Array(5)].map((_, i) => {
              return (
                <StyledIcon
                  key={i}
                  name={i < count ? 'star-fill' : 'star'}
                  size={25}
                />
              );
            })}
          </StarWrapper>
          <Rtext>Customer Reviews</Rtext>
        </WrapperStars>
      </FCount>
      <FCount>
        <CountWrapper>
          <RatingText>{rating} Ratings</RatingText>
          <RatingText>{review} Reviews</RatingText>
        </CountWrapper>
        <ActionBtn {...rest}>
          <ActionText>Write a Review</ActionText>
          <ArrowIcon name="longarrow-right" size={20} />
        </ActionBtn>
      </FCount>
    </Wrapper>
  );
}
const Wrapper = styled.View`
  border-width: 1px;
  border-color: ${p => p.theme.TEXT_COLOR};
  border-radius: 15px;
  padding: 30px;
`;
const RCount = styled.Text`
  font-size: 56px;
  font-family: 'Poppins-Bold';
  color: ${p => p.theme.TEXT_COLOR};
`;
const FCount = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const WrapperStars = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledIcon = styled(Icon)`
  margin-right: 7px;
  color: ${p => p.theme.GOLD};
`;
const StarWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;
const Rtext = styled.Text`
  font-family: 'Poppins-Regular';
  color: ${p => p.theme.TEXT_COLOR};
  font-size: 16px;
  line-height: 24px;
`;
const CountWrapper = styled.View``;
const RatingText = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Light';
  line-height: 24px;
`;
const ActionBtn = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border-width: 2px;
  border-color: ${p => p.theme.DEFAULT};
  padding-vertical: 10px;
  padding-horizontal: 14px;
`;
const ActionText = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Medium';
  color: ${p => p.theme.TEXT_COLOR};
`;
const ArrowIcon = styled(Icon)`
  color: ${p => p.theme.TEXT_COLOR};
  margin-left: 5px;
`;
