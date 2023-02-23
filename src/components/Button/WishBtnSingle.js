import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {Icon} from '../';
export default function WishBtnSingle({isActive, ...rest}) {
  return (
    <Wrapper {...rest}>
      <StyledIcon
        name={isActive ? 'heart-fill' : 'heart'}
        size={14}
        isActive={isActive}
      />
    </Wrapper>
  );
}
const Wrapper = styled.TouchableOpacity`
  background-color: ${p => p.theme.ACCENT_SECONDARY};
  color: ${p => p.theme.ACCENT_SECONDARY_TEXT};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding-horizontal: 5px;
  padding-vertical: 10px;
  width: ${p => p.theme.sWidth * 0.1025}px;
`;
const StyledIcon = styled(Icon)`
  color: ${p => p.theme.ACCENT_SECONDARY_TEXT};
  font-size: 21px;
`;
