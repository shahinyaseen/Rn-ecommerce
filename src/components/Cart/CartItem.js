import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useStateValue} from '../../contextAPI/GlobelState';
import styled from 'styled-components/native';
import {Icon} from '../Icon';

export default function CartItem({image, brand, title, price, color}) {
  const [{theme}, dispatch] = useStateValue();
  const [counter, setCounter] = useState(0);
  const incNum = () => setCounter(counter + 1);
  let decNum = () => setCounter(counter - 1);

  if (counter <= 0) {
    decNum = () => setCounter(1);
  }
  return (
    <Wrapper>
      <ImageContainer>
        <ImageCard source={image} resizeMode={'contain'} />
      </ImageContainer>
      <DetailContainer>
        <TopSection>
          <Brand>{brand.toUpperCase()}</Brand>
          <Title>{title}</Title>
          <PriceArea>₹{price}</PriceArea>
        </TopSection>
        <BottomSection>
          <TypeSection>
            <Color>
              Color: <ColorText>{color}</ColorText>
            </Color>
          </TypeSection>
          <ActionSection>
            <IncrementContainer>
              <Decrement onPress={decNum}>
                <IDText>-</IDText>
              </Decrement>
              <TextNumber value={counter}>{counter}</TextNumber>
              <Increment onPress={incNum}>
                <IDText>+</IDText>
              </Increment>
            </IncrementContainer>
            <Edit>
              <EditText>Edit</EditText>
            </Edit>
            <Delete>
              <Icon name="close" color={theme.DEFAULT_TEXT} />
            </Delete>
          </ActionSection>
        </BottomSection>
      </DetailContainer>
    </Wrapper>
  );
}
const Wrapper = styled.View`
  flex-grow: 1;
  background-color: ${p => p.theme.BACKGROUND};
  width: ${p => p.theme.sWidth * 0.8769}px;
  display: flex;
  flex-direction: row;
  margin: 16px auto;
`;
const ImageContainer = styled.View`
  margin-right: 12px;
  padding-vertical: 19px;
  width: ${p => p.theme.sWidth * (75 * p.theme.PX_WIDTH)}px;
`;
const ImageCard = styled.Image`
  width: null;
  height: 70;
`;
const DetailContainer = styled.View`
  width: ${p => p.theme.sWidth * (260 * p.theme.PX_WIDTH)}px;
`;

const TopSection = styled.View``;

const Brand = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-SemiBold';
  color: ${p => p.theme.STRIKE_TEXT};
`;

const Title = styled.Text`
  font-size: 14px;
  line-height: 24px;
  font-family: 'Poppins-SemiBold';

  color: ${p => p.theme.TEXT_COLOR};
`;

const PriceArea = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 16px;
  color: ${p => p.theme.ACCENT};
`;

const BottomSection = styled.View``;
const TypeSection = styled.View``;
const ActionSection = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0 0 29px;
`;

const Color = styled.Text`
  color: ${p => p.theme.STRIKE_TEXT};
`;

const ColorText = styled.Text`
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
`;

const IncrementContainer = styled.View`
  flex-direction: row;
  background-color: ${p => p.theme.DEFAULT};
  padding: 4px 12px;
  border-radius: 10px;
  width: 93px;
  height: 32px;
  justify-content: space-between;
  align-item: center;
`;
const Decrement = styled.TouchableOpacity``;
const IDText = styled.Text`
  font-size: 18px;
  font-family: 'Poppins-SemiBold';
  color: ${p => p.theme.DEFAULT_TEXT};
`;
const TextNumber = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-SemiBold';
  color: ${p => p.theme.DEFAULT_TEXT};
`;

const Increment = styled.TouchableOpacity``;
const Edit = styled.TouchableOpacity`
  padding: 4px 16px;
  width: 58px;
  height: 32px;
  background-color: ${p => p.theme.DEFAULT};
  border-radius: 10px;
  align-item: center;
  justify-content: center;
`;
const EditText = styled.Text`
  color: ${p => p.theme.DEFAULT_TEXT};
`;
const Delete = styled.TouchableOpacity`
  padding-horizontal: 16px;
  padding-vertical: 9px;
  background-color: ${p => p.theme.DEFAULT};
  border-radius: 10px;
  align-self: center;
  justify-content: center;
`;
