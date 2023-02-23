import React from 'react';
import styled from 'styled-components/native';
export default function TrackProgress({data}) {
  return (
    <ProgressIndicator>
      {data.map((item, i) => {
        return data.length == i + 1 ? (
          <ProgressItem>
            <IndicatorLineLast active={item.status} />
            <IndicatorDot active={item.status} />
            <ProgressDetailsLast>
              <ProgressTitle>{item.title}</ProgressTitle>
              <ProgressDesc>{item.details}</ProgressDesc>
            </ProgressDetailsLast>
            <ProgressDate>{item.date}</ProgressDate>
          </ProgressItem>
        ) : (
          <ProgressItem>
            <IndicatorLine active={item.status} />
            <IndicatorDot active={item.status} />
            <ProgressDetails>
              <ProgressTitle>{item.title}</ProgressTitle>
              <ProgressDesc>{item.details}</ProgressDesc>
            </ProgressDetails>
            <ProgressDate>{item.date}</ProgressDate>
          </ProgressItem>
        );
      })}
    </ProgressIndicator>
  );
}
const ProgressIndicator = styled.View`
  padding-horizontal: ${p => p.theme.sWidth * (24 * p.theme.PX_WIDTH)};
`;
const ProgressItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: */
`;
const IndicatorLine = styled.View`
  height: 55px;
  width: 2px;
  background-color: ${p =>
    p.active ? p.theme.ACCENT : p.theme.ACCENT_SECONDARY};
`;
const IndicatorLineLast = styled.View`
  height: 25px;
  width: 2px;
  position: absolute;
  top: -13px;
  background-color: ${p =>
    p.active ? p.theme.ACCENT : p.theme.ACCENT_SECONDARY};
`;
const IndicatorDot = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 50px;
  background-color: ${p =>
    p.active ? p.theme.ACCENT : p.theme.ACCENT_SECONDARY};
  position: absolute;
  left: -5px;
  top: 7px;
`;
const ProgressDetails = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-top: -10px;
  /* padding-bottom: 10px; */
`;
const ProgressDetailsLast = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  margin-top: 3px;
  /* padding-bottom: 10px; */
`;
const ProgressTitle = styled.Text`
  color: ${p => p.theme.TEXT_COLOR};
  font-size: 14px;
  font-family: 'Poppins-Medium';
`;
const ProgressDesc = styled.Text`
  color: ${p => p.theme.TEXT_COLOR};
  font-size: 12px;
  font-family: 'Poppins-Regular';
  opacity: 0.4;
`;
const ProgressDate = styled.Text`
  color: ${p => p.theme.TEXT_COLOR};
  font-size: 12px;
  font-family: 'Poppins-Medium';
  opacity: 0.4;
  position: absolute;
  right: 0;
  top: 4px;
`;
