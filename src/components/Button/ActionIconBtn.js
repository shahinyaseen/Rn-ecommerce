import {View, Text} from 'react-native';
import React from 'react';
import styled, {css} from 'styled-components/native';
import {Icon} from '../';
export default function ActionIconBtn({
  isAccent,
  accentSecondary,
  icon,
  ...rest
}) {
  return (
    <Wrapper {...rest} accent={isAccent} accentSecondary={accentSecondary}>
      <StyledIcon
        accent={isAccent}
        accentSecondary={accentSecondary}
        name={icon}
        size={14}
      />
    </Wrapper>
  );
}
const Wrapper = styled.TouchableOpacity`
  ${({accent}) =>
    accent &&
    css`
      background-color: ${p => p.theme.ACCENT};
    `}
  ${({accentSecondary}) =>
    accentSecondary &&
    css`
      background-color: ${p => p.theme.ACCENT_SECONDARY};
    `}
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding-horizontal: 9px;
  padding-vertical: 9px;
  width: ${p => p.theme.sWidth * 0.1025}px;
`;
const StyledIcon = styled(Icon)`
  ${({accent}) =>
    accent &&
    css`
      color: ${p => p.theme.ACCENT_TEXT};
    `}
  ${({accentSecondary}) =>
    accentSecondary &&
    css`
      color: ${p => p.theme.ACCENT_SECONDARY_TEXT};
    `}
  
  font-size: 21px;
`;
