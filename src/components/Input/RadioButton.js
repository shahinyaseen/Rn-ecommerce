import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {Icon} from '../Icon';
function RadioButton({label, ...rest}) {
  return (
    <Wrapper>
      <RadioContainer>
        <RadioLable> {label}</RadioLable>
        <InputRadio type="radio" {...rest} />
        {/* <Icon name="checkmark"/> */}
      </RadioContainer>
    </Wrapper>
  );
}
export default RadioButton;

const Wrapper = styled.View``;

const RadioContainer = styled.View``;
const RadioLable = styled.Text``;
const InputRadio = styled.TouchableOpacity``;
