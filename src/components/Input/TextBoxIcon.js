import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {useStateValue} from '../../contextAPI/GlobelState';
import {Icon} from '../';
export default function TextBoxIcon({
  width,
  label,
  placeholder,
  icon,
  color,
  ...rest
}) {
  const [{theme}] = useStateValue();
  return (
    <InputWrapper>
      {label && <LabelText>{label}</LabelText>}
      <InnerWrapper width={width}>
        <Inputbox
          placeholderTextColor={theme.PLACE_HOLDER_TEXT_COLOR}
          placeholder={placeholder}
          {...rest}
        />
        <Icon name={icon} size={18} style={{paddingRight: 15}} color={color} />
      </InnerWrapper>
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
const InnerWrapper = styled.View`
  border-width: 1px;
  background-color: ${p => p.theme.INPUT_BG};
  border-radius: 10px;
  border-color: ${p => p.theme.PLACE_HOLDER_TEXT_COLOR};
  width: ${p => p.width}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Inputbox = styled.TextInput`
  border-radius: 10px;
  background-color: ${p => p.theme.INPUT_BG};
  color: ${p => p.theme.TEXT_COLOR};
  display: flex;
  height: 48px;
  width: 90%;
  padding-left: 15px;
  font-family: 'Poppins-Regular';
  font-size: 14px;
`;
