import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Modal, Icon} from '../';
// import Icon from '../Icon';
import styled from 'styled-components/native';
import {useStateValue} from '../../contextAPI/GlobelState';
export default function ModalSelect({
  label,
  placeholder,
  width,
  data,
  title,
  selected,
  onSelect,
  filled,
}) {
  const [{theme}] = useStateValue();
  const [isOpen, setIsOpen] = useState(false);
  const isSelected = () => {
    return selected == null
      ? selected
        ? true
        : false
      : selected === ''
      ? selected
        ? true
        : false
      : selected.length != 0;
  };
  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };
  const onSelectItem = item => {
    toggleSelect();
    onSelect(item);
  };
  return (
    <View>
      <Wrapper width={width}>
        {label && <LabelText>{label}</LabelText>}
        <SelectBox onPress={toggleSelect} filled={filled}>
          <SelectText>{isSelected() ? selected.label : placeholder}</SelectText>
          <Icon
            name="arrow-down"
            size={16}
            style={{paddingRight: 15, color: theme.TEXT_COLOR}}
          />
        </SelectBox>
      </Wrapper>

      <Modal visible={isOpen} close={toggleSelect}>
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
                  onPress={() => {
                    onSelectItem(item);
                  }}
                  key={i}
                  isSelected={
                    isSelected() && selected.value === item.value ? true : false
                  }
                  border={i === data.length - 1}
                  borderTop={i === 0}>
                  <ItemText
                    isSelected={
                      isSelected() && selected.value === item.value
                        ? true
                        : false
                    }>
                    {item.label}
                  </ItemText>
                </ItemWrapper>
              );
            })}
          </ScrollView>
        </ModalContent>
      </Modal>
    </View>
  );
}
const Wrapper = styled.View`
  width: ${p => p.width}px;
`;
const SelectBox = styled.TouchableOpacity`
  background-color: ${p => (p.filled ? p.theme.DEFAULT : p.theme.INPUT_BG)};
  border-width: ${p => (p.filled ? 0 : 1)}px;
  border-radius: 10px;
  border-color: ${p => p.theme.PLACE_HOLDER_TEXT_COLOR};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 48px;
`;
const LabelText = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Medium';
  color: ${p => p.theme.TEXT_COLOR};
  margin-bottom: 8px;
`;
const SelectText = styled.Text`
  padding-left: 15px;
  font-family: 'Poppins-Regular';
  color: ${p => p.theme.TEXT_COLOR};
`;
const ModalContent = styled.View`
  background-color: ${p => p.theme.BACKGROUND};
  width: ${p => p.theme.sWidth * 0.9}px;
  /* border-radius: 10px; */
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-vertical: 10px;
  flex-direction: row;
  /* height: 70%; */
`;
const TitleWrapper = styled.View`
  background-color: ${p => p.theme.BACKGROUND};
  width: ${p => p.theme.sWidth * 0.9}px;
  padding-top: 10px;
  /* border-radius: 10px; */
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
const ItemWrapper = styled.TouchableOpacity`
  background-color: ${p => p.isSelected && p.theme.DARK};
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
  color: ${p =>
    p.isSelected ? p.theme.TEXT_COLOR_INVERSE : p.theme.TEXT_COLOR};
`;
