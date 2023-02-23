import {View, Text} from 'react-native';
import React from 'react';
import styled, {css} from 'styled-components/native';
import {useStateValue} from '../../contextAPI/GlobelState';
export default function TextBoxBtn({
  width,
  label,
  placeholder,
  btnAction,
  btnName,
  btnIsAccentSecondary,
  ...rest
}) {
  const [{theme}] = useStateValue();
  return (
    <InputWrapper>
      {label && <LabelText>{label}</LabelText>}
      <InputMain width={width}>
        <Inputbox
          placeholderTextColor={theme.PLACE_HOLDER_TEXT_COLOR}
          placeholder={placeholder}
          {...rest}
        />
        <BoxBtn accentSecondary={btnIsAccentSecondary}>
          <BoxBtnText accentSecondary={btnIsAccentSecondary}>
            {btnName}
          </BoxBtnText>
        </BoxBtn>
      </InputMain>
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
  border-width: 0px;
  height: 48px;
  padding-right: 15px;
  font-family: 'Poppins-Regular';
  font-size: 14px;
  width: 70%;
`;
const InputMain = styled.View`
  width: ${p => p.width}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${p => p.theme.PLACE_HOLDER_TEXT_COLOR};
  padding-left: 15px;
`;
const BoxBtn = styled.TouchableOpacity`
  border-radius: 10px;
  padding-horizontal: 20px;
  padding-vertical: 8px;
  margin-right: 5px;
  ${({accentSecondary}) =>
    accentSecondary &&
    css`
      background-color: ${p => p.theme.ACCENT_SECONDARY};
    `};
`;
const BoxBtnText = styled.Text`
  ${({accentSecondary}) =>
    accentSecondary &&
    css`
      color: ${p => p.theme.ACCENT_SECONDARY_TEXT};
    `}
  font-size: 14px;
  font-family: 'Poppins-Regular';
`;
