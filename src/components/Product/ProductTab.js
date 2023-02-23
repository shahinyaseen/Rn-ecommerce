import React, {useState} from 'react';
import styled from 'styled-components/native';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import ProductDefault from './ProductDefault';
import {camera} from '../../assets';
import {useNavigation} from '@react-navigation/native';

function ProductTab({data}) {
  const [isActive, setIsActive] = useState(0);
  const navigation = useNavigation();

  const Indicator = () => {
    return (
      <View
        style={{
          position: 'absolute',
          height: 4,
          width: 100,
          backgroudcolor: 'red',
          bottom: -2,
          right: -29,
          borderBottomWidth: isActive ? 2 : 0,
        }}
      />
    );
  };

  console.log(isActive, '================================');
  return (
    <>
      <HeaderWrapper>
        <TitleWrapper>
          {data.map((item, index) => {
            return (
              <ItemTabtitle key={index}>
                <TitleItem onPress={() => setIsActive(index)}>
                  <TitleText>{item.title}</TitleText>
                </TitleItem>
                <Indicator setIsActive={index} />
              </ItemTabtitle>
            );
          })}
        </TitleWrapper>
      </HeaderWrapper>

      <ScrollItemWrapper>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {data[isActive].item.map((item, index) => {
            return (
              <ProductDefault
                key={index}
                brand={item.brand}
                content={item.content}
                image={item.image}
                rating={item.rating}
                ratingcount={item.ratingcount}
                price={item.price}
                rprice={item.mrp}
                onPress={() => navigation.navigate('product-single', item)}
              />
            );
          })}
        </ScrollView>
      </ScrollItemWrapper>
    </>
  );
}
export default ProductTab;
const Wrapper = styled.View``;
const HeaderWrapper = styled.View`
  padding-horizontal: 24px;
`;
const TitleWrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
  justify-content: space-around;
  border-bottom-width: 2px;
  border-bottom-color: ${p => p.theme.ITEM_BORDER};
  position: relative;
`;
const TitleItem = styled.TouchableOpacity`
  ${'' /* margin: 0 24px; */}

  padding-vertical: 5px;
`;

const TitleText = styled.Text`
  color: ${p => p.theme.TEXT_COLOR};
`;

const ItemTabtitle = styled.View``;

const ScrollItemWrapper = styled.View`
  margin-left: 24px;
`;
