import React from 'react';
import {View, Text} from 'react-native';
import styled, {css} from 'styled-components/native';
import {Icon} from '../';
export default function ButtonIcon(props) {
  const {
    width,
    isAccent,
    isPrimary,
    isDark,
    isDefault,
    name,
    icon,
    icnWith,
    icnHeight,
    disabled,
    isRound,
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
      <StyledIcon
        name={icon}
        size={20}
        accent={isAccent}
        primary={isPrimary}
        dark={isDark}
        defaultC={isDefault}
      />
      {name && (
        <Name
          accent={isAccent}
          primary={isPrimary}
          dark={isDark}
          defaultC={isDefault}>
          {name}
        </Name>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.TouchableOpacity`
  width: ${p => p.width}px;
  border-radius: ${p => (p.round ? '60px' : '10px')};
  padding-horizontal: 10px;
  padding-vertical: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${({accent}) =>
    accent &&
    css`
      background-color: ${p => p.theme.ACCENT};
    `}
  ${({primary}) =>
    primary &&
    css`
      background-color: ${p => p.theme.PRIMARY};
    `}
  ${({dark}) =>
    dark &&
    css`
      background-color: ${p => p.theme.DARK};
    `}
  ${({defaultC}) =>
    defaultC &&
    css`
      background-color: ${p => p.theme.DEFAULT};
    `}
`;
const Name = styled.Text`
  ${({accent}) =>
    accent &&
    css`
      color: ${p => p.theme.ACCENT_TEXT};
    `}
  ${({primary}) =>
    primary &&
    css`
      color: ${p => p.theme.PRIMARY_TEXT};
    `}
  ${({dark}) =>
    dark &&
    css`
      color: ${p => p.theme.DARK_TEXT};
    `}
  ${({defaultC}) =>
    defaultC &&
    css`
      color: ${p => p.theme.DEFAULT_TEXT};
    `}
  font-size: 14px;
  font-family: 'Poppins-Medium';
  margin-left: 10px;
`;
const StyledIcon = styled(Icon)`
  ${({accent}) =>
    accent &&
    css`
      color: ${p => p.theme.ACCENT_TEXT};
    `}
  ${({primary}) =>
    primary &&
    css`
      color: ${p => p.theme.PRIMARY_TEXT};
    `}
  ${({dark}) =>
    dark &&
    css`
      color: ${p => p.theme.DARK_TEXT};
    `}
  ${({defaultC}) =>
    defaultC &&
    css`
      color: ${p => p.theme.DEFAULT_TEXT};
    `}
`;
