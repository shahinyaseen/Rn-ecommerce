import {View, Text} from 'react-native';
import React from 'react';
import {usePagination, DOTS} from './usePagination';
import styled from 'styled-components';
import {Icon} from '../';
export default function Pagination({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };
  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <Wrapper>
      <Item onPress={onPrevious} disabled={currentPage === 1}>
        <StyledIcon name="arrow-left" disabled={currentPage === 1} />
        <ItemText disabled={currentPage === 1} margin="left">
          Prev
        </ItemText>
      </Item>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <Item key={index}>
              <CountText>...</CountText>
            </Item>
          );
        }
        return (
          <Item key={index} onPress={() => onPageChange(pageNumber)}>
            <CountText active={pageNumber === currentPage}>
              {pageNumber}
            </CountText>
          </Item>
        );
      })}

      <Item onPress={onNext} disabled={currentPage === lastPage}>
        <ItemText disabled={currentPage === lastPage} margin="right">
          Next
        </ItemText>
        <StyledIcon name="arrow-right" disabled={currentPage === lastPage} />
      </Item>
    </Wrapper>
  );
}
const Wrapper = styled.View`
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
const Item = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const ItemText = styled.Text`
  margin-left: ${p=>p.margin == 'left'?"10px":"0px"};
  margin-right: ${p=>p.margin == 'right'?"10px":"0px"};
  font-size: 18px;
  opacity: ${p => (p.disabled ? 0.4 : 1)};
  color: ${p => p.theme.TEXT_COLOR};
  font-family: 'Poppins-Regular';
`;
const StyledIcon = styled(Icon)`
  color: ${p => p.theme.TEXT_COLOR};
  opacity: ${p => (p.disabled ? 0.4 : 1)};
  font-size: 18px;
`;
const CountText = styled.Text`
  font-size: 18px;
  color: ${p => p.theme.TEXT_COLOR};
  font-family: ${p => (p.active ? 'Poppins-Bold' : 'Poppins-Regular')};
  margin-horizontal: 12px;
`;
