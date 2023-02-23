import React from 'react';
import {View, Text} from 'react-native';
import styled, {css} from 'styled-components/native';
export default function ButtonOutline(props) {
  const {
    width,
    name,
    isAccent,
    isPrimary,
    isDark,
    isDefault,
    disabled,isRound,
    ...rest
  } = props;
  return (
    <Wrapper
      width={width}
      accent={isAccent}
      primary={isPrimary}
      dark={isDark}
      defaultC={isDefault}
      disabled={disabled}
      round={isRound}
      {...rest}>
      <Name
        accent={isAccent}
        primary={isPrimary}
        dark={isDark}
        defaultC={isDefault}>
        {name}
      </Name>
    </Wrapper>
  );
}
const Wrapper = styled.TouchableOpacity`
  width: ${p => p.width}px;
  border-radius: ${p=>p.round?"60px":"10px"};
  border-width: 2px;
  padding-horizontal: 10px;
  padding-vertical: 10px;
  align-items: center;
  justify-ontent: center;
  ${({accent}) =>
    accent &&
    css`
      border-color: ${p => p.theme.ACCENT};
    `}
  ${({primary}) =>
    primary &&
    css`
      border-color: ${p => p.theme.PRIMARY};
    `}
  ${({dark}) =>
    dark &&
    css`
      border-color: ${p => p.theme.DARK};
    `}
  ${({defaultC}) =>
    defaultC &&
    css`
      border-color: ${p => p.theme.DEFAULT};
    `}
`;
const Name = styled.Text`
  ${({accent}) =>
    accent &&
    css`
      color: ${p => p.theme.ACCENT};
    `}
  ${({primary}) =>
    primary &&
    css`
      color: ${p => p.theme.PRIMARY};
    `}
  ${({dark}) =>
    dark &&
    css`
      color: ${p => p.theme.DARK};
    `}
  ${({defaultC}) =>
    defaultC &&
    css`
      color: ${p => p.theme.DEFAULT};
    `}
  font-size: 14px;
  font-family: 'Poppins-Medium';
`;
