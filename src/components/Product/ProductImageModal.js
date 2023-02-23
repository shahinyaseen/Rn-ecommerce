import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {mobile1, v1, v2, v3} from '../../assets';

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
export default function ProductImageModal() {
  const [select, setSelected] = useState(images[1]);
  return (
    <View>
      <ImageBox>
        {select && (
          <ProductImg
            source={select.img}
            style={{width: '100%', height: 326, resizeMode: 'contain'}}
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
  );
}

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
  opacity: ${p => (p.isActive ? '0.5' : '1.0')}px;
`;
