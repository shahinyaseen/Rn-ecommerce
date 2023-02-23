import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {Icon} from '../';
export default function EyeBtn({isActive, ...rest}) {
  return (
    <Wrapper {...rest}>
      <StyledIcon name="eye" size={14} isActive={isActive}/>
    </Wrapper>
  );
}
const Wrapper = styled.TouchableOpacity`
  background-color: ${p => p.theme.DEFAULT};
  color: ${p => p.theme.DEFAULT_TEXT};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 60px;
  padding-horizontal: 9px;
  padding-vertical: 9px;
`;
const StyledIcon = styled(Icon)`
  color: ${p => p.isActive?p.theme.RED:p.theme.DEFAULT_TEXT};
  font-size: 21px;
`;
