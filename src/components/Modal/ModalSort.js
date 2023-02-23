import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {Modal} from '..';
import {useStateValue} from '../../contextAPI/GlobelState';

export default function ModalSort({
  close,
  visible,
  active,
  title,
  data,
  show,
  closeModal,
}) {
  const [{theme}, dispatch] = useStateValue();

  return (
    <Modal visible={visible} close={() => close()}>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
      <ModalContent>
        <ScrollView
          style={{flex: 1, color: 'black', height: theme.sHeight * 0.35}}
          nestedScrollEnabled={true}
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag"
          showsVerticalScrollIndicator={false}>
          {data.map((item, i) => {
            return (
              <ItemWrapper
                key={i}
                isActive={active == item.label ? true : false}
                onPress={show(item.label)}>
                <ItemText isActive={active == item.label ? true : false}>
                  {item.label}
                </ItemText>
              </ItemWrapper>
            );
          })}
        </ScrollView>
      </ModalContent>
    </Modal>
  );
}
const TitleWrapper = styled.View`
  background-color: ${p => p.theme.BACKGROUND};
  width: ${p => p.theme.sWidth * 0.9}px;
  padding-top: 10px;
  border-bottom-width: 0.5px;
  border-bottom-color: ${p => p.theme.ITEM_BORDER};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const Title = styled.Text`
  font-size: 20px;
  font-family: 'Poppins-Bold';
  color: ${p => p.theme.TEXT_COLOR};
  padding-horizontal: 25px;
  padding-top: 16px;
  padding-bottom: 8px;
`;
const ModalContent = styled.View`
  background-color: ${p => p.theme.BACKGROUND};
  width: ${p => p.theme.sWidth * 0.9}px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-vertical: 10px;
  flex-direction: row;
`;
const ItemWrapper = styled.TouchableOpacity`
  background-color: ${p => (p.isActive ? p.theme.DARK : p.theme.BACKGROUND)};
  padding-vertical: 12px;
  padding-horizontal: 25px;
  justify-content: center;
  border-bottom-width: ${p => (p.border ? '0px' : '0.5px')};
  border-bottom-color: ${p => p.theme.ITEM_BORDER};
  border-top-width: ${p => (p.borderTop ? '0.5px' : '0px')};
  border-top-color: ${p => p.theme.ITEM_BORDER};
`;
const ItemText = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-Medium'};
  color: ${p => (p.isActive ? p.theme.TEXT_COLOR_INVERSE : p.theme.TEXT_COLOR)};

`;
