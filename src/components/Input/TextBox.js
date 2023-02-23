import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {useStateValue} from '../../contextAPI/GlobelState';
export default function TextBox({
  width,
  label,
  placeholder,
  hasMargin,
  multiline,
  ...rest
}) {
  const [{theme}] = useStateValue();
  return (
    <InputWrapper>
      {label && <LabelText>{label}</LabelText>}
      <Inputbox
        width={width}
        placeholderTextColor={theme.PLACE_HOLDER_TEXT_COLOR}
        placeholder={placeholder}
        multiline={multiline}
        {...rest}
      />
    </InputWrapper>
  );
}
const InputWrapper = styled.View`
  justify-content: center;
`;
const LabelText = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Medium';
  color: ${p => p.theme.TEXT_COLOR};
  margin-bottom: 8px;
`;
const Inputbox = styled.TextInput`
  background-color: ${p => p.theme.INPUT_BG};
  color: ${p => p.theme.TEXT_COLOR};
  display: flex;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${p => p.theme.PLACE_HOLDER_TEXT_COLOR};
  width: ${p => p.width}px;
  height: ${p => (p.multiline ? '96px' : '48px')};
  padding-horizontal: 15px;
  font-family: 'Poppins-Regular';
  font-size: 14px;
  text-align-vertical: ${p => (p.multiline ? 'top' : 'bottom')};
`;
