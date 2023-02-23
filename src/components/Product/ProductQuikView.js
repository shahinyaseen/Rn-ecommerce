import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {mobile, mobile1, product, v1, v2, v3} from '../../assets';

let images = [
  {
    img: mobile1,
  },
  {
    img: v1,
  },
  {
    img: v2,
  },
  {
    img: v3,
  },
];

export default function ProductQuikView() {
  const [select, setSelected] = useState(images[1]);
  return (
    <Wrapper>
      <DeatilView>
        <Brandname>Apple iPhone 12 (128GB) - Purple</Brandname>
        <VarintWrapper>
          <Variable>Variant:</Variable>
          <Varint>
            <VarintName>64GB</VarintName>
            <VarintName>64GB</VarintName>
            <VarintName>64GB</VarintName>
          </Varint>
        </VarintWrapper>
        <VarintWrapper>
          <Variable>Color:</Variable>

          <ColorPallete>
            <ColorCircle color="#D73936" />
            <ColorCircle color="#332D39" />
            <ColorCircle color="#1F4F73" />
            <ColorCircle color="#DCF2DD" />
            <ColorCircle color="#F7F3F2" />
          </ColorPallete>
        </VarintWrapper>
      </DeatilView>
      <View>
        <ImageBox>
          {select && (
            <ProductImg
              source={select.img}
              style={{width: '100%', height: 250, resizeMode: 'contain'}}
            />
          )}
        </ImageBox>
        <ListImage>
          {images.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => setSelected(item)}
                isActive={select === item}>
                <ImageItem
                  source={item.img}
                  resizeMode="contain"
                  isActive={select === item}
                />
              </TouchableOpacity>
            );
          })}
        </ListImage>
      </View>
    </Wrapper>
  );
}
const Wrapper = styled.View``;
const DeatilView = styled.View`
  background-color: ${p => p.theme.DEFAULT};
  padding-horizontal: 15px;
  padding-vertical: 15px;
`;
const Brandname = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 16px;
  color: ${p => p.theme.DEFAULT_TEXT};
`;

const VarintWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const Varint = styled.View`
  flex-direction: row;
`;
const VarintName = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 14px;
  color: ${p => p.theme.DEFAULT_TEXT};
  margin-right: 5px;
`;

const Variable = styled.Text`
  font-family: 'Poppins-Light';
  font-size: 16px;
  color: ${p => p.theme.DEFAULT_TEXT};
  margin-right: 8px;
`;

const ColorPallete = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
const ColorCircle = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${p => p.theme.TEXT_COLOR};
  background-color: ${p => p.color};
  margin-right: 8px;
`;

const ImageBox = styled.View`
  flex-direction: row;
  justify-content: center;
  width: ${p => p.theme.sWidth * 0.835}px;
`;
const ProductImg = styled(Image)``;
const ListImage = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  justify-content: space-between;
  padding-horizontal: 24px;
`;
const ImageItem = styled(Image)`
  width: 70px;
  height: 70px;
  border-width: 2px;
  border-color: ${p => (p.isActive ? p.theme.TEXT_COLOR : p.theme.BACKGROUND)};
  border-radius: 8px;
`;
