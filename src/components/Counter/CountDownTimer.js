import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

export default function CountDownTimer({
  timerHour,
  timerMinutes,
  timerSeconds,
}) {
  return (
    <Wrapper>
      {/* <Time>
        <p>{timerDays}</p>
        <small>D</small>
      </Time> */}
      <Time>
        <TimeWrap>
          <TimeText>{timerHour}</TimeText>
          <LabelText>H</LabelText>
        </TimeWrap>
        <TimeWrap>
          <TimeText>{timerMinutes}</TimeText>
          <LabelText>M</LabelText>
        </TimeWrap>
        <TimeWrap>
          <TimeText>{timerSeconds}</TimeText>
          <LabelText>S</LabelText>
        </TimeWrap>
      </Time>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  justify-content: flex-start;
`;

const Time = styled.View`
  width: 130px;
  height: 25px;
  background-color: ${p => p.theme.COUNT_BG};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  border-radius: 4px;
`;
const TimeWrap = styled.View`
  flex-direction: row;
  align-items: center;
`;
const TimeText = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 16px;
  color: ${p => p.theme.COUNT_TEXT};
`;
const LabelText = styled.Text`
  font-size: 16px;
  font-family: 'Poppins';
`;
