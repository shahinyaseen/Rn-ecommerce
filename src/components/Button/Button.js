import React from 'react';
import styled, {css} from 'styled-components/native';
export default function Button(props) {
  const {
    width,
    name,
    isAccent,
    isPrimary,
    isDark,
    isDefault,
    isAccentSecondary,
    isRound,
    disabled,
    ...rest
  } = props;
  return (
    <Wrapper
      width={width}
      accent={isAccent}
      primary={isPrimary}
      dark={isDark}
      round={isRound}
      defaultC={isDefault}
      disabled={disabled}
      accentsecondary={isAccentSecondary}
      {...rest}>
      <Name
        accent={isAccent}
        accentsecondary={isAccentSecondary}
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
  border-radius: ${p => (p.round ? '60px' : '10px')};
  align-items: center;
  justify-content: center;
  padding-horizontal: 10px;
  padding-vertical: 10px;

  /* padding-horizontal:  ${p => p.width * 0.0366}px;
  padding-vertical:  ${p => p.width * 0.1467}px; */

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

 ${({accentsecondary}) =>
    accentsecondary &&
    css`
      background-color: ${p => p.theme.ACCENT_SECONDARY};
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

    ${({accentsecondary}) =>
    accentsecondary &&
    css`
      color: ${p => p.theme.ACCENT_SECONDARY_TEXT};
    `}
  font-size: 14px;
  font-family: 'Poppins-Medium';
`;
