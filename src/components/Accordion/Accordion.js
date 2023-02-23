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
export default function Accordion({title, defaultOpen, children}) {
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
        <Title>{title}</Title>

        <Icon
          name={isOpen ? 'arrow-up' : 'arrow-down'}
          size={16}
          style={{paddingRight: 15, color: theme.TEXT_COLOR}}
        />
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
  margin-bottom: 2px;
`;
const TitleWrapper = styled.Pressable`
  background-color: ${p => (p.active ? p.theme.DEFAULT : p.theme.BACKGROUND)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 16px;
`;
const Title = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 16px;
  color: ${p => p.theme.TEXT_COLOR};
  padding-vertical: 10px;
  width: ${p => p.theme.sWidth * (266 * p.theme.PX_WIDTH)};
`;
const Body = styled.View`
  padding-horizontal: 16px;
  padding-vertical: 12px;
  width: 100%;
`;
