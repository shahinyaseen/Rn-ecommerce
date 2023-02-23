import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components/native';
import {useStateValue} from '../../contextAPI/GlobelState';
import {Icon} from '../';
export default function AccordionFilter({name, defaultOpen, count, children}) {
  const [{theme}] = useStateValue();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    defaultOpen && setIsOpen(true);
  }, []);
  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  return (
    <Wrapper active={isOpen}>
      <TitleWrapper
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setIsOpen(!isOpen);
        }}
        active={isOpen}>
        <Title active={isOpen}>{name}</Title>

        <Flexrow>
          <Count active={isOpen}>{count}</Count>
          <Icon
            name={isOpen ? 'arrow-up' : 'arrow-down'}
            size={25}
            style={{
              paddingRight: 15,
              color: isOpen ? theme.ACCENT_TEXT : theme.TEXT_COLOR,
            }}
          />
        </Flexrow>
      </TitleWrapper>
      {isOpen && <Body>{children}</Body>}
      {/* onLayout={(event) => { find_dimesions(event.nativeEvent.layout) }}  */}
    </Wrapper>
  );
}
const Wrapper = styled.View`
  width: 100%;
  border-width: 1px;
  border-color: ${p => p.theme.DEFAULT};
`;
const TitleWrapper = styled.TouchableOpacity`
  background-color: ${p => (p.active ? p.theme.ACCENT : p.theme.BACKGROUND)};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 16px;
`;
const Title = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 16px;
  color: ${p => (p.active ? p.theme.ACCENT_TEXT : p.theme.TEXT_COLOR)};
  padding-vertical: 10px;
`;
const Flexrow = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Count = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 16px;
  margin-right: 10px;
  color: ${p => (p.active ? p.theme.ACCENT_TEXT : p.theme.TEXT_COLOR)};
`;
const Body = styled.View`
  padding-horizontal: 16px;
  padding-vertical: 12px;
  width: 100%;
`;
