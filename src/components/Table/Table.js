import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

export const Tr = ({children}) => {
  return <ATr>{children}</ATr>;
};
export const Td = ({isActive, children, isFilter, ...rest}) => {
  return (
    <NameTd isActive={isActive} isFilter={isFilter} {...rest}>
      {children}
    </NameTd>
  );
};
export const Thead = ({isActive, isWidth, children, isFilter, ...rest}) => {
  return (
    <HeaderItem
      isActive={isActive}
      isWidth={isWidth}
      isFilter={isFilter}
      {...rest}>
      {children}
    </HeaderItem>
  );
};
const ATr = styled.View`
  background-color: ${p => p.theme.DEFAULT};
  width: 100%;
  flex-direction: column;
`;

const NameTd = styled.Text`
  font-size: 14px;
  font-family: 'Poppins';
  width: ${p => p.theme.sWidth * (130 * p.theme.PX_WIDTH)};
  border-right-width: 1px;
  border-right-color: ${p => p.theme.PLACE_HOLDER_TEXT_COLOR};
  padding-vertical: 8px;
  padding-horizontal: 10px;
  color: ${p => p.theme.TEXT_COLOR};
  line-height: 25px;
`;

const HeaderItem = styled.Text`
  font-size: 16px;
  background-color: ${p => p.theme.DEFAULT};
  padding-vertical: 12px;
  padding-horizontal: 24px;
  border-color: ${p => p.theme.PLACE_HOLDER_TEXT_COLOR};
  border-width: 1px;
  font-family: 'Poppins-SemiBold';
  color: ${p => p.theme.DEFAULT_TEXT};
`;
