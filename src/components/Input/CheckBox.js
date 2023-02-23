import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {Icon} from '../Icon/index';

export default function CheckBox({
  label,
  checked,
  onChange,
  isActive,
  ...rest
}) {
  return (
    <Wrapper onPress={onChange}>
      <CheckIcon name={checked ? 'checkbox-active' : 'checkbox'} size={18} />
      <Label isActive={checked}>{label}</Label>
    </Wrapper>
  );
}
const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
const Label = styled.Text`
  font-family: 'Poppins';
  font-size: 15px;
  color: ${p => p.theme.ACCENT_SECONDARY_TEXT};
`;
const CheckIcon = styled(Icon)`
  color: ${p => p.theme.ACCENT_SECONDARY_TEXT};
  margin-right: 14px;
`;
