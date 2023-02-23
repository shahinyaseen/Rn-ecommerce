import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import TextBoxIcon from '../Input/TextBoxIcon';
import {useStateValue} from '../../contextAPI/GlobelState';
import styled from 'styled-components/native';
import TextBox from '../Input/TextBox';
import {Icon} from '../Icon';
import ButtonIcon from '../Button/ButtonIcon';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    id: 1,
    title: 'Iphone 13',
  },
  {
    id: 2,
    title: 'Iphone 13 pro',
  },
  {
    id: 3,
    title: 'Iphone 13 mini',
  },
  {
    id: 4,
    title: 'Iphone 12 ',
  },
  {
    id: 5,
    title: 'Iphone 12 pro',
  },
  {
    id: 6,
    title: 'Samsung',
  },
];
const SearchBar = ({placeholder, data}) => {
  const [{theme}] = useStateValue();
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  const navigation = useNavigation();

  const handleFilter = event => {
    const searchWord = event;
    setWordEntered(searchWord);
    const newFilter = data.filter(value => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <Wrapper>
      <SearchBarWrapper>
        <InnerWrapper>
          <Inputbox
            placeholder={placeholder}
            color={theme.PLACE_HOLDER_TEXT_COLOR}
            value={wordEntered}
            onChangeText={handleFilter}
          />
          <SearchIcon name="search" size={18} color={theme.TEXT_COLOR} />
        </InnerWrapper>
      </SearchBarWrapper>
      <View>
        {filteredData.length != 0 && (
          <SearchResultWrapper>
            {filteredData.map((value, key) => {
              return (
                <SearchItems key={key}>
                  <SearchText>{value.title}</SearchText>
                  <IconArrow name="arrow-up-left" size={16} />
                </SearchItems>
              );
            })}
          </SearchResultWrapper>
        )}
      </View>
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.View``;
const SearchBarWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 40px auto 24px auto;
  border-radius: 10px;
  ${'' /* border: ${p => p.theme.ACCENT_LIGHT_TEXT}; */}
`;

const SearchbarBox = styled(TextBoxIcon)`
  color: ${p => p.theme.ACCENT_LIGHT_TEXT};
  font-family: 'Poppins';
  font-size: 14px;
  height: 40px;
`;
const SearchResultWrapper = styled.View`
  padding-horizontal: 25px;
`;

const SearchItems = styled.TouchableOpacity`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  border-color: ${p => p.theme.ITEM_BORDER};
  border-bottom-width: 1px;
  padding-vertical: 10px;
`;

const SearchText = styled.Text`
  font-family: 'Poppins-Bold';
  color: ${p => p.theme.PRIMARY};
  font-size: 16px;
`;
const IconArrow = styled(Icon)`
  color: ${p => p.theme.PRIMARY};
`;
const InputWrapper = styled.View`
  justify-content: center;
`;
const InnerWrapper = styled.View`
  border-width: 2px;
  background-color: ${p => p.theme.INPUT_BG};
  border-radius: 10px;
  border-color: ${p => p.theme.ACCENT_LIGHT_TEXT};
  width: ${p => p.theme.sWidth * 0.9}px;
  flex-direction: row;
  ${'' /* justify-content: space-between; */}
  align-items: center;
`;

const Inputbox = styled.TextInput`
  border-radius: 10px;
  background-color: ${p => p.theme.INPUT_BG};
  color: ${p => p.theme.TEXT_COLOR};
  height: 40px;
  width: 90%;
  padding-left: 15px;
  font-family: 'Poppins-Regular';
  font-size: 14px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const SearchIcon = styled(Icon)``;
