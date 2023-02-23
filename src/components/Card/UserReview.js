import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {Icon, ReviewModal} from '../';

import {useStateValue} from '../../contextAPI/GlobelState';
export default function UserReview({data}) {
  const [{theme}] = useStateValue();
  const [showModal, setShowModal] = React.useState(false);
  return (
    <Wrapper>
      <NameCard>
        <UserIcnWrapper>
          <UserIcon name="profile" size={27} />
        </UserIcnWrapper>
        <UserWrapper>
          <UName>{data.name}</UName>
          <RatingWrapper>
            <StyledIcon name="star-fill" size={18} />
            <Rating>{data.rating}.0 Rating</Rating>
          </RatingWrapper>
        </UserWrapper>
      </NameCard>
      <Title>{data.title}</Title>
      <Review>{data.desc}</Review>
      <ActionWrapper>
        <ActionButton>
          <Icon name="like" size={20} color={theme.DEFAULT_TEXT} />
          <ActText marginLeft>{data.likes}</ActText>
        </ActionButton>
        <ActionButton>
          <ActText>Report</ActText>
        </ActionButton>
        <RaedmoreButton onPress={() => setShowModal(!showModal)}>
          <ReadmoreText>Read More</ReadmoreText>
          <Icon name="arrow-down" size={20} color={theme.TEXT_COLOR} />
        </RaedmoreButton>
      </ActionWrapper>
      <ReviewModal
        visible={showModal}
        close={() => setShowModal(!showModal)}
        reviewData={{
          name: 'Anupam',
          rating: 3,
          title:
            'This phone is a joke and the joke is on us!!! Don’t buy this phone.',
          review:
            'Extremely disappointed with this phone. It’s a seemingly average phone which is over priced by 4 to 5 times at least. This phone is a joke in comparison with any Samsung flagship phone. I am shocked that so many fools like me are falling for apple’s trickery and gimmickry.The battery doesn’t last half a day. Screen size is average. Thickness of this phone will constantly remind you that this phone belongs to another era. 64gb space won’t be enough for anyone.And then there are other apple quirks - won’t come with a SD card, won’t come with a charging brick or a set of head phones. Your headphones with the regular audio pin won’t work with this one. Face ID won’t work with masks on. So your forced to remove your masks when you’re out and vulnerable. This phone won’t allow you set google maps as default. So you continue to suffer using their apple map which I bet even Tim Cook doesn’t use. You won’t be able to set google chrome as your default browser as iOS won’t let you.',
          likes: 10,
        }}
      />
    </Wrapper>
  );
}
const Wrapper = styled.View`
  width: 100%;
  border-radius: 15px;
  padding: 16px;
  background-color: ${p => p.theme.BACKGROUND};
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  shadow-color: black;
  shadow-offset: 1px -1px;
  elevation: 9;
  margin-bottom: 16px;
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
const UserIcon = styled(Icon)`
  color: ${p => p.theme.TEXT_COLOR};
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
const StyledIcon = styled(Icon)`
  color: ${p => p.theme.GOLD};
`;
const ActionWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
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
const RaedmoreButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ReadmoreText = styled.Text`
  color: ${p => p.theme.TEXT_COLOR};
  font-family: 'Poppins-Medium';
  font-size: 14px;
  margin-right: 8px;
`;
