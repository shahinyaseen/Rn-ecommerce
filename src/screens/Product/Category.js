import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {BackButtonBar} from '../../components';

export default function Category() {
  const insets = useSafeAreaInsets();
  return (
    <Wrapper
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag">
        <Title>Category</Title>
      </ScrollView>
      <BackButtonBar />
    </Wrapper>
  );
}

const Wrapper = styled.View`
  flex: 1;
  background-color: ${p => p.theme.BACKGROUND};
`;
const Title = styled.Text`
  font-size: 24px;
  font-family: 'Poppins-Bold';
  color: ${p => p.theme.TEXT_COLOR};
  text-align: center;
`;
