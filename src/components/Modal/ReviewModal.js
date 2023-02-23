import {View, StyleSheet, Animated, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {useStateValue} from '../../contextAPI/GlobelState';
import React from 'react';
import Modal from './';
import {Icon} from '../';

export default function ReviewModal({visible, close, reviewData}) {
  const [{theme}] = useStateValue();

  return (
    <Modal visible={visible} close={() => close()}>
      {/* name rating title review likes */}
      <ModalContent>
        <NameCard>
          <UserIcnWrapper>
            <Icon color={theme.TEXT_COLOR} name="profile" size={27} />
          </UserIcnWrapper>
          <UserWrapper>
            <UName>{reviewData.name}</UName>
            <RatingWrapper>
              <Icon color={theme.GOLD} name="star-inactive" size={18} />
              <Rating>{reviewData.rating}.0 Rating</Rating>
            </RatingWrapper>
          </UserWrapper>
        </NameCard>
        <ScrollView
          nestedScrollEnabled={true}
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag"
          showsVerticalScrollIndicator={false}>
          <View>
            <Title>{reviewData.title}</Title>
            <Review>{reviewData.review}</Review>
          </View>
        </ScrollView>
        <ActionWrapper>
          <ActionButton>
            <Icon name="like" size={20} color={theme.DEFAULT_TEXT} />
            <ActText marginLeft>{reviewData.likes}</ActText>
          </ActionButton>
          <ActionButton>
            <ActText>Report</ActText>
          </ActionButton>
          <ActionButton onPress={() => close()}>
            <Icon name="close" size={20} color={theme.DEFAULT_TEXT} />
          </ActionButton>
        </ActionWrapper>
      </ModalContent>
    </Modal>
  );
}
const ModalContent = styled.View`
  background-color: ${p => p.theme.BACKGROUND};
  width: ${p => p.theme.sWidth * 0.9}px;
  border-radius: 10px;
  padding: 16px;
  flex-direction: column;
  height: ${p => p.theme.sHeight * 0.6}px;
`;
const NameCard = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`;
const UserIcnWrapper = styled.View`
  background-color: ${p => p.theme.DEFAULT};
  border-radius: 50px;
  padding: 11px;
  margin-right: 8px;
`;
const UserWrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const UName = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-Bold';
  color: ${p => p.theme.TEXT_COLOR};
`;
const RatingWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Rating = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Regular';
  color: ${p => p.theme.TEXT_COLOR};
`;
const Title = styled.Text`
  font-size: 20px;
  font-family: 'Poppins-Regular';
  color: ${p => p.theme.TEXT_COLOR};
`;
const Review = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Light';
  color: ${p => p.theme.TEXT_COLOR};
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 20px;
`;
const ActionWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top: 16px;
`;
const ActionButton = styled.TouchableOpacity`
  background-color: ${p => p.theme.DEFAULT};
  width: ${p => p.theme.sWidth * 0.1948}px;
  border-radius: 10px;
  padding-horizontal: 8px;
  padding-vertical: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const ActText = styled.Text`
  color: ${p => p.theme.DEFAULT_TEXT};
  font-family: 'Poppins-Medium';
  font-size: 14px;
  margin-left: ${p => (p.marginLeft ? 8 : 0)}px;
`;
