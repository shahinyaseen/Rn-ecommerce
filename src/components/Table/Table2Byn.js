import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
export default function Table2Byn({data}) {
  return data.map((item, index) => {
    return (
      <Tr
        striped={index % 2}
        key={index}
        borderBottom={index == data.length ? true : false}
        borderTop={index == 0 ? true : false}
        >
        <Th>{item.label}</Th>
        <Td>{item.value}</Td>
      </Tr>
    );
  });
}
const Tr = styled.View`
  background-color: ${p => (p.striped ? p.theme.BACKGROUND : p.theme.DEFAULT)};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 12px;
  padding-horizontal: 8px;
  border-width: 1px;
  border-color: ${p => p.theme.PLACE_HOLDER_TEXT_COLOR};
  border-botton-width: ${p => (p.borderBottom ? '1px' : '0px')};
  border-top-width: ${p => (p.borderTop ? '1px' : '0px')};
`;
const Th = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-light';
  color: ${p => p.theme.TEXT_COLOR};
  opacity: 0.7;
  width: 50%;
`;
const Td = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Medium';
  color: ${p => p.theme.TEXT_COLOR};
  width: 50%;
  line-height: 23px;
`;
