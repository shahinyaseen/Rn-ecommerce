import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {Icon} from '../Icon';
import {useNavigation} from '@react-navigation/native';

export default function BackButtonBar() {
  const navigation = useNavigation();
  return (
    <Footer>
      <FixedRow>
        <IconLeft
          name="longarrow-left"
          onPress={() => navigation.goBack()}
          size={22}
        />
      </FixedRow>
    </Footer>
  );
}

//Footer

const Footer = styled.View`
  postion: fixed;
  bottom: 0;
  background-color: ${p => p.theme.ACCENT_TEXT};
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  shadow-color: black;
  shadow-offset: 1px -1px;
  elevation: 10;
  z-index: 1;
`;
const FixedRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 24px;
  padding-vertical: 15px;
`;
const IconLeft = styled(Icon)`
  font-family: 'Poppins-Bold';
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
  margin-right: 28px;
`;
